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
    this.__controllerPath = "index";
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
    $.__views.index = Ti.UI.createWindow({
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    var pinNumber = Ti.App.Properties.getInt("pinNumber", null);
    var startingPage = null;
<<<<<<< HEAD
    Ti.App.Properties.getInt("username", null);
    Ti.App.Properties.getInt("password", null);
    null != pinNumber || (startingPage = Alloy.createController("firstTime").getView());
=======
    startingPage = null != pinNumber ? Alloy.createController("pinPage").getView() : Alloy.createController("firstTime").getView();
>>>>>>> 7954a42f5293cb8ea2f707b2b5ca2d27b1193878
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;