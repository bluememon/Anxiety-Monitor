var args = arguments[0] || {};

$.TherapistList.open();
getTherapistList();

$.addTherapist.addEventListener("click", function(){
	Alloy.createController('addTherapist').getView();
});

$.reintentar.addEventListener("click", function(){
	getTherapistList();	
});

function getTherapistList () { 
   //function to use HTTP to connect to a web server and transfer the data. 
          var sendit = Ti.Network.createHTTPClient({ 
                 onerror: function(e){ 
                       Ti.API.debug(e.error); 
                       alert('There was an error during the connection'); 
                       $.connectionError.show();
                 }, 
              timeout:3000, 
          });                      
          //Here you have to change it for your local ip 
          sendit.open('GET', 'http://app.bluecoreservices.com/webservices/ListTherapist.php');  
          sendit.send(); 
          //Function to be called upon a successful response 
          sendit.onload = function(){ 
                 var json = JSON.parse(this.responseText); 
                 var json = json.TherapistList; 
                 //if the database is empty show an alert 
                 if(json.length == 0){ 
                        $.therapistList.headerTitle = "The database row is empty"; 
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
                     
                     row.idTerapeuta = json[i].id;
                     
                     row.addEventListener("click", function(){
                     	Alloy.createController('patientList', {idTherapist: this.idTerapeuta}).getView();
                     });                     
                               
                     dataArray.push(row);                 
                 };
				 $.connectionError.hide();                                       
                 $.therapistList.setData(dataArray);                            
           }; 
   };
