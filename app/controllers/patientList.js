var args = arguments[0] || {};

//checamos si es terapeuta
if (Ti.App.Properties.getInt('id') != '' && Ti.App.Properties.getInt('userType') == 2){
	var idTerapeuta = Ti.App.Properties.getInt('id'); 
}

else 
{
	if (arguments[0].idTherapist !== 'undefined'){
		var idTerapeuta = arguments[0].idTherapist;	
	}
}

$.patientList.open();
getPatientList(idTerapeuta);

$.addPatient.addEventListener("click", function(){
	Alloy.createController('addPatient', {idTherapist: idTerapeuta}).getView();
});

function getPatientList (idTherapist) { 
		  //function to use HTTP to connect to a web server and transfer the data. 
          var sendit = Ti.Network.createHTTPClient({ 
                 onerror: function(e){ 
                       Ti.API.debug(e.error); 
                       alert('There was an error during the connection'); 
                 }, 
              timeout:3000, 
          });                      
          //Here you have to change it for your local ip 
          sendit.open('POST', 'http://app.bluecoreservices.com/webservices/listPatient.php');
	      var params = ({
	      	"idTerapeuta" : idTherapist,
	      });
          sendit.send(params); 
          //Function to be called upon a successful response 
          sendit.onload = function(){ 
                 var json = JSON.parse(this.responseText); 
                 var json = json.patientsList; 
                 //if the database is empty show an alert 
                 if(json.length == 0){ 
                        $.noPatientView.show(); 
                 }                      
                 //Emptying the data to refresh the view 
                 dataArray = [];                      
                 //Insert the JSON data to the table view 
                 for( var i=0; i<json.length; i++){ 
                 	
                     var row = Ti.UI.createTableViewRow({
                     		className: 'elementRow',
                     		layout: 'horizontal',
							horizontalWrap: false,
							height: Titanium.UI.SIZE,
							width: Titanium.UI.FILL
             		 });
                     
                     var viewTherapist = Titanium.UI.createView({
                     	className: 'rowDate',
                     	height: Titanium.UI.SIZE,
						width: Titanium.UI.FILL,
						left: "10sp",
						bubbleParent: true
                     });
                     
                      var therapistLabel = Titanium.UI.createLabel({
                     	text: json[i].firstName + " " + json[i].lastName,
                     	font: {
                     		fontSize: '20dp'
                     	},
                     	color: '#000000',
                     	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
                     	left: 0,
                     	top: "10dp",
                     	bottom: "10dp"
                     });
                     
                     viewTherapist.add(therapistLabel);
                     row.add(viewTherapist);                     
                     
                     row.idPaciente = json[i].id;
                     
                     row.addEventListener("click", function(){
                     	Alloy.createController('listado', {idPatient: this.idPaciente}).getView();
                     }); 
                     
                               
                     dataArray.push(row);                 
                 };                      
                 $.patientstList.setData(dataArray);                            
           }; 
   };