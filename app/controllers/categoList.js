var args = arguments[0] || {};

var idPaciente = arguments[0].idPatient;         

var buttonToggle = false;

$.addDAS.addEventListener("click", function(){
 	var temp = Alloy.createController('DASInstrument', { idPatient: idPaciente }).getView();
});

$.addShort.addEventListener("click", function(){
 	var temp = Alloy.createController('moodInstrument', { idPatient: idPaciente }).getView();
});

 $.expandButtons.addEventListener("click", function(){
	
	if (buttonToggle == false){	
		var m = Ti.UI.create2DMatrix({ 
    		rotate: 45 
		});	
		
		var a1 = Ti.UI.createAnimation();
  		a1.transform = m;
  		a1.duration = 200;
	  	
	  	$.expandButtons.animate(a1);
		
		$.addShort.animate({
			bottom: '80sp',
			opacity: '1',
			duration: 200
		});
		$.addDAS.animate({
			bottom: '160sp',
			opacity: '1',
			duration: 200
		}, function () {
			buttonToggle = true;
		});	
	}
	
	else{	
		var m = Ti.UI.create2DMatrix({ 
    		rotate: 0
		});	
		
		var a1 = Ti.UI.createAnimation();
  		a1.transform = m;
  		a1.duration = 200;
	  	
	  	$.expandButtons.animate(a1);
			
		$.addShort.animate({
			bottom: '0',
			opacity: '0',
			duration: 200
		});
		
		$.addDAS.animate({
			bottom: '0',
			opacity: '0',
			duration: 200
		}, function () {
			buttonToggle = false;
		});	
	}
});

function agregarColor(resultado) {
	if (resultado > 80){
		return "#800000";
	}
	
	if (resultado <= 80 && resultado > 50){
		return "#FF6600";
	}
	
	if (resultado <= 50){
		return "#66CCFF";
	}
};