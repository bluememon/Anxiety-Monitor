function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "pinPage";
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
    $.__views.pinWrapper = Ti.UI.createWindow({
        backgroundColor: "#E7E7E7",
        id: "pinWrapper"
    });
    $.__views.pinWrapper && $.addTopLevelView($.__views.pinWrapper);
    $.__views.wrapper = Ti.UI.createView({
        top: "5dp",
        left: "25dp",
        right: "25dp",
        bottom: "5dp",
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        layout: "composite",
        id: "wrapper"
    });
    $.__views.pinWrapper.add($.__views.wrapper);
    $.__views.pinLabel = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45sp"
        },
        top: "15sp",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: "center",
        text: "Teclee su PIN",
        id: "pinLabel"
    });
    $.__views.wrapper.add($.__views.pinLabel);
    $.__views.__alloyId223 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        layout: "vertical",
        bottom: "20sp",
        id: "__alloyId223"
    });
    $.__views.wrapper.add($.__views.__alloyId223);
    $.__views.pin = Ti.UI.createTextField({
        passwordMask: true,
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        color: "#000000",
        font: {
            fontSize: "45sp"
        },
        textAlign: "center",
        maxLength: 4,
        id: "pin"
    });
    $.__views.__alloyId223.add($.__views.pin);
    $.__views.__alloyId224 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        top: "10sp",
        left: "20sp",
        right: "20sp",
        id: "__alloyId224"
    });
    $.__views.__alloyId223.add($.__views.__alloyId224);
    $.__views.__alloyId225 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId225"
    });
    $.__views.__alloyId224.add($.__views.__alloyId225);
    $.__views.numeroUno = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "numeroUno"
    });
    $.__views.__alloyId225.add($.__views.numeroUno);
    $.__views.__alloyId226 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45dp"
        },
        height: Titanium.UI.SIZE,
        bottom: "-10sp",
        top: "10sp",
        text: "1",
        id: "__alloyId226"
    });
    $.__views.numeroUno.add($.__views.__alloyId226);
    $.__views.__alloyId227 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        id: "__alloyId227"
    });
    $.__views.numeroUno.add($.__views.__alloyId227);
    $.__views.numeroDos = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "numeroDos"
    });
    $.__views.__alloyId225.add($.__views.numeroDos);
    $.__views.__alloyId228 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45dp"
        },
        height: Titanium.UI.SIZE,
        bottom: "-10sp",
        top: "10sp",
        text: "2",
        id: "__alloyId228"
    });
    $.__views.numeroDos.add($.__views.__alloyId228);
    $.__views.__alloyId229 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        text: "ABC",
        id: "__alloyId229"
    });
    $.__views.numeroDos.add($.__views.__alloyId229);
    $.__views.numeroTres = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "numeroTres"
    });
    $.__views.__alloyId225.add($.__views.numeroTres);
    $.__views.__alloyId230 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45dp"
        },
        height: Titanium.UI.SIZE,
        bottom: "-10sp",
        top: "10sp",
        text: "3",
        id: "__alloyId230"
    });
    $.__views.numeroTres.add($.__views.__alloyId230);
    $.__views.__alloyId231 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        text: "DEF",
        id: "__alloyId231"
    });
    $.__views.numeroTres.add($.__views.__alloyId231);
    $.__views.__alloyId232 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId232"
    });
    $.__views.__alloyId224.add($.__views.__alloyId232);
    $.__views.numeroCuatro = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "numeroCuatro"
    });
    $.__views.__alloyId232.add($.__views.numeroCuatro);
    $.__views.__alloyId233 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45dp"
        },
        height: Titanium.UI.SIZE,
        bottom: "-10sp",
        top: "10sp",
        text: "4",
        id: "__alloyId233"
    });
    $.__views.numeroCuatro.add($.__views.__alloyId233);
    $.__views.__alloyId234 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        text: "GHI",
        id: "__alloyId234"
    });
    $.__views.numeroCuatro.add($.__views.__alloyId234);
    $.__views.numeroCinco = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "numeroCinco"
    });
    $.__views.__alloyId232.add($.__views.numeroCinco);
    $.__views.__alloyId235 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45dp"
        },
        height: Titanium.UI.SIZE,
        bottom: "-10sp",
        top: "10sp",
        text: "5",
        id: "__alloyId235"
    });
    $.__views.numeroCinco.add($.__views.__alloyId235);
    $.__views.__alloyId236 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        text: "JKL",
        id: "__alloyId236"
    });
    $.__views.numeroCinco.add($.__views.__alloyId236);
    $.__views.numeroSeis = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "numeroSeis"
    });
    $.__views.__alloyId232.add($.__views.numeroSeis);
    $.__views.__alloyId237 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45dp"
        },
        height: Titanium.UI.SIZE,
        bottom: "-10sp",
        top: "10sp",
        text: "6",
        id: "__alloyId237"
    });
    $.__views.numeroSeis.add($.__views.__alloyId237);
    $.__views.__alloyId238 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        text: "MNO",
        id: "__alloyId238"
    });
    $.__views.numeroSeis.add($.__views.__alloyId238);
    $.__views.__alloyId239 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId239"
    });
    $.__views.__alloyId224.add($.__views.__alloyId239);
    $.__views.numeroSiete = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "numeroSiete"
    });
    $.__views.__alloyId239.add($.__views.numeroSiete);
    $.__views.__alloyId240 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45dp"
        },
        height: Titanium.UI.SIZE,
        bottom: "-10sp",
        top: "10sp",
        text: "7",
        id: "__alloyId240"
    });
    $.__views.numeroSiete.add($.__views.__alloyId240);
    $.__views.__alloyId241 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        text: "PQRS",
        id: "__alloyId241"
    });
    $.__views.numeroSiete.add($.__views.__alloyId241);
    $.__views.numeroOcho = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "numeroOcho"
    });
    $.__views.__alloyId239.add($.__views.numeroOcho);
    $.__views.__alloyId242 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45dp"
        },
        height: Titanium.UI.SIZE,
        bottom: "-10sp",
        top: "10sp",
        text: "8",
        id: "__alloyId242"
    });
    $.__views.numeroOcho.add($.__views.__alloyId242);
    $.__views.__alloyId243 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        text: "TUV",
        id: "__alloyId243"
    });
    $.__views.numeroOcho.add($.__views.__alloyId243);
    $.__views.numeroNueve = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "numeroNueve"
    });
    $.__views.__alloyId239.add($.__views.numeroNueve);
    $.__views.__alloyId244 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45dp"
        },
        height: Titanium.UI.SIZE,
        bottom: "-10sp",
        top: "10sp",
        text: "9",
        id: "__alloyId244"
    });
    $.__views.numeroNueve.add($.__views.__alloyId244);
    $.__views.__alloyId245 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        text: "WXYZ",
        id: "__alloyId245"
    });
    $.__views.numeroNueve.add($.__views.__alloyId245);
    $.__views.__alloyId246 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId246"
    });
    $.__views.__alloyId224.add($.__views.__alloyId246);
    $.__views.__alloyId247 = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "__alloyId247"
    });
    $.__views.__alloyId246.add($.__views.__alloyId247);
    $.__views.__alloyId248 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45dp"
        },
        height: Titanium.UI.SIZE,
        bottom: "-10sp",
        top: "10sp",
        id: "__alloyId248"
    });
    $.__views.__alloyId247.add($.__views.__alloyId248);
    $.__views.__alloyId249 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        id: "__alloyId249"
    });
    $.__views.__alloyId247.add($.__views.__alloyId249);
    $.__views.numeroCero = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "numeroCero"
    });
    $.__views.__alloyId246.add($.__views.numeroCero);
    $.__views.__alloyId250 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45dp"
        },
        height: Titanium.UI.SIZE,
        bottom: "-10sp",
        top: "10sp",
        text: "0",
        id: "__alloyId250"
    });
    $.__views.numeroCero.add($.__views.__alloyId250);
    $.__views.__alloyId251 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        id: "__alloyId251"
    });
    $.__views.numeroCero.add($.__views.__alloyId251);
    $.__views.__alloyId252 = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "__alloyId252"
    });
    $.__views.__alloyId246.add($.__views.__alloyId252);
    $.__views.entrarSistema = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45dp"
        },
        height: Titanium.UI.SIZE,
        bottom: "-10sp",
        top: "10sp",
        text: "OK",
        id: "entrarSistema"
    });
    $.__views.__alloyId252.add($.__views.entrarSistema);
    $.__views.__alloyId253 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        id: "__alloyId253"
    });
    $.__views.__alloyId252.add($.__views.__alloyId253);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.pinWrapper.open();
    $.entrarSistema.addEventListener("click", function() {
        if ($.pin.value == Ti.App.Properties.getInt("pinNumber")) switch (Ti.App.Properties.getInt("userType")) {
          case 1:
            Alloy.createController("terapistList").getView().open();
            break;

          case 2:
            Alloy.createController("patientList").getView().open();
            break;

          case 3:
            Alloy.createController("listado").getView().open();
        } else alert("lo sentimos! numero PIN incorrecto.");
    });
    $.entrarSistema.addEventListener("touchstart", function() {
        $.entrarSistema.backgroundColor = "#000000";
        $.entrarSistema.opacity = .4;
    });
    $.entrarSistema.addEventListener("touchend", function() {
        $.entrarSistema.backgroundColor = "transparent";
        $.entrarSistema.opacity = 1;
    });
    $.numeroUno.addEventListener("click", function() {
        $.pin.value += 1;
    });
    $.numeroUno.addEventListener("touchstart", function() {
        $.numeroUno.backgroundColor = "#000000";
        $.numeroUno.opacity = .4;
    });
    $.numeroUno.addEventListener("touchend", function() {
        $.numeroUno.backgroundColor = "transparent";
        $.numeroUno.opacity = 1;
    });
    $.numeroDos.addEventListener("click", function() {
        $.pin.value += 2;
    });
    $.numeroDos.addEventListener("touchstart", function() {
        $.numeroDos.backgroundColor = "#000000";
        $.numeroDos.opacity = .4;
    });
    $.numeroDos.addEventListener("touchend", function() {
        $.numeroDos.backgroundColor = "transparent";
        $.numeroDos.opacity = 1;
    });
    $.numeroTres.addEventListener("click", function() {
        $.pin.value += 3;
    });
    $.numeroTres.addEventListener("touchstart", function() {
        $.numeroTres.backgroundColor = "#000000";
        $.numeroTres.opacity = .4;
    });
    $.numeroTres.addEventListener("touchend", function() {
        $.numeroTres.backgroundColor = "transparent";
        $.numeroTres.opacity = 1;
    });
    $.numeroCuatro.addEventListener("click", function() {
        $.pin.value += 4;
    });
    $.numeroCuatro.addEventListener("touchstart", function() {
        $.numeroCuatro.backgroundColor = "#000000";
        $.numeroCuatro.opacity = .4;
    });
    $.numeroCuatro.addEventListener("touchend", function() {
        $.numeroCuatro.backgroundColor = "transparent";
        $.numeroCuatro.opacity = 1;
    });
    $.numeroCinco.addEventListener("click", function() {
        $.pin.value += 5;
    });
    $.numeroCinco.addEventListener("touchstart", function() {
        $.numeroCinco.backgroundColor = "#000000";
        $.numeroCinco.opacity = .4;
    });
    $.numeroCinco.addEventListener("touchend", function() {
        $.numeroCinco.backgroundColor = "transparent";
        $.numeroCinco.opacity = 1;
    });
    $.numeroSeis.addEventListener("click", function() {
        $.pin.value += 6;
    });
    $.numeroSeis.addEventListener("touchstart", function() {
        $.numeroSeis.backgroundColor = "#000000";
        $.numeroSeis.opacity = .4;
    });
    $.numeroSeis.addEventListener("touchend", function() {
        $.numeroSeis.backgroundColor = "transparent";
        $.numeroSeis.opacity = 1;
    });
    $.numeroSiete.addEventListener("click", function() {
        $.pin.value += 7;
    });
    $.numeroSiete.addEventListener("touchstart", function() {
        $.numeroSiete.backgroundColor = "#000000";
        $.numeroSiete.opacity = .4;
    });
    $.numeroSiete.addEventListener("touchend", function() {
        $.numeroSiete.backgroundColor = "transparent";
        $.numeroSiete.opacity = 1;
    });
    $.numeroOcho.addEventListener("click", function() {
        $.pin.value += 8;
    });
    $.numeroOcho.addEventListener("touchstart", function() {
        $.numeroOcho.backgroundColor = "#000000";
        $.numeroOcho.opacity = .4;
    });
    $.numeroOcho.addEventListener("touchend", function() {
        $.numeroOcho.backgroundColor = "transparent";
        $.numeroOcho.opacity = 1;
    });
    $.numeroNueve.addEventListener("click", function() {
        $.pin.value += 9;
    });
    $.numeroNueve.addEventListener("touchstart", function() {
        $.numeroNueve.backgroundColor = "#000000";
        $.numeroNueve.opacity = .4;
    });
    $.numeroNueve.addEventListener("touchend", function() {
        $.numeroNueve.backgroundColor = "transparent";
        $.numeroNueve.opacity = 1;
    });
    $.numeroCero.addEventListener("click", function() {
        $.pin.value += 0;
    });
    $.numeroCero.addEventListener("touchstart", function() {
        $.numeroCero.backgroundColor = "#000000";
        $.numeroCero.opacity = .4;
    });
    $.numeroCero.addEventListener("touchend", function() {
        $.numeroCero.backgroundColor = "transparent";
        $.numeroCero.opacity = 1;
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;