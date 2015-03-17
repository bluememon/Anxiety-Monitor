var args = arguments[0] || {};
// Auto opening window
$.evaluacionTerapeuta.open();

$.closeModal.addEventListener("click", function(){
		$.InformationModal.hide();
});

$.sendDASA.addEventListener("click", function(){
	insertData();
});     

function insertData(){ 
        	//if there is something in the textbox 
             if($.question1.value != "" && $.question1.value != null){ 
                     var request = Ti.Network.createHTTPClient({ 
                  onload: function(){
                  	alert("Gracias por llenar la Evaluación!");
                  	$.evaluacionTerapeuta.close();
                  },
                  onerror: function(e){ 
                      Ti.API.debug(e.error); 
                      alert('There was an error during the conexion'); 
                  }, 
                  timeout:1000, 
                     });    
//Request the data from the web service, Here you have to change it for your local ip 
                     request.open("POST","http://app.bluecoreservices.com/webservices/addEvalTerapeuta.php"); 
                     var params = ({
                     	"question1": $.question1.value,
                     	"question2": $.question2.value,
                     	"question3": $.question3.value,
                     	});  
                  request.send(params); 
              }
       };  