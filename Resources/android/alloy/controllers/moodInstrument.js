function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function agregarCatego(nombreCatego) {
        if ("" != nombreCatego) {
            var request = Ti.Network.createHTTPClient({
                onload: function() {
                    var json = JSON.parse(this.responseText);
                    var json = json.newCatego;
                    var row = Ti.UI.createPickerRow({
                        title: json[0].nombre,
                        value: json[0].id
                    });
                    $.picker.columns[0].addRow(row);
                    var ultimo = $.picker.columns[0].getRowCount() - 1;
                    $.picker.setSelectedRow(0, ultimo, false);
                },
                onerror: function(e) {
                    Ti.API.debug(e.error);
                    alert("There was an error during the conexion");
                },
                timeout: 3e3
            });
            request.open("POST", "http://app.bluecoreservices.com/webservices/addCatego.php");
            var params = {
                nuevaCatego: nombreCatego,
                idPaciente: idPaciente
            };
            request.send(params);
        } else alert("el campo de categoría está vacío");
    }
    function getCategorias() {
        var sendit = Ti.Network.createHTTPClient({
            onerror: function(e) {
                Ti.API.debug(e.error);
                $.dialogErrorCatalogList.show();
            },
            timeout: 3e3
        });
        sendit.open("POST", "http://app.bluecoreservices.com/webservices/getCategorias.php");
        var params = {
            idPaciente: idPaciente
        };
        sendit.send(params);
        sendit.onload = function() {
            var json = JSON.parse(this.responseText);
            var json = json.categorias;
            0 == json.length && ($.contenedorCategorias.headerTitle = "The database row is empty");
            dataArray = [];
            var columnPicker = Ti.UI.createPickerColumn();
            for (var i = 0; i < json.length; i++) {
                var row = Ti.UI.createPickerRow({
                    title: json[i].nombre,
                    value: json[i].id
                });
                dataArray.push(row);
                columnPicker.addRow(row);
            }
            $.picker.add(columnPicker);
        };
    }
    function insertData() {
        if ("" != $.question1.value && null != $.question1.value) {
            var request = Ti.Network.createHTTPClient({
                onload: function() {
                    alert("Gracias por llenar la Evaluación!");
                    $.moodInstrument.close();
                },
                onerror: function(e) {
                    Ti.API.debug(e.error);
                    $.dialogError.show();
                },
                timeout: 3e3
            });
            request.open("POST", "http://app.bluecoreservices.com/webservices/addMood.php");
            var params = {
                idPaciente: idPaciente,
                categoria: categoriaActiva,
                severidad: $.question1.value,
                informacion: $.textArea.value
            };
            request.send(params);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "moodInstrument";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.moodInstrument = Ti.UI.createWindow({
        id: "moodInstrument"
    });
    $.__views.moodInstrument && $.addTopLevelView($.__views.moodInstrument);
    $.__views.InformationModal = Ti.UI.createView({
        layout: "composite",
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        zIndex: 2,
        backgroundColor: "transparent",
        id: "InformationModal"
    });
    $.__views.moodInstrument.add($.__views.InformationModal);
    $.__views.__alloyId172 = Ti.UI.createView({
        top: "0sp",
        layout: "vertical",
        zIndex: 2,
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId172"
    });
    $.__views.InformationModal.add($.__views.__alloyId172);
    $.__views.__alloyId173 = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#ffffff",
        font: {
            fontSize: "18sp"
        },
        height: Titanium.UI.SIZE,
        text: "Lea atentamente cada pregunta y usando el slider, eliga el grado de facilidad o utilidad del uso de la aplicación móvil para usted.",
        id: "__alloyId173"
    });
    $.__views.__alloyId172.add($.__views.__alloyId173);
    $.__views.__alloyId174 = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#ffffff",
        font: {
            fontSize: "18sp"
        },
        height: Titanium.UI.SIZE,
        text: "No hay respuestas correctas o incorrectas. Por favor, sea honesto(a) y responda a todas la preguntas.",
        id: "__alloyId174"
    });
    $.__views.__alloyId172.add($.__views.__alloyId174);
    $.__views.__alloyId175 = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#ffffff",
        font: {
            fontSize: "18sp"
        },
        height: Titanium.UI.SIZE,
        text: "Para moverse entre las preguntas deslice su dedo en la pantalla hacia la derecha o izquierda",
        id: "__alloyId175"
    });
    $.__views.__alloyId172.add($.__views.__alloyId175);
    $.__views.__alloyId176 = Ti.UI.createView({
        zIndex: 3,
        bottom: "10sp",
        right: "10sp",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId176"
    });
    $.__views.InformationModal.add($.__views.__alloyId176);
    $.__views.closeModal = Ti.UI.createButton({
        title: "Aceptar",
        id: "closeModal"
    });
    $.__views.__alloyId176.add($.__views.closeModal);
    $.__views.__alloyId177 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        backgroundColor: "#000000",
        opacity: .9,
        zIndex: 1,
        top: "0sp",
        id: "__alloyId177"
    });
    $.__views.InformationModal.add($.__views.__alloyId177);
    var __alloyId178 = [];
    $.__views.__alloyId179 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        id: "__alloyId179"
    });
    __alloyId178.push($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createView({
        layout: "vertical",
        height: Titanium.UI.SIZE,
        width: Titanium.UI.FILL,
        backgroundColor: "#C4C4C4",
        bottom: 0,
        borderRadius: "5sp",
        id: "__alloyId180"
    });
    $.__views.__alloyId179.add($.__views.__alloyId180);
    $.__views.__alloyId181 = Ti.UI.createView({
        layout: "vertical",
        height: Titanium.UI.SIZE,
        width: Titanium.UI.FILL,
        backgroundColor: "#FFFFFF",
        bottom: "2sp",
        borderRadius: "5sp",
        id: "__alloyId181"
    });
    $.__views.__alloyId180.add($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createView({
        layout: "vertical",
        left: "10sp",
        right: "10sp",
        center: {
            y: "50%"
        },
        height: Titanium.UI.SIZE,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        id: "__alloyId182"
    });
    $.__views.__alloyId181.add($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createView({
        id: "__alloyId183"
    });
    $.__views.__alloyId182.add($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createLabel({
        height: Titanium.UI.SIZE,
        top: "30sp",
        bottom: "10sp",
        left: "10sp",
        right: "10sp",
        font: {
            fontSize: "20sp"
        },
        textAlign: "left",
        zIndex: 1,
        text: "Categoría que identifica mi ansiedad",
        id: "__alloyId184"
    });
    $.__views.__alloyId183.add($.__views.__alloyId184);
    $.__views.picker = Ti.UI.createPicker({
        width: Titanium.UI.FILL,
        id: "picker",
        top: "50",
        selectionIndicator: "true",
        useSpinner: "false"
    });
    $.__views.__alloyId183.add($.__views.picker);
    $.__views.__alloyId185 = Ti.UI.createView({
        id: "__alloyId185"
    });
    $.__views.__alloyId182.add($.__views.__alloyId185);
    $.__views.openAddCat = Ti.UI.createButton({
        title: "Agregar categoría",
        id: "openAddCat"
    });
    $.__views.__alloyId185.add($.__views.openAddCat);
    $.__views.__alloyId186 = Ti.UI.createView({
        id: "__alloyId186"
    });
    $.__views.nuevaCatego = Ti.UI.createTextField({
        width: Titanium.UI.FILL,
        id: "nuevaCatego"
    });
    $.__views.__alloyId186.add($.__views.nuevaCatego);
    var __alloyId188 = [];
    __alloyId188.push("Agregar");
    __alloyId188.push("Cancelar");
    $.__views.dialogCategoria = Ti.UI.createAlertDialog({
        androidView: $.__views.__alloyId186,
        buttonNames: __alloyId188,
        id: "dialogCategoria",
        title: "Agregar Categoria",
        cancel: "1"
    });
    $.__views.__alloyId190 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        id: "__alloyId190"
    });
    __alloyId178.push($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createView({
        layout: "vertical",
        left: "10sp",
        right: "10sp",
        center: {
            y: "50%"
        },
        height: Titanium.UI.SIZE,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        id: "__alloyId191"
    });
    $.__views.__alloyId190.add($.__views.__alloyId191);
    $.__views.__alloyId192 = Ti.UI.createLabel({
        height: Titanium.UI.SIZE,
        top: "30sp",
        bottom: "10sp",
        left: "10sp",
        right: "10sp",
        font: {
            fontSize: "20sp"
        },
        textAlign: "left",
        zIndex: 1,
        text: "¿Cuál es el grado de ansiedad que sientes?",
        id: "__alloyId192"
    });
    $.__views.__alloyId191.add($.__views.__alloyId192);
    $.__views.question1 = Ti.UI.createSlider({
        left: "10sp",
        right: "10sp",
        bottom: "10sp",
        min: 0,
        max: 10,
        value: "5",
        zIndex: 2,
        id: "question1"
    });
    $.__views.__alloyId191.add($.__views.question1);
    $.__views.__alloyId193 = Ti.UI.createView({
        bottom: "20sp",
        id: "__alloyId193"
    });
    $.__views.__alloyId191.add($.__views.__alloyId193);
    $.__views.__alloyId194 = Ti.UI.createLabel({
        left: "5sp",
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Muy sutil",
        id: "__alloyId194"
    });
    $.__views.__alloyId193.add($.__views.__alloyId194);
    $.__views.__alloyId195 = Ti.UI.createLabel({
        right: "5sp",
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Como nunca",
        id: "__alloyId195"
    });
    $.__views.__alloyId193.add($.__views.__alloyId195);
    $.__views.__alloyId196 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        id: "__alloyId196"
    });
    __alloyId178.push($.__views.__alloyId196);
    $.__views.__alloyId197 = Ti.UI.createView({
        layout: "vertical",
        left: "10sp",
        right: "10sp",
        center: {
            y: "50%"
        },
        height: Titanium.UI.SIZE,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        id: "__alloyId197"
    });
    $.__views.__alloyId196.add($.__views.__alloyId197);
    $.__views.__alloyId198 = Ti.UI.createLabel({
        height: Titanium.UI.SIZE,
        top: "30sp",
        bottom: "10sp",
        left: "10sp",
        right: "10sp",
        font: {
            fontSize: "20sp"
        },
        textAlign: "left",
        zIndex: 1,
        text: "¿Podrías describir un poco tu ansiedad?",
        id: "__alloyId198"
    });
    $.__views.__alloyId197.add($.__views.__alloyId198);
    $.__views.textArea = Ti.UI.createTextArea({
        width: Titanium.UI.FILL,
        id: "textArea"
    });
    $.__views.__alloyId197.add($.__views.textArea);
    $.__views.__alloyId199 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        id: "__alloyId199"
    });
    __alloyId178.push($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createView({
        layout: "vertical",
        top: "10sp",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId200"
    });
    $.__views.__alloyId199.add($.__views.__alloyId200);
    $.__views.__alloyId201 = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#000000",
        textAlign: "center",
        font: {
            fontSize: "45sp"
        },
        height: Titanium.UI.SIZE,
        text: "¡Gracias!",
        id: "__alloyId201"
    });
    $.__views.__alloyId200.add($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#000000",
        font: {
            fontSize: "18sp"
        },
        height: Titanium.UI.SIZE,
        text: "Agradecemos mucho su participación, su retroalimentación significa mucho para nosotros",
        id: "__alloyId202"
    });
    $.__views.__alloyId200.add($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#000000",
        font: {
            fontSize: "18sp"
        },
        height: Titanium.UI.SIZE,
        text: 'Presione el botón "Enviar" para cerrar el cuestionario',
        id: "__alloyId203"
    });
    $.__views.__alloyId200.add($.__views.__alloyId203);
    $.__views.__alloyId204 = Ti.UI.createView({
        bottom: "30sp",
        left: "10sp",
        right: "10sp",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: "center",
        id: "__alloyId204"
    });
    $.__views.__alloyId199.add($.__views.__alloyId204);
    $.__views.sendMood = Ti.UI.createButton({
        title: "Enviar",
        id: "sendMood"
    });
    $.__views.__alloyId204.add($.__views.sendMood);
    $.__views.scrollView = Ti.UI.createScrollableView({
        zIndex: "1",
        views: __alloyId178,
        id: "scrollView",
        showPagingControl: "false"
    });
    $.__views.moodInstrument.add($.__views.scrollView);
    $.__views.__alloyId205 = Ti.UI.createView({
        id: "__alloyId205"
    });
    $.__views.__alloyId206 = Ti.UI.createLabel({
        text: "Hubo un error en la conexión",
        id: "__alloyId206"
    });
    $.__views.__alloyId205.add($.__views.__alloyId206);
    var __alloyId208 = [];
    __alloyId208.push("Reintentar");
    __alloyId208.push("Cancelar");
    $.__views.dialogError = Ti.UI.createAlertDialog({
        androidView: $.__views.__alloyId205,
        buttonNames: __alloyId208,
        id: "dialogError",
        title: "Error Conexión",
        cancel: "1"
    });
    $.__views.__alloyId210 = Ti.UI.createView({
        id: "__alloyId210"
    });
    $.__views.__alloyId211 = Ti.UI.createLabel({
        text: "Hubo un error en la conexión",
        id: "__alloyId211"
    });
    $.__views.__alloyId210.add($.__views.__alloyId211);
    var __alloyId213 = [];
    __alloyId213.push("Reintentar");
    __alloyId213.push("Cancelar");
    $.__views.dialogErrorCatalog = Ti.UI.createAlertDialog({
        androidView: $.__views.__alloyId210,
        buttonNames: __alloyId213,
        id: "dialogErrorCatalog",
        title: "Error Conexión",
        cancel: "1"
    });
    $.__views.__alloyId215 = Ti.UI.createView({
        id: "__alloyId215"
    });
    $.__views.__alloyId216 = Ti.UI.createLabel({
        text: "Hubo un error en la conexión",
        id: "__alloyId216"
    });
    $.__views.__alloyId215.add($.__views.__alloyId216);
    var __alloyId218 = [];
    __alloyId218.push("Reintentar");
    __alloyId218.push("Cancelar");
    $.__views.dialogErrorCatalogList = Ti.UI.createAlertDialog({
        androidView: $.__views.__alloyId215,
        buttonNames: __alloyId218,
        id: "dialogErrorCatalogList",
        title: "Error Conexión",
        cancel: "1"
    });
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var idPaciente = arguments[0].idPatient;
    var categoriaActiva = null;
    $.moodInstrument.open();
    getCategorias();
    $.closeModal.addEventListener("click", function() {
        $.InformationModal.hide();
    });
    $.sendMood.addEventListener("click", function() {
        insertData();
    });
    $.openAddCat.addEventListener("click", function() {
        $.dialogCategoria.show();
    });
    $.dialogError.addEventListener("click", function(ev) {
        0 == ev.index ? insertData() : 1 == ev.index;
    });
    $.dialogErrorCatalog.addEventListener("click", function(ev) {
        0 == ev.index ? agregarCatego(categoriaActiva) : 1 == ev.index;
    });
    $.dialogErrorCatalogList.addEventListener("click", function(ev) {
        0 == ev.index ? getCategorias() : 1 == ev.index;
    });
    $.dialogCategoria.addEventListener("click", function(ev) {
        if (0 == ev.index) {
            categoriaActiva = ev.source.androidView.children[0].value;
            agregarCatego(ev.source.androidView.children[0].value);
        } else 1 == ev.index;
    });
    $.picker.addEventListener("change", function(e) {
        categoriaActiva = e.row.value;
        alert(categoriaActiva);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;