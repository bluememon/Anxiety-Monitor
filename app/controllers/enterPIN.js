var args = arguments[0] || {};

$.pinCreator.open();

$.closeModal.addEventListener("click", function(){
		$.InformationModal.hide();
});

function finalizarSetup() {
		Alloy.createController('listado').getView().open();
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
