var args = arguments[0] || {};

var idPaciente = arguments[0].idPatient;

var dataArrayNivel = [];
var dataArrayFecha = [];           

var buttonToggle = false;

loadData();

function loadData(){
	var sendit = Ti.Network.createHTTPClient({ 
	 onerror: function(e){ 
	       Ti.API.debug(e.error); 
	       alert('There was an error during the connection'); 
	         }, 
	      timeout:3000, 
	  });                      
          //Here you have to change it for your local ip 
      sendit.open('POST', 'http://app.bluecoreservices.com/webservices/getLineChart.php');
      var params = ({
      	"idPaciente": idPaciente,
      });
      sendit.send(params); 
          
          //Function to be called upon a successful response 
      sendit.onload = function(){ 
             var json = JSON.parse(this.responseText); 
             var json = json.lineData; 
             //if the database is empty show an alert 
             if(json.length == 0){ 
             	$.noInfoView.show();       
             }                      
             //Emptying the data to refresh the view 
             //Insert the JSON data to the table view
             for( var i=0; i<json.length; i++){
             	dataArrayNivel.push(json[i].total);
             	dataArrayFecha.push(json[i].fechaEnvio);
             }
			//$.chartWebView.evalJS('createalert()');             
      };
	
};

$.addDAS.addEventListener("click", function(){
 	var temp = Alloy.createController('DASInstrument', { idPatient: idPaciente }).getView();
});

$.addShort.addEventListener("click", function(){
 	var temp = Alloy.createController('moodInstrument', { idPatient: idPaciente }).getView();
});


$.chartWebView.addEventListener('load', function() {
	$.chartWebView.evalJS('crearGrafica(' + JSON.stringify(dataArrayNivel) + ', '  + JSON.stringify(dataArrayFecha) + ')');
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