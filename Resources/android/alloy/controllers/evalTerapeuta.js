function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function insertData() {
        if ("" != $.question1.value && null != $.question1.value) {
            var request = Ti.Network.createHTTPClient({
                onload: function() {
                    alert("Gracias por llenar la Evaluación!");
                    $.evaluacionTerapeuta.close();
                },
                onerror: function(e) {
                    Ti.API.debug(e.error);
                    alert("There was an error during the conexion");
                },
                timeout: 1e3
            });
            request.open("POST", "http://app.bluecoreservices.com/webservices/addEvalTerapeuta.php");
            var params = {
                question1: $.question1.value,
                question2: $.question2.value,
                question3: $.question3.value
            };
            request.send(params);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "evalTerapeuta";
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
    $.__views.evaluacionTerapeuta = Ti.UI.createWindow({
        id: "evaluacionTerapeuta"
    });
    $.__views.evaluacionTerapeuta && $.addTopLevelView($.__views.evaluacionTerapeuta);
    $.__views.InformationModal = Ti.UI.createView({
        layout: "composite",
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        zIndex: 2,
        backgroundColor: "transparent",
        id: "InformationModal"
    });
    $.__views.evaluacionTerapeuta.add($.__views.InformationModal);
    $.__views.__alloyId131 = Ti.UI.createView({
        top: "0sp",
        layout: "vertical",
        zIndex: 2,
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId131"
    });
    $.__views.InformationModal.add($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#ffffff",
        font: {
            fontSize: "18sp"
        },
        height: Titanium.UI.SIZE,
        text: "Lea atentamente cada pregunta y usando el slider, eliga el grado de facilidad o utilidad del uso de la aplicación móvil para usted.",
        id: "__alloyId132"
    });
    $.__views.__alloyId131.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#ffffff",
        font: {
            fontSize: "18sp"
        },
        height: Titanium.UI.SIZE,
        text: "No hay respuestas correctas o incorrectas. Por favor, sea honesto(a) y responda a todas la preguntas.",
        id: "__alloyId133"
    });
    $.__views.__alloyId131.add($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#ffffff",
        font: {
            fontSize: "18sp"
        },
        height: Titanium.UI.SIZE,
        text: "Para moverse entre las preguntas deslice su dedo en la pantalla hacia la derecha o izquierda",
        id: "__alloyId134"
    });
    $.__views.__alloyId131.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createView({
        zIndex: 3,
        bottom: "10sp",
        right: "10sp",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId135"
    });
    $.__views.InformationModal.add($.__views.__alloyId135);
    $.__views.closeModal = Ti.UI.createButton({
        title: "Aceptar",
        id: "closeModal"
    });
    $.__views.__alloyId135.add($.__views.closeModal);
    $.__views.__alloyId136 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        backgroundColor: "#000000",
        opacity: .9,
        zIndex: 1,
        top: "0sp",
        id: "__alloyId136"
    });
    $.__views.InformationModal.add($.__views.__alloyId136);
    var __alloyId137 = [];
    $.__views.__alloyId138 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        id: "__alloyId138"
    });
    __alloyId137.push($.__views.__alloyId138);
    $.__views.__alloyId139 = Ti.UI.createView({
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
        id: "__alloyId139"
    });
    $.__views.__alloyId138.add($.__views.__alloyId139);
    $.__views.__alloyId140 = Ti.UI.createLabel({
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
        text: "Para usted ¿el uso de la aplicación móvil ha sido?",
        id: "__alloyId140"
    });
    $.__views.__alloyId139.add($.__views.__alloyId140);
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
    $.__views.__alloyId139.add($.__views.question1);
    $.__views.__alloyId141 = Ti.UI.createView({
        bottom: "20sp",
        id: "__alloyId141"
    });
    $.__views.__alloyId139.add($.__views.__alloyId141);
    $.__views.__alloyId142 = Ti.UI.createLabel({
        left: "5sp",
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Muy Difícil",
        id: "__alloyId142"
    });
    $.__views.__alloyId141.add($.__views.__alloyId142);
    $.__views.__alloyId143 = Ti.UI.createLabel({
        right: "5sp",
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Muy Fácil",
        id: "__alloyId143"
    });
    $.__views.__alloyId141.add($.__views.__alloyId143);
    $.__views.__alloyId144 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        id: "__alloyId144"
    });
    __alloyId137.push($.__views.__alloyId144);
    $.__views.__alloyId145 = Ti.UI.createView({
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
        id: "__alloyId145"
    });
    $.__views.__alloyId144.add($.__views.__alloyId145);
    $.__views.__alloyId146 = Ti.UI.createLabel({
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
        text: "Para usted ¿la información visual de las gráficas de severidad de la ansiedad y personas o lugares en que se produce la ansiedad ha sido?",
        id: "__alloyId146"
    });
    $.__views.__alloyId145.add($.__views.__alloyId146);
    $.__views.question2 = Ti.UI.createSlider({
        left: "10sp",
        right: "10sp",
        bottom: "10sp",
        min: 0,
        max: 10,
        value: "5",
        zIndex: 2,
        id: "question2"
    });
    $.__views.__alloyId145.add($.__views.question2);
    $.__views.__alloyId147 = Ti.UI.createView({
        bottom: "20sp",
        id: "__alloyId147"
    });
    $.__views.__alloyId145.add($.__views.__alloyId147);
    $.__views.__alloyId148 = Ti.UI.createLabel({
        left: "5sp",
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Poco útil",
        id: "__alloyId148"
    });
    $.__views.__alloyId147.add($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createLabel({
        right: "5sp",
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Muy útil",
        id: "__alloyId149"
    });
    $.__views.__alloyId147.add($.__views.__alloyId149);
    $.__views.__alloyId150 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        id: "__alloyId150"
    });
    __alloyId137.push($.__views.__alloyId150);
    $.__views.__alloyId151 = Ti.UI.createView({
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
        id: "__alloyId151"
    });
    $.__views.__alloyId150.add($.__views.__alloyId151);
    $.__views.__alloyId152 = Ti.UI.createLabel({
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
        text: "Para usted, en general ¿el uso de la aplicación ha sido para el desarrollo adecuado del tratamiento del paciente?",
        id: "__alloyId152"
    });
    $.__views.__alloyId151.add($.__views.__alloyId152);
    $.__views.question3 = Ti.UI.createSlider({
        left: "10sp",
        right: "10sp",
        bottom: "10sp",
        min: 0,
        max: 10,
        value: "5",
        zIndex: 2,
        id: "question3"
    });
    $.__views.__alloyId151.add($.__views.question3);
    $.__views.__alloyId153 = Ti.UI.createView({
        bottom: "20sp",
        id: "__alloyId153"
    });
    $.__views.__alloyId151.add($.__views.__alloyId153);
    $.__views.__alloyId154 = Ti.UI.createLabel({
        left: "5sp",
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Poco útil",
        id: "__alloyId154"
    });
    $.__views.__alloyId153.add($.__views.__alloyId154);
    $.__views.__alloyId155 = Ti.UI.createLabel({
        right: "5sp",
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Muy útil",
        id: "__alloyId155"
    });
    $.__views.__alloyId153.add($.__views.__alloyId155);
    $.__views.__alloyId156 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        id: "__alloyId156"
    });
    __alloyId137.push($.__views.__alloyId156);
    $.__views.__alloyId157 = Ti.UI.createView({
        layout: "vertical",
        top: "10sp",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId157"
    });
    $.__views.__alloyId156.add($.__views.__alloyId157);
    $.__views.__alloyId158 = Ti.UI.createLabel({
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
        id: "__alloyId158"
    });
    $.__views.__alloyId157.add($.__views.__alloyId158);
    $.__views.__alloyId159 = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#000000",
        font: {
            fontSize: "18sp"
        },
        height: Titanium.UI.SIZE,
        text: "Agradecemos mucho su participación, su retroalimentación significa mucho para nosotros",
        id: "__alloyId159"
    });
    $.__views.__alloyId157.add($.__views.__alloyId159);
    $.__views.__alloyId160 = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#000000",
        font: {
            fontSize: "18sp"
        },
        height: Titanium.UI.SIZE,
        text: 'Presione el botón "Enviar" para cerrar el cuestionario',
        id: "__alloyId160"
    });
    $.__views.__alloyId157.add($.__views.__alloyId160);
    $.__views.__alloyId161 = Ti.UI.createView({
        bottom: "30sp",
        left: "10sp",
        right: "10sp",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: "center",
        id: "__alloyId161"
    });
    $.__views.__alloyId156.add($.__views.__alloyId161);
    $.__views.sendDASA = Ti.UI.createButton({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        title: "Enviar",
        id: "sendDASA"
    });
    $.__views.__alloyId161.add($.__views.sendDASA);
    $.__views.scrollView = Ti.UI.createScrollableView({
        zIndex: "1",
        views: __alloyId137,
        id: "scrollView",
        showPagingControl: "false"
    });
    $.__views.evaluacionTerapeuta.add($.__views.scrollView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.evaluacionTerapeuta.open();
    $.closeModal.addEventListener("click", function() {
        $.InformationModal.hide();
    });
    $.sendDASA.addEventListener("click", function() {
        insertData();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;