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
    this.__controllerPath = "listado";
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
    $.__views.grupodeTabs = Ti.UI.createTabGroup({
        id: "grupodeTabs"
    });
    $.__views.grupodeTabs && $.addTopLevelView($.__views.grupodeTabs);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    if ("" != Ti.App.Properties.getInt("id") && 3 == Ti.App.Properties.getInt("userType")) var idPaciente = Ti.App.Properties.getInt("id"); else if ("undefined" !== arguments[0].idPatient) var idPaciente = arguments[0].idPatient;
    $.grupodeTabs.open();
    var tab1 = Alloy.createController("categoList", {
        idPatient: idPaciente
    }).getView();
    var tab2 = Alloy.createController("DASList", {
        idPatient: idPaciente
    }).getView();
    $.grupodeTabs.addTab(tab1);
    $.grupodeTabs.addTab(tab2);
    $.grupodeTabs.setActiveTab(tab1);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;