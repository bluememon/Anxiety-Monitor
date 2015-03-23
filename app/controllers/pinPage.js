var args = arguments[0] || {};

$.pinWrapper.open();

$.entrarSistema.addEventListener("click", function(){
	if ($.pin.value == Ti.App.Properties.getInt('pinNumber')){
		switch (Ti.App.Properties.getInt('userType')){
			//admin
			case 1 :
				Alloy.createController('terapistList').getView().open();
			break;
			//therapist
			case 2 :
				Alloy.createController('patientList').getView().open();
			break;
			//patient
			case 3 :
				Alloy.createController('listado').getView().open();
			break;
		}
	}
	else
	{
		alert("lo sentimos! numero PIN incorrecto.");
	}
});

$.numeroUno.addEventListener("click", function(){
	$.pin.value += 1;
});

$.numeroUno.addEventListener("touchstart", function(){
	$.numeroUno.backgroundColor = "#000000";
	$.numeroUno.opacity = 0.4;
});

$.numeroUno.addEventListener("touchend", function(){
	$.numeroUno.backgroundColor = "transparent";
	$.numeroUno.opacity = 1.0;
});

$.numeroDos.addEventListener("click", function(){
	$.pin.value += 2;
});

$.numeroTres.addEventListener("click", function(){
	$.pin.value += 3;
});

$.numeroCuatro.addEventListener("click", function(){
	$.pin.value += 4;
});

$.numeroCinco.addEventListener("click", function(){
	$.pin.value += 5;
});

$.numeroSeis.addEventListener("click", function(){
	$.pin.value += 6;
});

$.numeroSiete.addEventListener("click", function(){
	$.pin.value += 7;
});

$.numeroOcho.addEventListener("click", function(){
	$.pin.value += 8;
});

$.numeroNueve.addEventListener("click", function(){
	$.pin.value += 9;
});

$.numeroCero.addEventListener("click", function(){
	$.pin.value += 0;
});