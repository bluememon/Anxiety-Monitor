<<<<<<< HEAD
=======
function loginDefault() {
    Cloud.Users.login({
        login: "bluememon",
        password: "uribeeg81"
    }, function(e) {
        if (e.success) {
            alert("login success");
            defaultSubscribe();
        } else alert("Error: " + (e.error && e.message || JSON.stringify(e)));
    });
}

>>>>>>> 7954a42f5293cb8ea2f707b2b5ca2d27b1193878
function defaultSubscribe() {
    Cloud.PushNotifications.subscribe({
        channel: "alert",
        device_token: deviceToken,
        type: "gcm"
    }, function(e) {
        alert(e.success ? "Subscribed for Push Notification!" : "Error:" + (e.error && e.message || JSON.stringify(e)));
    });
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var CloudPush = require("ti.cloudpush");

CloudPush.debug = true;

CloudPush.enabled = true;

CloudPush.showTrayNotificationsWhenFocused = true;

CloudPush.focusAppOnPush = false;

var deviceToken;

var Cloud = require("ti.cloud");

Cloud.debug = true;

CloudPush.retrieveDeviceToken({
    success: function(e) {
<<<<<<< HEAD
        deviceToken = e.deviceToken;
=======
        alert("Device Token: " + e.deviceToken);
        deviceToken = e.deviceToken;
        loginDefault();
>>>>>>> 7954a42f5293cb8ea2f707b2b5ca2d27b1193878
    },
    error: function(e) {
        alert("Failed to register for push! " + e.error);
    }
});

<<<<<<< HEAD
=======
CloudPush.addEventListener("callback", function() {});

CloudPush.addEventListener("trayClickLaunchedApp", function() {
    Ti.API.info("Tray Click Launched App (app was not running)");
});

CloudPush.addEventListener("trayClickFocusedApp", function() {
    Ti.API.info("Tray Click Focused App (app was already running)");
});

>>>>>>> 7954a42f5293cb8ea2f707b2b5ca2d27b1193878
Alloy.createController("index");