function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function userVerify(user, pswd) {
        var sendit = Ti.Network.createHTTPClient({
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("There was an error during the connection");
            },
            timeout: 1e3
        });
        if ("" != user && "" != pswd) {
            var params = {
                username: user,
                password: Ti.Utils.md5HexDigest(pswd)
            };
            sendit.open("POST", "http://app.bluecoreservices.com/webservices/loginCheck.php");
            sendit.send(params);
            sendit.onload = function() {
                var json = this.responseText;
                var response = JSON.parse(json);
                if (true == response.logged) {
                    Ti.App.Properties.setString("name", response.firstName);
                    Ti.App.Properties.setInt("userType", response.type);
                    Ti.App.Properties.setInt("id", response.id);
                    Ti.App.Properties.setString("username", user);
                    Ti.App.Properties.setString("password", pswd);
                    Ti.API.info("username: " + Ti.App.Properties.getInt("username", null) + " password: " + Ti.App.Properties.getInt("password", null));
                    Ti.API.info("checando arrowdb");
                    Cloud.Users.login({
                        login: $.username.value,
                        password: $.password.value
                    }, function(e) {
                        Ti.API.info("comenzando chequeo de usuario");
                        if (e.success) {
                            var user = e.users[0];
                            Ti.API.info("si paso el login, su id es:" + user.id);
                            defaultSubscribe();
                            Alloy.createController("enterPIN").getView();
                        } else {
                            Ti.API.info("no existe el usuario");
                            alert("Error: " + (e.error && e.message || JSON.stringify(e)));
                            Cloud.Users.create({
                                username: $.username.value,
                                password: $.password.value,
                                password_confirmation: $.password.value
                            }, function(e) {
                                if (e.success) {
                                    var user = e.users[0];
                                    Ti.API.info("se creo el nuevo usuario, su id es:" + user.id);
                                    agregarPushId(user.id, Ti.App.Properties.getInt("id"));
                                    defaultSubscribe();
                                    Alloy.createController("enterPIN").getView();
                                } else {
                                    Ti.API.info("hubo un error creando el usuario");
                                    alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
                                }
                            });
                        }
                    });
                } else alert(response.message);
            };
        } else alert("El nombre de usuario y la contraseña son requeridos");
    }
    function agregarPushId(pushID, userID) {
        Ti.API.info("actualizando id");
        var request = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.API.info("El pushID fue agregado con éxito!");
            },
            onerror: function(e) {
                Ti.API.debug(e.error);
                Ti.API.info("There was an error during the conexion");
            },
            timeout: 3e3
        });
        request.open("POST", "http://app.bluecoreservices.com/webservices/agregarPushId.php");
        var params = {
            pushId: pushID,
            userId: userID
        };
        request.send(params);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "firstTime";
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
    $.__views.userNameVerifier = Ti.UI.createWindow({
        id: "userNameVerifier"
    });
    $.__views.userNameVerifier && $.addTopLevelView($.__views.userNameVerifier);
    $.__views.InformationModal = Ti.UI.createView({
        layout: "composite",
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        zIndex: 2,
        backgroundColor: "transparent",
        id: "InformationModal"
    });
    $.__views.userNameVerifier.add($.__views.InformationModal);
    $.__views.__alloyId162 = Ti.UI.createView({
        top: "0sp",
        layout: "vertical",
        zIndex: 2,
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId162"
    });
    $.__views.InformationModal.add($.__views.__alloyId162);
    $.__views.__alloyId163 = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#ffffff",
        font: {
            fontSize: "18sp"
        },
        height: Titanium.UI.SIZE,
        text: "Bienvenido!!",
        id: "__alloyId163"
    });
    $.__views.__alloyId162.add($.__views.__alloyId163);
    $.__views.__alloyId164 = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#ffffff",
        font: {
            fontSize: "18sp"
        },
        height: Titanium.UI.SIZE,
        text: "Te agradcecemos mucho que formes parte de nuestro estudio",
        id: "__alloyId164"
    });
    $.__views.__alloyId162.add($.__views.__alloyId164);
    $.__views.__alloyId165 = Ti.UI.createLabel({
        top: "20sp",
        left: "10sp",
        right: "10sp",
        color: "#ffffff",
        font: {
            fontSize: "18sp"
        },
        height: Titanium.UI.SIZE,
        text: "A continuación se pedirá que ingreses el nombre de usuario y el password que te dio tu terapeuta",
        id: "__alloyId165"
    });
    $.__views.__alloyId162.add($.__views.__alloyId165);
    $.__views.__alloyId166 = Ti.UI.createView({
        zIndex: 3,
        bottom: "10sp",
        right: "10sp",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId166"
    });
    $.__views.InformationModal.add($.__views.__alloyId166);
    $.__views.closeModal = Ti.UI.createButton({
        title: "Aceptar",
        id: "closeModal"
    });
    $.__views.__alloyId166.add($.__views.closeModal);
    $.__views.__alloyId167 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        backgroundColor: "#000000",
        opacity: .9,
        zIndex: 1,
        top: "0sp",
        id: "__alloyId167"
    });
    $.__views.InformationModal.add($.__views.__alloyId167);
    $.__views.__alloyId168 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        zIndex: 1,
        id: "__alloyId168"
    });
    $.__views.userNameVerifier.add($.__views.__alloyId168);
    $.__views.__alloyId169 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        left: "10sp",
        right: "10sp",
        id: "__alloyId169"
    });
    $.__views.__alloyId168.add($.__views.__alloyId169);
    $.__views.username = Ti.UI.createTextField({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        hintText: "Nombre de usuario",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
        id: "username"
    });
    $.__views.__alloyId169.add($.__views.username);
    $.__views.__alloyId170 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        left: "10sp",
        right: "10sp",
        id: "__alloyId170"
    });
    $.__views.__alloyId168.add($.__views.__alloyId170);
    $.__views.password = Ti.UI.createTextField({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        hintText: "Contraseña",
        passwordMask: true,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
        id: "password"
    });
    $.__views.__alloyId170.add($.__views.password);
    $.__views.__alloyId171 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId171"
    });
    $.__views.__alloyId168.add($.__views.__alloyId171);
    $.__views.verificarButton = Ti.UI.createButton({
        title: "Verificar",
        id: "verificarButton"
    });
    $.__views.__alloyId171.add($.__views.verificarButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.userNameVerifier.open();
    $.closeModal.addEventListener("click", function() {
        $.InformationModal.hide();
    });
    $.verificarButton.addEventListener("click", function() {
        userVerify($.username.value, $.password.value);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;