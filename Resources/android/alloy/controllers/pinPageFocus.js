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
    this.__controllerPath = "pinPageFocus";
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
    $.__views.__alloyId254 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        layout: "vertical",
        bottom: "20sp",
        id: "__alloyId254"
    });
    $.__views.wrapper.add($.__views.__alloyId254);
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
    $.__views.__alloyId254.add($.__views.pin);
    $.__views.__alloyId255 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        top: "10sp",
        left: "20sp",
        right: "20sp",
        id: "__alloyId255"
    });
    $.__views.__alloyId254.add($.__views.__alloyId255);
    $.__views.__alloyId256 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId256"
    });
    $.__views.__alloyId255.add($.__views.__alloyId256);
    $.__views.numeroUno = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "numeroUno"
    });
    $.__views.__alloyId256.add($.__views.numeroUno);
    $.__views.__alloyId257 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45dp"
        },
        height: Titanium.UI.SIZE,
        bottom: "-10sp",
        top: "10sp",
        text: "1",
        id: "__alloyId257"
    });
    $.__views.numeroUno.add($.__views.__alloyId257);
    $.__views.__alloyId258 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        id: "__alloyId258"
    });
    $.__views.numeroUno.add($.__views.__alloyId258);
    $.__views.numeroDos = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "numeroDos"
    });
    $.__views.__alloyId256.add($.__views.numeroDos);
    $.__views.__alloyId259 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45dp"
        },
        height: Titanium.UI.SIZE,
        bottom: "-10sp",
        top: "10sp",
        text: "2",
        id: "__alloyId259"
    });
    $.__views.numeroDos.add($.__views.__alloyId259);
    $.__views.__alloyId260 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        text: "ABC",
        id: "__alloyId260"
    });
    $.__views.numeroDos.add($.__views.__alloyId260);
    $.__views.numeroTres = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "numeroTres"
    });
    $.__views.__alloyId256.add($.__views.numeroTres);
    $.__views.__alloyId261 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45dp"
        },
        height: Titanium.UI.SIZE,
        bottom: "-10sp",
        top: "10sp",
        text: "3",
        id: "__alloyId261"
    });
    $.__views.numeroTres.add($.__views.__alloyId261);
    $.__views.__alloyId262 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        text: "DEF",
        id: "__alloyId262"
    });
    $.__views.numeroTres.add($.__views.__alloyId262);
    $.__views.__alloyId263 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId263"
    });
    $.__views.__alloyId255.add($.__views.__alloyId263);
    $.__views.numeroCuatro = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "numeroCuatro"
    });
    $.__views.__alloyId263.add($.__views.numeroCuatro);
    $.__views.__alloyId264 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45dp"
        },
        height: Titanium.UI.SIZE,
        bottom: "-10sp",
        top: "10sp",
        text: "4",
        id: "__alloyId264"
    });
    $.__views.numeroCuatro.add($.__views.__alloyId264);
    $.__views.__alloyId265 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        text: "GHI",
        id: "__alloyId265"
    });
    $.__views.numeroCuatro.add($.__views.__alloyId265);
    $.__views.numeroCinco = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "numeroCinco"
    });
    $.__views.__alloyId263.add($.__views.numeroCinco);
    $.__views.__alloyId266 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45dp"
        },
        height: Titanium.UI.SIZE,
        bottom: "-10sp",
        top: "10sp",
        text: "5",
        id: "__alloyId266"
    });
    $.__views.numeroCinco.add($.__views.__alloyId266);
    $.__views.__alloyId267 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        text: "JKL",
        id: "__alloyId267"
    });
    $.__views.numeroCinco.add($.__views.__alloyId267);
    $.__views.numeroSeis = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "numeroSeis"
    });
    $.__views.__alloyId263.add($.__views.numeroSeis);
    $.__views.__alloyId268 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45dp"
        },
        height: Titanium.UI.SIZE,
        bottom: "-10sp",
        top: "10sp",
        text: "6",
        id: "__alloyId268"
    });
    $.__views.numeroSeis.add($.__views.__alloyId268);
    $.__views.__alloyId269 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        text: "MNO",
        id: "__alloyId269"
    });
    $.__views.numeroSeis.add($.__views.__alloyId269);
    $.__views.__alloyId270 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId270"
    });
    $.__views.__alloyId255.add($.__views.__alloyId270);
    $.__views.numeroSiete = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "numeroSiete"
    });
    $.__views.__alloyId270.add($.__views.numeroSiete);
    $.__views.__alloyId271 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45dp"
        },
        height: Titanium.UI.SIZE,
        bottom: "-10sp",
        top: "10sp",
        text: "7",
        id: "__alloyId271"
    });
    $.__views.numeroSiete.add($.__views.__alloyId271);
    $.__views.__alloyId272 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        text: "PQRS",
        id: "__alloyId272"
    });
    $.__views.numeroSiete.add($.__views.__alloyId272);
    $.__views.numeroOcho = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "numeroOcho"
    });
    $.__views.__alloyId270.add($.__views.numeroOcho);
    $.__views.__alloyId273 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45dp"
        },
        height: Titanium.UI.SIZE,
        bottom: "-10sp",
        top: "10sp",
        text: "8",
        id: "__alloyId273"
    });
    $.__views.numeroOcho.add($.__views.__alloyId273);
    $.__views.__alloyId274 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        text: "TUV",
        id: "__alloyId274"
    });
    $.__views.numeroOcho.add($.__views.__alloyId274);
    $.__views.numeroNueve = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "numeroNueve"
    });
    $.__views.__alloyId270.add($.__views.numeroNueve);
    $.__views.__alloyId275 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45dp"
        },
        height: Titanium.UI.SIZE,
        bottom: "-10sp",
        top: "10sp",
        text: "9",
        id: "__alloyId275"
    });
    $.__views.numeroNueve.add($.__views.__alloyId275);
    $.__views.__alloyId276 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        text: "WXYZ",
        id: "__alloyId276"
    });
    $.__views.numeroNueve.add($.__views.__alloyId276);
    $.__views.__alloyId277 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId277"
    });
    $.__views.__alloyId255.add($.__views.__alloyId277);
    $.__views.__alloyId278 = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "__alloyId278"
    });
    $.__views.__alloyId277.add($.__views.__alloyId278);
    $.__views.__alloyId279 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45dp"
        },
        height: Titanium.UI.SIZE,
        bottom: "-10sp",
        top: "10sp",
        id: "__alloyId279"
    });
    $.__views.__alloyId278.add($.__views.__alloyId279);
    $.__views.__alloyId280 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        id: "__alloyId280"
    });
    $.__views.__alloyId278.add($.__views.__alloyId280);
    $.__views.numeroCero = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "numeroCero"
    });
    $.__views.__alloyId277.add($.__views.numeroCero);
    $.__views.__alloyId281 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "45dp"
        },
        height: Titanium.UI.SIZE,
        bottom: "-10sp",
        top: "10sp",
        text: "0",
        id: "__alloyId281"
    });
    $.__views.numeroCero.add($.__views.__alloyId281);
    $.__views.__alloyId282 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        id: "__alloyId282"
    });
    $.__views.numeroCero.add($.__views.__alloyId282);
    $.__views.__alloyId283 = Ti.UI.createView({
        layout: "horizontal",
        width: "33%",
        height: Titanium.UI.SIZE,
        id: "__alloyId283"
    });
    $.__views.__alloyId277.add($.__views.__alloyId283);
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
    $.__views.__alloyId283.add($.__views.entrarSistema);
    $.__views.__alloyId284 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "20sp"
        },
        left: "5sp",
        height: Titanium.UI.SIZE,
        bottom: 0,
        id: "__alloyId284"
    });
    $.__views.__alloyId283.add($.__views.__alloyId284);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.pinWrapper.open();
    $.entrarSistema.addEventListener("click", function() {
        if ($.pin.value == Ti.App.Properties.getInt("pinNumber")) {
            Ti.App.Properties.setString("status", "running");
            $.pinWrapper.close();
        } else alert("lo sentimos! numero PIN incorrecto.");
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
    $.numeroSiete.addEventListener("click", function() {
        $.pin.value += 7;
    });
    $.numeroOcho.addEventListener("click", function() {
        $.pin.value += 8;
    });
    $.numeroNueve.addEventListener("click", function() {
        $.pin.value += 9;
    });
    $.numeroCero.addEventListener("click", function() {
        $.pin.value += 0;
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;