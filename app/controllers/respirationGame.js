var args = arguments[0] || {};

$.canvasVentana.open();

var durationAnimation = 500;


$.circulo.addEventListener('touchstart', function(){
	$.circulo.animate(a);
});

$.circulo.addEventListener('touchend', function(){
	
	$.circulo.animate(a2, function(){
		durationAnimation += 500;
		a.setDuration(durationAnimation);
		a2.setDuration(durationAnimation);
	});
});

var matrix2d = Ti.UI.create2DMatrix();
matrix2d = matrix2d.scale(30); // scale to 1.5 times original size

var matrix3d = Ti.UI.create2DMatrix();
matrix3d = matrix3d.scale(1);

var a = Ti.UI.createAnimation({
	transform: matrix2d,
	duration: durationAnimation
});

var a2 = Ti.UI.createAnimation({
	transform: matrix3d,
	duration: durationAnimation
});
