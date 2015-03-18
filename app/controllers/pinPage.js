var args = arguments[0] || {};

$.entrarSistema.addEventListener("click", function(){
	Alloy.createController('listado').getView().open();
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

$.pinWrapper.open();

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