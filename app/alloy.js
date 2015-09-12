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

CloudPush.debug = true;
CloudPush.enabled = true;
CloudPush.showTrayNotificationsWhenFocused = true;
CloudPush.focusAppOnPush = false;

var deviceToken;
 
var Cloud = require('ti.cloud');
Cloud.debug = true;



CloudPush.retrieveDeviceToken({
	success: function deviceTokenSuccess(e) {
		//alert('Device Token: ' + e.deviceToken);
		deviceToken = e.deviceToken;
		//loginDefault();
	},
	error: function deviceTokenError(e) {
		alert('Failed to register for push! ' + e.error);
	}
});

function defaultSubscribe(){
	Cloud.PushNotifications.subscribe({
    channel: 'alert',
	device_token: deviceToken,
	type: 'gcm'
     }, function (e){
		if (e.success) {
			alert('Subscribed for Push Notification!');
		}else{
			alert('Error:' +((e.error && e.message) || JSON.stringify(e)));
		}
    });
}
 
/*CloudPush.addEventListener('callback', function (evt) {
    //alert(evt);
    alert(evt.payload);
});
 
CloudPush.addEventListener('trayClickLaunchedApp', function (evt) {
    Ti.API.info('Tray Click Launched App (app was not running)');
    //alert('Tray Click Launched App (app was not running');
});
 
CloudPush.addEventListener('trayClickFocusedApp', function (evt) {
    Ti.API.info('Tray Click Focused App (app was already running)');
    //alert('Tray Click Focused App (app was already running)');
});*/