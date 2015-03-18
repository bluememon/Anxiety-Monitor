$.index.open();

var pinNumber = Ti.App.Properties.getString('pinNumber');
var startingPage = null;

//Primero se revisa si exsiste un pin number registrado y pide  el pin number
if (pinNumber != ''){
	startingPage = Alloy.createController('pinPage').getView();
}


// en caso contrario es la primera vez que se usa la aplicación por lo que se pide que el usuario ingrese el usuario, password y pin
else {
	startingPage = Alloy.createController('firstTime').getView();
}



