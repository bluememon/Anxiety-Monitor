var args = arguments[0] || {};

//checamos si es terapeuta
if (Ti.App.Properties.getInt('id') != '' && Ti.App.Properties.getInt('userType') == 3){
	var idPaciente = Ti.App.Properties.getInt('id'); 
}

else 
{
	if (arguments[0].idPatient !== 'undefined'){
		var idPaciente = arguments[0].idPatient;	
	}
}

$.grupodeTabs.open();

var tab1 = Alloy.createController('categoList', { idPatient: idPaciente }).getView();
var tab2 = Alloy.createController('DASList', { idPatient: idPaciente }).getView();

$.grupodeTabs.addTab(tab1);
$.grupodeTabs.addTab(tab2);
