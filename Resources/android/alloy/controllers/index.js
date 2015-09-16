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
    var username = Ti.App.Properties.getString("username", null);
    var password = Ti.App.Properties.getString("password", null);
    if (null != pinNumber) {
        Ti.API.info("username: " + username + " Password: " + password);
        Cloud.Users.login({
            login: username,
            password: password
        }, function(e) {
            if (e.success) {
                alert("login success");
                defaultSubscribe();
                startingPage = Alloy.createController("pinPage").getView();
            } else alert("Error: " + (e.error && e.message || JSON.stringify(e)));
        });
    } else startingPage = Alloy.createController("firstTime").getView();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;