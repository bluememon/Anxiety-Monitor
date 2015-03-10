 getTodoList();          
 
 $.addDAS.addEventListener("click", function(){
	//var win2=Alloy.createController('DAS-List').getView();
 	//win2.open();
 	
 	var temp = Ti.UI.currentWindow;
 	
 	require('views/DAS-Instrument');
});
 
 
 function getTodoList () { 
   //function to use HTTP to connect to a web server and transfer the data. 
          var sendit = Ti.Network.createHTTPClient({ 
                 onerror: function(e){ 
                       Ti.API.debug(e.error); 
                       alert('There was an error during the connection'); 
                 }, 
              timeout:1000, 
          });                      
          //Here you have to change it for your local ip 
          sendit.open('GET', 'http://app.bluecoreservices.com/webservices/ListDAS-A.php');  
          sendit.send(); 
          //Function to be called upon a successful response 
          sendit.onload = function(){ 
                 var json = JSON.parse(this.responseText); 
                 var json = json.DasList; 
                 //if the database is empty show an alert 
                 if(json.length == 0){ 
                        $.DASList.headerTitle = "The database row is empty"; 
                 }                      
                 //Emptying the data to refresh the view 
                 dataArray = [];                      
                 //Insert the JSON data to the table view 
                 for( var i=0; i<json.length; i++){ 
                       var row = Ti.UI.createTableViewRow({ 
                            title: json[i].fechaEnvio, 
                       		
                       });        
                     dataArray.push(row);                 
                 };                      
                 $.DASList.setData(dataArray);                            
           }; 
   };   