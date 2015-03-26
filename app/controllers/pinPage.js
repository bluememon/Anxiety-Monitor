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

$.entrarSistema.addEventListener("touchstart", function(){
	$.entrarSistema.backgroundColor = "#000000";
	$.entrarSistema.opacity = 0.4;
});

$.entrarSistema.addEventListener("touchend", function(){
	$.entrarSistema.backgroundColor = "transparent";
	$.entrarSistema.opacity = 1.0;
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

$.numeroDos.addEventListener("touchstart", function(){
	$.numeroDos.backgroundColor = "#000000";
	$.numeroDos.opacity = 0.4;
});

$.numeroDos.addEventListener("touchend", function(){
	$.numeroDos.backgroundColor = "transparent";
	$.numeroDos.opacity = 1.0;
});

$.numeroTres.addEventListener("click", function(){
	$.pin.value += 3;
});

$.numeroTres.addEventListener("touchstart", function(){
	$.numeroTres.backgroundColor = "#000000";
	$.numeroTres.opacity = 0.4;
});

$.numeroTres.addEventListener("touchend", function(){
	$.numeroTres.backgroundColor = "transparent";
	$.numeroTres.opacity = 1.0;
});

$.numeroCuatro.addEventListener("click", function(){
	$.pin.value += 4;
});

$.numeroCuatro.addEventListener("touchstart", function(){
	$.numeroCuatro.backgroundColor = "#000000";
	$.numeroCuatro.opacity = 0.4;
});

$.numeroCuatro.addEventListener("touchend", function(){
	$.numeroCuatro.backgroundColor = "transparent";
	$.numeroCuatro.opacity = 1.0;
});

$.numeroCinco.addEventListener("click", function(){
	$.pin.value += 5;
});

$.numeroCinco.addEventListener("touchstart", function(){
	$.numeroCinco.backgroundColor = "#000000";
	$.numeroCinco.opacity = 0.4;
});

$.numeroCinco.addEventListener("touchend", function(){
	$.numeroCinco.backgroundColor = "transparent";
	$.numeroCinco.opacity = 1.0;
});

$.numeroSeis.addEventListener("click", function(){
	$.pin.value += 6;
});

$.numeroSeis.addEventListener("touchstart", function(){
	$.numeroSeis.backgroundColor = "#000000";
	$.numeroSeis.opacity = 0.4;
});

$.numeroSeis.addEventListener("touchend", function(){
	$.numeroSeis.backgroundColor = "transparent";
	$.numeroSeis.opacity = 1.0;
});

$.numeroSiete.addEventListener("click", function(){
	$.pin.value += 7;
});

$.numeroSiete.addEventListener("touchstart", function(){
	$.numeroSiete.backgroundColor = "#000000";
	$.numeroSiete.opacity = 0.4;
});

$.numeroSiete.addEventListener("touchend", function(){
	$.numeroSiete.backgroundColor = "transparent";
	$.numeroSiete.opacity = 1.0;
});

$.numeroOcho.addEventListener("click", function(){
	$.pin.value += 8;
});

$.numeroOcho.addEventListener("touchstart", function(){
	$.numeroOcho.backgroundColor = "#000000";
	$.numeroOcho.opacity = 0.4;
});

$.numeroOcho.addEventListener("touchend", function(){
	$.numeroOcho.backgroundColor = "transparent";
	$.numeroOcho.opacity = 1.0;
});

$.numeroNueve.addEventListener("click", function(){
	$.pin.value += 9;
});

$.numeroNueve.addEventListener("touchstart", function(){
	$.numeroNueve.backgroundColor = "#000000";
	$.numeroNueve.opacity = 0.4;
});

$.numeroNueve.addEventListener("touchend", function(){
	$.numeroNueve.backgroundColor = "transparent";
	$.numeroNueve.opacity = 1.0;
});

$.numeroCero.addEventListener("click", function(){
	$.pin.value += 0;
});

$.numeroCero.addEventListener("touchstart", function(){
	$.numeroCero.backgroundColor = "#000000";
	$.numeroCero.opacity = 0.4;
});

$.numeroCero.addEventListener("touchend", function(){
	$.numeroCero.backgroundColor = "transparent";
	$.numeroCero.opacity = 1.0;
});