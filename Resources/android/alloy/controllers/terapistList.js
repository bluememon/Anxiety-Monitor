function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function getTherapistList() {
        var sendit = Ti.Network.createHTTPClient({
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("There was an error during the connection");
                $.connectionError.show();
            },
            timeout: 3e3
        });
        sendit.open("GET", "http://app.bluecoreservices.com/webservices/ListTherapist.php");
        sendit.send();
        sendit.onload = function() {
            var json = JSON.parse(this.responseText);
            var json = json.TherapistList;
            0 == json.length && ($.therapistList.headerTitle = "The database row is empty");
            dataArray = [];
            for (var i = 0; i < json.length; i++) {
                var row = Ti.UI.createTableViewRow({
                    className: "elementRow",
                    layout: "horizontal",
                    horizontalWrap: false,
                    height: Titanium.UI.SIZE,
                    width: Titanium.UI.FILL
                });
                var viewTherapist = Titanium.UI.createView({
                    className: "rowDate",
                    height: Titanium.UI.SIZE,
                    width: Titanium.UI.FILL,
                    left: "10sp",
                    bubbleParent: true
                });
                var therapistLabel = Titanium.UI.createLabel({
                    text: json[i].firstName + " " + json[i].lastName,
                    font: {
                        fontSize: "20dp"
                    },
                    color: "#000000",
                    textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
                    left: 0,
                    top: "10dp",
                    bottom: "10dp"
                });
                viewTherapist.add(therapistLabel);
                row.add(viewTherapist);
                row.idTerapeuta = json[i].id;
                row.addEventListener("click", function() {
                    Alloy.createController("patientList", {
                        idTherapist: this.idTerapeuta
                    }).getView();
                });
                dataArray.push(row);
            }
            $.connectionError.hide();
            $.activityIndicator.hide();
            $.therapistList.setData(dataArray);
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "terapistList";
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
    $.__views.TherapistList = Ti.UI.createWindow({
        layout: "composite",
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        backgroundColor: "#ffffff",
        id: "TherapistList"
    });
    $.__views.TherapistList && $.addTopLevelView($.__views.TherapistList);
    $.__views.loadingWrapper = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        layout: "composite",
        id: "loadingWrapper"
    });
    $.__views.TherapistList.add($.__views.loadingWrapper);
    $.__views.activityIndicator = Ti.UI.createActivityIndicator({
        left: "10px",
        message: "Cargando...",
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        id: "activityIndicator"
    });
    $.__views.loadingWrapper.add($.__views.activityIndicator);
    $.__views.scrollViewTherapists = Ti.UI.createScrollView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        zIndex: 1,
        scrollType: "vertical",
        id: "scrollViewTherapists"
    });
    $.__views.TherapistList.add($.__views.scrollViewTherapists);
    $.__views.therapistList = Ti.UI.createTableView({
        id: "therapistList"
    });
    $.__views.scrollViewTherapists.add($.__views.therapistList);
    $.__views.buttonSpace = Ti.UI.createView({
        bottom: "20sp",
        right: "20sp",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        zIndex: 2,
        id: "buttonSpace"
    });
    $.__views.TherapistList.add($.__views.buttonSpace);
    $.__views.addTherapist = Ti.UI.createButton({
        color: "#ffffff",
        font: {
            fontSize: "30sp"
        },
        backgroundColor: "#009933",
        borderWidth: 0,
        borderColor: "#009933",
        width: "60sp",
        height: "60sp",
        borderRadius: "30sp",
        backgroundImage: "none",
        zIndex: 3,
        bottom: 0,
        title: "+",
        id: "addTherapist"
    });
    $.__views.buttonSpace.add($.__views.addTherapist);
    $.__views.connectionError = Ti.UI.createView({
        visible: false,
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        top: 0,
        zIndex: 2,
        id: "connectionError"
    });
    $.__views.TherapistList.add($.__views.connectionError);
    $.__views.__alloyId285 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId285"
    });
    $.__views.connectionError.add($.__views.__alloyId285);
    $.__views.__alloyId286 = Ti.UI.createLabel({
        text: "Hubo un error en la conección",
        id: "__alloyId286"
    });
    $.__views.__alloyId285.add($.__views.__alloyId286);
    $.__views.reintentar = Ti.UI.createButton({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        title: "Reintentar",
        id: "reintentar"
    });
    $.__views.__alloyId285.add($.__views.reintentar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.TherapistList.open();
    $.activityIndicator.show();
    getTherapistList();
    $.addTherapist.addEventListener("click", function() {
        Alloy.createController("addTherapist").getView();
    });
    $.reintentar.addEventListener("click", function() {
        getTherapistList();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;