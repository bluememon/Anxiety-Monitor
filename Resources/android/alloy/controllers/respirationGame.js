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
    this.__controllerPath = "respirationGame";
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
    $.__views.canvasVentana = Ti.UI.createWindow({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        layout: "composite",
        id: "canvasVentana"
    });
    $.__views.canvasVentana && $.addTopLevelView($.__views.canvasVentana);
    $.__views.circulo = Ti.UI.createView({
        color: "#ffffff",
        font: {
            fontSize: "30sp"
        },
        backgroundColor: "#FF6600",
        width: "60sp",
        height: "60sp",
        borderRadius: "30sp",
        zIndex: 2,
        bottom: "20dp",
        id: "circulo"
    });
    $.__views.canvasVentana.add($.__views.circulo);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.canvasVentana.open();
    var durationAnimation = 500;
    $.circulo.addEventListener("touchstart", function() {
        $.circulo.animate(a);
    });
    $.circulo.addEventListener("touchend", function() {
        $.circulo.animate(a2, function() {
            durationAnimation += 500;
            a.setDuration(durationAnimation);
            a2.setDuration(durationAnimation);
        });
    });
    var matrix2d = Ti.UI.create2DMatrix();
    matrix2d = matrix2d.scale(30);
    var matrix3d = Ti.UI.create2DMatrix();
    matrix3d = matrix3d.scale(1);
    var a = Ti.UI.createAnimation({
        transform: matrix2d,
        duration: durationAnimation
    });
    var a2 = Ti.UI.createAnimation({
        transform: matrix3d,
        duration: durationAnimation
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;