var args = arguments[0] || {};
var idPaciente = arguments[0].idPatient;
var categoriaActiva = null;
// Auto opening window
$.moodInstrument.open();

getCategorias();

$.closeModal.addEventListener("click", function(){
	$.InformationModal.hide();
});

$.sendMood.addEventListener("click", function(){
	insertData();
});

$.openAddCat.addEventListener("click", function(){
	$.dialogCategoria.show();
});

$.dialogError.addEventListener("click", function(ev){
	if (ev.index == 0) { // clicked "Yes"
      insertData();
    } else if (ev.index == 1) { // clicked "No"
      // do nothing
    }
});

$.dialogErrorCatalog.addEventListener("click", function(ev){
	if (ev.index == 0) { // clicked "Yes"
      agregarCatego(categoriaActiva);
    } else if (ev.index == 1) { // clicked "No"
      // do nothing
    }
});

$.dialogErrorCatalogList.addEventListener("click", function(ev){
	if (ev.index == 0) { // clicked "Yes"
      getCategorias();
    } else if (ev.index == 1) { // clicked "No"
      // do nothing
    }
});

$.dialogCategoria.addEventListener("click", function(ev){
	if (ev.index == 0) { // clicked "Yes"
		categoriaActiva = ev.source.androidView.children[0].value;
      	agregarCatego(ev.source.androidView.children[0].value);
    } else if (ev.index == 1) { // clicked "No"
      // do nothing
    }
});

$.picker.addEventListener('change', function(e) {
	categoriaActiva = e.row.value;
});

function agregarCatego(nombreCatego){
	if (nombreCatego != ''){
      var request = Ti.Network.createHTTPClient({ 
	      onload: function(){
	      	var json = JSON.parse(this.responseText); 
	        var json = json.newCatego;
	        
	      	var row = Ti.UI.createPickerRow({
		    	title: json[0].nombre,
		    	value: json[0].id
			});
	      	$.picker.columns[0].addRow(row);
	      	var ultimo = $.picker.columns[0].getRowCount() - 1;
	      	$.picker.setSelectedRow(0, ultimo, false);
	      },
	      onerror: function(e){ 
	          Ti.API.debug(e.error); 
	          alert('There was an error during the conexion'); 
	      }, 
	      timeout:3000, 
      });    
		//Request the data from the web service, Here you have to change it for your local ip 
        request.open("POST","http://app.bluecoreservices.com/webservices/addCatego.php"); 
        var params = ({
        	"nuevaCatego": nombreCatego,
        	"idPaciente": idPaciente,
     	});  
        request.send(params); 
	}
	else {
		alert("el campo de categoría está vacío");
	}
};

function getCategorias() { 
   //function to use HTTP to connect to a web server and transfer the data.
          var sendit = Ti.Network.createHTTPClient({ 
                 onerror: function(e){ 
                       Ti.API.debug(e.error); 
                       $.dialogErrorCatalogList.show(); 
                 }, 
              timeout:3000, 
          });                      
          //Here you have to change it for your local ip 
          sendit.open('POST', 'http://app.bluecoreservices.com/webservices/getCategorias.php');
          var params = ({
        	  "idPaciente": idPaciente,
     	  });    
          sendit.send(params); 
          
          //Function to be called upon a successful response 
          sendit.onload = function(){          	
          	//checar si las categorias ya estan asignadas y quitarlas
                 var json = JSON.parse(this.responseText); 
                 var json = json.categorias; 
                 //if the database is empty show an alert 
                 if(json.length == 0){ 
                        $.contenedorCategorias.headerTitle = "The database row is empty"; 
                 }                      
                 //Emptying the data to refresh the view 
                 dataArray = [];
                 var columnPicker = Ti.UI.createPickerColumn();                      
                 //Insert the JSON data to the table view 
                 for( var i=0; i<json.length; i++){ 
                 	
                     var row = Ti.UI.createPickerRow({
                     		title: json[i].nombre,
                     		value: json[i].id
             		 });                                     		
                               
                     dataArray.push(row);
                     columnPicker.addRow(row);
                                      
                 };                                       
                 $.picker.add(columnPicker); 
           }; 
   };        

function insertData(){ 
	//if there is something in the textbox 
     if($.question1.value != "" && $.question1.value != null){ 
             var request = Ti.Network.createHTTPClient({ 
          onload: function(){
          	alert("Gracias por llenar la Evaluación!");
          	$.moodInstrument.close();
          },
          onerror: function(e){ 
              Ti.API.debug(e.error); 
              $.dialogError.show(); 
          }, 
          timeout:3000, 
             });    
//Request the data from the web service, Here you have to change it for your local ip 
             request.open("POST","http://app.bluecoreservices.com/webservices/addMood.php"); 
             var params = ({
             	"idPaciente": idPaciente,
             	"categoria": categoriaActiva,
             	"severidad": $.question1.value,
             	"informacion": $.textArea.value,
         	 });
             request.send(params); 
          }
   };