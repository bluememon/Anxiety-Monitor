function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function getPatientList(idTherapist) {
        var sendit = Ti.Network.createHTTPClient({
            onerror: function(e) {
                Ti.API.debug(e.error);
                $.connectionError.show();
                alert("There was an error during the connection");
            },
            timeout: 3e3
        });
        sendit.open("POST", "http://app.bluecoreservices.com/webservices/listPatient.php");
        var params = {
            idTerapeuta: idTherapist
        };
        sendit.send(params);
        sendit.onload = function() {
            var json = JSON.parse(this.responseText);
            var json = json.patientsList;
            0 == json.length && $.noPatientView.show();
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
                row.idPaciente = json[i].id;
                row.addEventListener("click", function() {
                    Alloy.createController("listado", {
                        idPatient: this.idPaciente
                    }).getView();
                });
                dataArray.push(row);
            }
            $.connectionError.hide();
            $.activityIndicator.hide();
            $.patientstList.setData(dataArray);
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "patientList";
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
    $.__views.patientList = Ti.UI.createWindow({
        id: "patientList"
    });
    $.__views.patientList && $.addTopLevelView($.__views.patientList);
    $.__views.loadingWrapper = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        layout: "composite",
        id: "loadingWrapper"
    });
    $.__views.patientList.add($.__views.loadingWrapper);
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
    $.__views.patientList.add($.__views.scrollViewTherapists);
    $.__views.patientstList = Ti.UI.createTableView({
        id: "patientstList"
    });
    $.__views.scrollViewTherapists.add($.__views.patientstList);
    $.__views.noPatientView = Ti.UI.createView({
        visible: false,
        id: "noPatientView"
    });
    $.__views.scrollViewTherapists.add($.__views.noPatientView);
    $.__views.__alloyId220 = Ti.UI.createLabel({
        text: "No exsisten pacientes registrados",
        id: "__alloyId220"
    });
    $.__views.noPatientView.add($.__views.__alloyId220);
    $.__views.buttonSpace = Ti.UI.createView({
        bottom: "20sp",
        right: "20sp",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        zIndex: 3,
        id: "buttonSpace"
    });
    $.__views.patientList.add($.__views.buttonSpace);
    $.__views.addPatient = Ti.UI.createButton({
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
        id: "addPatient"
    });
    $.__views.buttonSpace.add($.__views.addPatient);
    $.__views.connectionError = Ti.UI.createView({
        visible: false,
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        top: 0,
        zIndex: 2,
        id: "connectionError"
    });
    $.__views.patientList.add($.__views.connectionError);
    $.__views.__alloyId221 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId221"
    });
    $.__views.connectionError.add($.__views.__alloyId221);
    $.__views.__alloyId222 = Ti.UI.createLabel({
        text: "Hubo un error en la conección",
        id: "__alloyId222"
    });
    $.__views.__alloyId221.add($.__views.__alloyId222);
    $.__views.reintentar = Ti.UI.createButton({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        title: "Reintentar",
        id: "reintentar"
    });
    $.__views.__alloyId221.add($.__views.reintentar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    if ("" != Ti.App.Properties.getInt("id") && 2 == Ti.App.Properties.getInt("userType")) var idTerapeuta = Ti.App.Properties.getInt("id"); else if ("undefined" !== arguments[0].idTherapist) var idTerapeuta = arguments[0].idTherapist;
    $.patientList.open();
    $.activityIndicator.show();
    getPatientList(idTerapeuta);
    $.addPatient.addEventListener("click", function() {
        Alloy.createController("addPatient", {
            idTherapist: idTerapeuta
        }).getView();
    });
    $.reintentar.addEventListener("click", function() {
        getPatientList(idTerapeuta);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;