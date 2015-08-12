// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

var CloudPush = require('ti.cloudpush');
CloudPush.retrieveDeviceToken({
    success: function deviceTokenSuccess(e) {
        Ti.API.info('Device Token: ' + e.deviceToken);
    },
    error: function deviceTokenError(e) {
        alert('Failed to register for push! ' + e.error);
    }
});

/*Cloud.Users.login({
    login: 'bluememon',
    password: 'uribeeg81'
}, function (e) {
    if (e.success) {
        alert("login success");
    } else {
        alert('Error: ' + ((e.error && e.message) || JSON.stringify(e)));
    }
});*/  