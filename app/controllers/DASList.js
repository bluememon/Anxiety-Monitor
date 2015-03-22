var args = arguments[0] || {};

var idPaciente = arguments[0].idPatient;

getTodoList(idPaciente);          

var buttonToggle = false;

$.addDAS.addEventListener("click", function(){
 	var temp = Alloy.createController('DASInstrument', { idPatient: idPaciente }).getView();
	$.tab2.open(temp);
});

$.addShort.addEventListener("click", function(){
 	var temp = Alloy.createController('moodInstrument', { idPatient: idPaciente }).getView();
	$.tab2.open(temp);
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
 
 
 function getTodoList (idPatient) { 
   //function to use HTTP to connect to a web server and transfer the data. 
          var sendit = Ti.Network.createHTTPClient({ 
                 onerror: function(e){ 
                       Ti.API.debug(e.error); 
                       alert('There was an error during the connection'); 
                 }, 
              timeout:3000, 
          });                      
          //Here you have to change it for your local ip 
          sendit.open('POST', 'http://app.bluecoreservices.com/webservices/ListDAS-A.php');
          var params = ({
          	"idPaciente": idPatient,
          });
          sendit.send(params); 
          //Function to be called upon a successful response 
          sendit.onload = function(){ 
                 var json = JSON.parse(this.responseText); 
                 var json = json.DasList; 
                 //if the database is empty show an alert 
                 if(json.length == 0){ 
                 	$.noInfoView.show();       
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
                     
                     var viewResult = Titanium.UI.createView({
                     	className: 'rowResult',
                     	height: Titanium.UI.SIZE,
						width: Titanium.UI.SIZE,
						left: '10sp',
						right: '10sp',
						bubbleParent: true
                     });
                     
                     var viewResultColor = Titanium.UI.createView({
                     	className: 'rowResult',
                     	height: '60sp',
						width: '60sp',
						borderRadius: '30sp',
						backgroundColor: agregarColor(json[i].total),
						top: '10sp',
						bottom: '10sp',
						left: '10sp',
						right: '10sp',
						bubbleParent: true
                     });
                     
                     var viewDate = Titanium.UI.createView({
                     	className: 'rowDate',
                     	height: Titanium.UI.SIZE,
						width: Titanium.UI.SIZE,
						left: "10sp",
						bubbleParent: true
                     });
                     
                     var resultLabel = Titanium.UI.createLabel({
                     	text: json[i].total,
                     	font: {
                     		fontSize: '20sp'
                     	},
                     	color: '#999999'
                     });
                     
                      var dateLabel = Titanium.UI.createLabel({
                     	text: json[i].fechaEnvio,
                     	font: {
                     		fontSize: '20sp'
                     	},
                     	color: '#000000'
                     });
                     
                     viewResult.add(resultLabel);
                     viewDate.add(dateLabel);
                     
                     row.add(viewResultColor);
                     row.add(viewDate);                     
                               
                     dataArray.push(row);                 
                 };                      
                 $.DASList.setData(dataArray);                            
           }; 
   };   