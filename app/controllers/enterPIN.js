var args = arguments[0] || {};

$.pinCreator.open();

$.closeModal.addEventListener("click", function(){
		$.InformationModal.hide();
});

function finalizarSetup() {
	//si el usuario es un terapeuta
	if (Ti.App.Properties.getInt('id') != '' && Ti.App.Properties.getInt('userType') == 1){
		Alloy.createController('terapistList').getView();	 
	}
	
	//si el usuario es un terapeuta
	if (Ti.App.Properties.getInt('id') != '' && Ti.App.Properties.getInt('userType') == 2){
		Alloy.createController('patientList').getView();	 
	}
	//si el usuario es un paciente
	if (Ti.App.Properties.getInt('id') != '' && Ti.App.Properties.getInt('userType') == 3){
		Alloy.createController('listado').getView();	 
	}
};

$.verificarButton.addEventListener("click", function(){
	if ($.pin.value === $.pin2.value){
		Ti.App.Properties.setInt('pinNumber', $.pin.value);
		$.dialogPIN.show();
	}
	
	else {
		alert("los números PIN que agregaste no coinciden");
	}
});
