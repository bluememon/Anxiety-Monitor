var args = arguments[0] || {};

$.newPatient.open();

var idTerapeuta = arguments[0].idTherapist;

$.agregarButton.addEventListener("click", function(){
	if ($.firstName.value != '' || $.lastName.value != '' || $.username.value != '' || $.password.value != '' || $.password2.value != '') {
		if ($.password.value === $.password2.value) {
			agregarPaciente(idTerapeuta);
		}
		else {
			alert("las contraseñas no coinciden");
		}
	}
	else {
		alert("falta de llenar datos");
	}
});

function agregarPaciente(idTerapeuta) { 
	  var request = Ti.Network.createHTTPClient({ 
	  onload: function(){
	  	alert("El Paciente fue agregado con éxito!");
	  	$.newPatient.close();
	  },
	  onerror: function(e){ 
	      Ti.API.debug(e.error); 
	      alert('There was an error during the conexion'); 
	  }, 
	  timeout:3000, 
	  });    
		//Request the data from the web service, Here you have to change it for your local ip 
	     request.open("POST","http://app.bluecoreservices.com/webservices/agregarPaciente.php"); 
	     var params = ({
	     	"userType": 3,
	     	"idTerapeuta": idTerapeuta,
	     	"firstName": $.firstName.value,
	     	"lastName": $.lastName.value,
	     	"username": $.username.value,
	     	"password": $.password.value,
	     });  
	  request.send(params);
}; 