function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function finalizarSetup() {
        "" != Ti.App.Properties.getInt("id") && 1 == Ti.App.Properties.getInt("userType") && Alloy.createController("terapistList").getView();
        "" != Ti.App.Properties.getInt("id") && 2 == Ti.App.Properties.getInt("userType") && Alloy.createController("patientList").getView();
        "" != Ti.App.Properties.getInt("id") && 3 == Ti.App.Properties.getInt("userType") && Alloy.createController("listado").getView();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "enterPIN";
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
    var __defers = {};
    $.__views.pinCreator = Ti.UI.createWindow({
        id: "pinCreator"
    });
    $.__views.pinCreator && $.addTopLevelView($.__views.pinCreator);
    $.__views.InformationModal = Ti.UI.createView({
        layout: "composite",
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        zIndex: 2,
        backgroundColor: "transparent",
        id: "InformationModal"
    });
    $.__views.pinCreator.add($.__views.InformationModal);
    $.__views.__alloyId86 = Ti.UI.createView({
        top: "0sp",
        layout: "vertical",
        zIndex: 2,
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId86"
    });
    $.__views.InformationModal.add($.__views.__alloyId86);
    $.__views.bienvenidoMessage = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#ffffff",
        font: {
            fontSize: "18sp"
        },
        height: Titanium.UI.SIZE,
        id: "bienvenidoMessage"
    });
    $.__views.__alloyId86.add($.__views.bienvenidoMessage);
    $.__views.__alloyId87 = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#ffffff",
        font: {
            fontSize: "18sp"
        },
        height: Titanium.UI.SIZE,
        text: "Tu nombre de usuario y contraseña son correctos!",
        id: "__alloyId87"
    });
    $.__views.__alloyId86.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#ffffff",
        font: {
            fontSize: "18sp"
        },
        height: Titanium.UI.SIZE,
        text: "A continuación se pedirá que generes un munero PIN",
        id: "__alloyId88"
    });
    $.__views.__alloyId86.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#ffffff",
        font: {
            fontSize: "18sp"
        },
        height: Titanium.UI.SIZE,
        text: "El numero PIN sirve para prevenir que alguien acceda a tus datos aqui guardados.",
        id: "__alloyId89"
    });
    $.__views.__alloyId86.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#ffffff",
        font: {
            fontSize: "18sp"
        },
        height: Titanium.UI.SIZE,
        text: "La clave consiste en 4 numeros",
        id: "__alloyId90"
    });
    $.__views.__alloyId86.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createView({
        zIndex: 3,
        bottom: "10sp",
        right: "10sp",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId91"
    });
    $.__views.InformationModal.add($.__views.__alloyId91);
    $.__views.closeModal = Ti.UI.createButton({
        title: "Aceptar",
        id: "closeModal"
    });
    $.__views.__alloyId91.add($.__views.closeModal);
    $.__views.__alloyId92 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        backgroundColor: "#000000",
        opacity: .9,
        zIndex: 1,
        top: "0sp",
        id: "__alloyId92"
    });
    $.__views.InformationModal.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        zIndex: 1,
        id: "__alloyId93"
    });
    $.__views.pinCreator.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        left: "10sp",
        right: "10sp",
        id: "__alloyId94"
    });
    $.__views.__alloyId93.add($.__views.__alloyId94);
    $.__views.pin = Ti.UI.createTextField({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        hintText: "Crea un PIN",
        passwordMask: true,
        keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD,
        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
        id: "pin"
    });
    $.__views.__alloyId94.add($.__views.pin);
    $.__views.__alloyId95 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        left: "10sp",
        right: "10sp",
        id: "__alloyId95"
    });
    $.__views.__alloyId93.add($.__views.__alloyId95);
    $.__views.pin2 = Ti.UI.createTextField({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        hintText: "Repite el PIN",
        passwordMask: true,
        keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD,
        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
        id: "pin2"
    });
    $.__views.__alloyId95.add($.__views.pin2);
    $.__views.__alloyId96 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId96"
    });
    $.__views.__alloyId93.add($.__views.__alloyId96);
    $.__views.verificarButton = Ti.UI.createButton({
        title: "Guardar PIN",
        id: "verificarButton"
    });
    $.__views.__alloyId96.add($.__views.verificarButton);
    var __alloyId98 = [];
    __alloyId98.push("Aceptar");
    $.__views.dialogPIN = Ti.UI.createAlertDialog({
        buttonNames: __alloyId98,
        id: "dialogPIN",
        title: "Bienvenido!",
        message: "Los numeros PIN son correctos! usa Éste numero para acceder a la applicación"
    });
    finalizarSetup ? $.__views.dialogPIN.addEventListener("click", finalizarSetup) : __defers["$.__views.dialogPIN!click!finalizarSetup"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.pinCreator.open();
    $.closeModal.addEventListener("click", function() {
        $.InformationModal.hide();
    });
    $.verificarButton.addEventListener("click", function() {
        if ($.pin.value === $.pin2.value) {
            Ti.App.Properties.setInt("pinNumber", $.pin.value);
            $.dialogPIN.show();
        } else alert("los números PIN que agregaste no coinciden");
    });
    __defers["$.__views.dialogPIN!click!finalizarSetup"] && $.__views.dialogPIN.addEventListener("click", finalizarSetup);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;