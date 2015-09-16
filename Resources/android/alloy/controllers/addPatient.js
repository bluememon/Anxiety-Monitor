function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function agregarPaciente(idTerapeuta) {
        var request = Ti.Network.createHTTPClient({
            onload: function() {
                alert("El Paciente fue agregado con éxito!");
                $.newPatient.close();
            },
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("There was an error during the conexion");
            },
            timeout: 3e3
        });
        request.open("POST", "http://app.bluecoreservices.com/webservices/agregarPaciente.php");
        var params = {
            userType: 3,
            idTerapeuta: idTerapeuta,
            firstName: $.firstName.value,
            lastName: $.lastName.value,
            username: $.username.value,
            password: $.password.value
        };
        request.send(params);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addPatient";
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
    $.__views.newPatient = Ti.UI.createWindow({
        layout: "composite",
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        id: "newPatient"
    });
    $.__views.newPatient && $.addTopLevelView($.__views.newPatient);
    $.__views.__alloyId62 = Ti.UI.createScrollView({
        layout: "vertical",
        width: Titanium.UI.FILL,
        left: "10dp",
        right: "10dp",
        bottom: "60dp",
        top: "0dp",
        id: "__alloyId62"
    });
    $.__views.newPatient.add($.__views.__alloyId62);
    $.__views.HeaderMessage = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        top: "10dp",
        id: "HeaderMessage"
    });
    $.__views.__alloyId62.add($.__views.HeaderMessage);
    $.__views.__alloyId63 = Ti.UI.createLabel({
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "35dp"
        },
        color: "#000000",
        text: "Agregar Paciente",
        id: "__alloyId63"
    });
    $.__views.HeaderMessage.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        top: "30dp",
        id: "__alloyId64"
    });
    $.__views.__alloyId62.add($.__views.__alloyId64);
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
    $.__views.__alloyId64.add($.__views.firstName);
    $.__views.__alloyId65 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        top: "30dp",
        id: "__alloyId65"
    });
    $.__views.__alloyId62.add($.__views.__alloyId65);
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
    $.__views.__alloyId65.add($.__views.lastName);
    $.__views.__alloyId66 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        top: "30dp",
        id: "__alloyId66"
    });
    $.__views.__alloyId62.add($.__views.__alloyId66);
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
    $.__views.__alloyId66.add($.__views.username);
    $.__views.__alloyId67 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        top: "30dp",
        id: "__alloyId67"
    });
    $.__views.__alloyId62.add($.__views.__alloyId67);
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
    $.__views.__alloyId67.add($.__views.password);
    $.__views.__alloyId68 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        top: "30dp",
        id: "__alloyId68"
    });
    $.__views.__alloyId62.add($.__views.__alloyId68);
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
    $.__views.__alloyId68.add($.__views.password2);
    $.__views.__alloyId69 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        bottom: 0,
        id: "__alloyId69"
    });
    $.__views.newPatient.add($.__views.__alloyId69);
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
        title: "Agregar Paciente",
        id: "agregarButton"
    });
    $.__views.__alloyId69.add($.__views.agregarButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.newPatient.open();
    var idTerapeuta = arguments[0].idTherapist;
    $.agregarButton.addEventListener("click", function() {
        "" != $.firstName.value || "" != $.lastName.value || "" != $.username.value || "" != $.password.value || "" != $.password2.value ? $.password.value === $.password2.value ? agregarPaciente(idTerapeuta) : alert("las contraseñas no coinciden") : alert("falta de llenar datos");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;