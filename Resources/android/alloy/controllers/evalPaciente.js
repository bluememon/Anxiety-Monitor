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
                    $.tempaversijala.close();
                },
                onerror: function(e) {
                    Ti.API.debug(e.error);
                    alert("There was an error during the conexion");
                },
                timeout: 1e3
            });
            request.open("POST", "http://app.bluecoreservices.com/webservices/addEvalPaciente.php");
            var params = {
                question1: $.question1.value,
                question2: $.question2.value,
                question3: $.question3.value
            };
            request.send(params);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "evalPaciente";
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
    $.__views.tempaversijala = Ti.UI.createWindow({
        id: "tempaversijala"
    });
    $.__views.tempaversijala && $.addTopLevelView($.__views.tempaversijala);
    $.__views.InformationModal = Ti.UI.createView({
        layout: "composite",
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        zIndex: 2,
        backgroundColor: "transparent",
        id: "InformationModal"
    });
    $.__views.tempaversijala.add($.__views.InformationModal);
    $.__views.__alloyId100 = Ti.UI.createView({
        top: "0sp",
        layout: "vertical",
        zIndex: 2,
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId100"
    });
    $.__views.InformationModal.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#ffffff",
        font: {
            fontSize: "18sp"
        },
        height: Titanium.UI.SIZE,
        text: "Lea atentamente cada pregunta y usando el slider, eliga el grado de facilidad o utilidad del uso de la aplicación móvil para usted.",
        id: "__alloyId101"
    });
    $.__views.__alloyId100.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#ffffff",
        font: {
            fontSize: "18sp"
        },
        height: Titanium.UI.SIZE,
        text: "No hay respuestas correctas o incorrectas. Por favor, sea honesto(a) y responda a todas la preguntas.",
        id: "__alloyId102"
    });
    $.__views.__alloyId100.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#ffffff",
        font: {
            fontSize: "18sp"
        },
        height: Titanium.UI.SIZE,
        text: "Para moverse entre las preguntas deslice su dedo en la pantalla hacia la derecha o izquierda",
        id: "__alloyId103"
    });
    $.__views.__alloyId100.add($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createView({
        zIndex: 3,
        bottom: "10sp",
        right: "10sp",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId104"
    });
    $.__views.InformationModal.add($.__views.__alloyId104);
    $.__views.closeModal = Ti.UI.createButton({
        title: "Aceptar",
        id: "closeModal"
    });
    $.__views.__alloyId104.add($.__views.closeModal);
    $.__views.__alloyId105 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        backgroundColor: "#000000",
        opacity: .9,
        zIndex: 1,
        top: "0sp",
        id: "__alloyId105"
    });
    $.__views.InformationModal.add($.__views.__alloyId105);
    var __alloyId106 = [];
    $.__views.__alloyId107 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        id: "__alloyId107"
    });
    __alloyId106.push($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createView({
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
        id: "__alloyId108"
    });
    $.__views.__alloyId107.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createLabel({
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
        id: "__alloyId109"
    });
    $.__views.__alloyId108.add($.__views.__alloyId109);
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
    $.__views.__alloyId108.add($.__views.question1);
    $.__views.__alloyId110 = Ti.UI.createView({
        bottom: "20sp",
        id: "__alloyId110"
    });
    $.__views.__alloyId108.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createLabel({
        left: "5sp",
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Muy Difícil",
        id: "__alloyId111"
    });
    $.__views.__alloyId110.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createLabel({
        right: "5sp",
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Muy Fácil",
        id: "__alloyId112"
    });
    $.__views.__alloyId110.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        id: "__alloyId113"
    });
    __alloyId106.push($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createView({
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
        id: "__alloyId114"
    });
    $.__views.__alloyId113.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createLabel({
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
        id: "__alloyId115"
    });
    $.__views.__alloyId114.add($.__views.__alloyId115);
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
    $.__views.__alloyId114.add($.__views.question2);
    $.__views.__alloyId116 = Ti.UI.createView({
        bottom: "20sp",
        id: "__alloyId116"
    });
    $.__views.__alloyId114.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createLabel({
        left: "5sp",
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Poco útil",
        id: "__alloyId117"
    });
    $.__views.__alloyId116.add($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createLabel({
        right: "5sp",
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Muy útil",
        id: "__alloyId118"
    });
    $.__views.__alloyId116.add($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        id: "__alloyId119"
    });
    __alloyId106.push($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createView({
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
        id: "__alloyId120"
    });
    $.__views.__alloyId119.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createLabel({
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
        text: "Para usted, en general ¿el uso de la aplicación ha sido para su tratamiento?",
        id: "__alloyId121"
    });
    $.__views.__alloyId120.add($.__views.__alloyId121);
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
    $.__views.__alloyId120.add($.__views.question3);
    $.__views.__alloyId122 = Ti.UI.createView({
        bottom: "20sp",
        id: "__alloyId122"
    });
    $.__views.__alloyId120.add($.__views.__alloyId122);
    $.__views.__alloyId123 = Ti.UI.createLabel({
        left: "5sp",
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Poco útil",
        id: "__alloyId123"
    });
    $.__views.__alloyId122.add($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createLabel({
        right: "5sp",
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Muy útil",
        id: "__alloyId124"
    });
    $.__views.__alloyId122.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        id: "__alloyId125"
    });
    __alloyId106.push($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createView({
        layout: "vertical",
        top: "10sp",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId126"
    });
    $.__views.__alloyId125.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createLabel({
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
        id: "__alloyId127"
    });
    $.__views.__alloyId126.add($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#000000",
        font: {
            fontSize: "18sp"
        },
        height: Titanium.UI.SIZE,
        text: "Agradecemos mucho su participación, su retroalimentación significa mucho para nosotros",
        id: "__alloyId128"
    });
    $.__views.__alloyId126.add($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#000000",
        font: {
            fontSize: "18sp"
        },
        height: Titanium.UI.SIZE,
        text: 'Presione el botón "Enviar" para cerrar el cuestionario',
        id: "__alloyId129"
    });
    $.__views.__alloyId126.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createView({
        bottom: "30sp",
        left: "10sp",
        right: "10sp",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: "center",
        id: "__alloyId130"
    });
    $.__views.__alloyId125.add($.__views.__alloyId130);
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
    $.__views.__alloyId130.add($.__views.sendDASA);
    $.__views.scrollView = Ti.UI.createScrollableView({
        zIndex: "1",
        views: __alloyId106,
        id: "scrollView",
        showPagingControl: "false"
    });
    $.__views.tempaversijala.add($.__views.scrollView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
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