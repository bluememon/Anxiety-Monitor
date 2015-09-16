$.index.open();

var pinNumber = Ti.App.Properties.getInt('pinNumber', null);

var startingPage = null;

var username = Ti.App.Properties.getString('username', null);
var password = Ti.App.Properties.getString('password', null);


//Primero se revisa si exsiste un pin number registrado y pide  el pin number
if (pinNumber != null){
	
	Ti.API.info("username: " + username + " Password: " + password);
	
	Cloud.Users.login({
	    login: username,
	    password: password	    
		}, function (e) {
	    	if (e.success) {
	    		alert("login success");
	        	defaultSubscribe();
	        	startingPage = Alloy.createController('pinPage').getView();
	    } else {
	        alert('Error: ' +((e.error && e.message) || JSON.stringify(e)));
	    }
    });
}


// en caso contrario es la primera vez que se usa la aplicación por lo que se pide que el usuario ingrese el usuario, password y pin
else {
	startingPage = Alloy.createController('firstTime').getView();
}



