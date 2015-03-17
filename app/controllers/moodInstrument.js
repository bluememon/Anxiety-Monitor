var args = arguments[0] || {};
// Auto opening window
$.moodInstrument.open();

getCategorias();

$.closeModal.addEventListener("click", function(){
		$.InformationModal.hide();
});

$.sendDASA.addEventListener("click", function(){
	insertData();
});

$.openAddCat.addEventListener("click", function(){
	$.dialogCategoria.show();
});

function agregarCatego(e, id){
	
};

function getCategorias () { 
   //function to use HTTP to connect to a web server and transfer the data. 
          var sendit = Ti.Network.createHTTPClient({ 
                 onerror: function(e){ 
                       Ti.API.debug(e.error); 
                       alert('There was an error during the connection'); 
                 }, 
              timeout:1000, 
          });                      
          //Here you have to change it for your local ip 
          sendit.open('GET', 'http://app.bluecoreservices.com/webservices/getCategorias.php');  
          sendit.send(); 
          //Function to be called upon a successful response 
          sendit.onload = function(){ 
                 var json = JSON.parse(this.responseText); 
                 var json = json.categorias; 
                 //if the database is empty show an alert 
                 if(json.length == 0){ 
                        $.contenedorCategorias.headerTitle = "The database row is empty"; 
                 }                      
                 //Emptying the data to refresh the view 
                 dataArray = [];                      
                 //Insert the JSON data to the table view 
                 for( var i=0; i<json.length; i++){ 
                 	
                     var row = Ti.UI.createPickerRow({
                     		title: json[i].nombre,
                     		value: json[i].id
             		 });                                     		
                               
                     dataArray.push(row);                 
                 };                      
                 $.picker.add(dataArray);                            
           }; 
   };        

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