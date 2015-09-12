function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function agregarTerapeuta() {
        var request = Ti.Network.createHTTPClient({
            onload: function() {
                alert("El Terapeuta fue agregado con éxito!");
                $.newTherapist.close();
            },
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("There was an error during the conexion");
            },
            timeout: 3e3
        });
        request.open("POST", "http://app.bluecoreservices.com/webservices/agregarTerapeuta.php");
        var params = {
            userType: 2,
            firstName: $.firstName.value,
            lastName: $.lastName.value,
            username: $.username.value,
            password: $.password.value
        };
        request.send(params);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addTherapist";
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
    $.__views.newTherapist = Ti.UI.createWindow({
        layout: "composite",
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        id: "newTherapist"
    });
    $.__views.newTherapist && $.addTopLevelView($.__views.newTherapist);
    $.__views.__alloyId8 = Ti.UI.createScrollView({
        layout: "vertical",
        width: Titanium.UI.FILL,
        left: "10dp",
        right: "10dp",
        bottom: "60dp",
        top: "0dp",
        id: "__alloyId8"
    });
    $.__views.newTherapist.add($.__views.__alloyId8);
    $.__views.HeaderMessage = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        top: "10dp",
        id: "HeaderMessage"
    });
    $.__views.__alloyId8.add($.__views.HeaderMessage);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "35dp"
        },
        color: "#000000",
        text: "Agregar Terapeuta",
        id: "__alloyId9"
    });
    $.__views.HeaderMessage.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        top: "30dp",
        id: "__alloyId10"
    });
    $.__views.__alloyId8.add($.__views.__alloyId10);
    $.__views.firstName = Ti.UI.createTextField({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        font: {
            fontSize: "20dp"
        },
        color: "#000000",
        hintText: "Nombre",
        top: "30dp",
        id: "firstName"
    });
    $.__views.__alloyId10.add($.__views.firstName);
    $.__views.__alloyId11 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        top: "30dp",
        id: "__alloyId11"
    });
    $.__views.__alloyId8.add($.__views.__alloyId11);
    $.__views.lastName = Ti.UI.createTextField({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        font: {
            fontSize: "20dp"
        },
        color: "#000000",
        hintText: "Apellido",
        top: "30dp",
        id: "lastName"
    });
    $.__views.__alloyId11.add($.__views.lastName);
    $.__views.__alloyId12 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        top: "30dp",
        id: "__alloyId12"
    });
    $.__views.__alloyId8.add($.__views.__alloyId12);
    $.__views.username = Ti.UI.createTextField({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        font: {
            fontSize: "20dp"
        },
        color: "#000000",
        hintText: "Nombre de Usuario",
        top: "30dp",
        id: "username"
    });
    $.__views.__alloyId12.add($.__views.username);
    $.__views.__alloyId13 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        top: "30dp",
        id: "__alloyId13"
    });
    $.__views.__alloyId8.add($.__views.__alloyId13);
    $.__views.password = Ti.UI.createTextField({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        font: {
            fontSize: "20dp"
        },
        color: "#000000",
        hintText: "Contraseña",
        top: "30dp",
        id: "password"
    });
    $.__views.__alloyId13.add($.__views.password);
    $.__views.__alloyId14 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        top: "30dp",
        id: "__alloyId14"
    });
    $.__views.__alloyId8.add($.__views.__alloyId14);
    $.__views.password2 = Ti.UI.createTextField({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        font: {
            fontSize: "20dp"
        },
        color: "#000000",
        hintText: "Repetir Contraseña",
        top: "30dp",
        id: "password2"
    });
    $.__views.__alloyId14.add($.__views.password2);
    $.__views.__alloyId15 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        bottom: 0,
        id: "__alloyId15"
    });
    $.__views.newTherapist.add($.__views.__alloyId15);
    $.__views.agregarButton = Ti.UI.createButton({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        font: {
            fontSize: "20dp"
        },
        color: "#000000",
        top: "10dp",
        bottom: "10dp",
        left: "10dp",
        right: "10dp",
        title: "Agregar Terapeuta",
        id: "agregarButton"
    });
    $.__views.__alloyId15.add($.__views.agregarButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.newTherapist.open();
    $.agregarButton.addEventListener("click", function() {
        "" != $.firstName.value || "" != $.lastName.value || "" != $.username.value || "" != $.password.value || "" != $.password2.value ? $.password.value === $.password2.value ? agregarTerapeuta() : alert("las contraseñas no coinciden") : alert("falta de llenar datos");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;