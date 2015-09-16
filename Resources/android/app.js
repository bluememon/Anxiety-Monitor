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
        deviceToken = e.deviceToken;
    },
    error: function(e) {
        alert("Failed to register for push! " + e.error);
    }
});

Alloy.createController("index");