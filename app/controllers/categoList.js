var args = arguments[0] || {};

var idPaciente = arguments[0].idPatient;

var dataArrayCatego = [];           

var buttonToggle = false;

getTodoList(idPaciente);
$.activityIndicator.show();
loadData();

function loadData(){
	var sendit = Ti.Network.createHTTPClient({ 
	 onerror: function(e){ 
	       Ti.API.debug(e.error); 
	       alert('There was an error during the connection'); 
	       //$.connectionError.show();
	         }, 
	      timeout:3000, 
	  });                      
          //Here you have to change it for your local ip 
      sendit.open('POST', 'http://app.bluecoreservices.com/webservices/getMoodInfo.php');
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
             	arrayTemp = [];
             	arrayTemp.push(json[i].name);
             	arrayTemp.push(json[i].y);
             	
             	dataArrayCatego.push(arrayTemp);
             	/*dataArrayFecha.push(json[i].fechaEnvio);*/
             }
			//$.chartWebView.evalJS('createalert()');             
      };
	
};

$.addDAS.addEventListener("click", function(){
 	var temp = Alloy.createController('DASInstrument', { idPatient: idPaciente }).getView();
});

$.addShort.addEventListener("click", function(){
 	//var temp = Alloy.createController('moodInstrument', { idPatient: idPaciente }).getView();
 	var temp = Alloy.createController('respirationGame', { idPatient: idPaciente }).getView();
});


$.chartWebView.addEventListener('load', function() {
	$.chartWebView.evalJS('crearGrafica(' + JSON.stringify(dataArrayCatego) + ')');
});

$.reintentar.addEventListener("click", function(){
	loadData();	
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
                   $.connectionError.show();
             }, 
          timeout:3000, 
      });                      
      //Here you have to change it for your local ip 
      sendit.open('POST', 'http://app.bluecoreservices.com/webservices/ListCatego.php');
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
             
             //we add the separator
             var separator = Ti.UI.createView({
		        width: Titanium.UI.FILL,
		        height:1,
		        backgroundColor:'#999999',
		        bottom:0,
		 
		    });
		    //we add the first separator
		    $.DASCatego.add(separator);
                                  
             //Insert the JSON data to the table view 
             for( var i=0; i<json.length; i++){ 
             	
                 var row = Titanium.UI.createView({
                 		className: 'elementRow',
                 		layout: 'horizontal',
						height: Titanium.UI.SIZE,
						width: Titanium.UI.FILL
         		 });                                     		
                 
                 var viewResult = Titanium.UI.createView({
                 	className: 'rowResult',
                 	height: Titanium.UI.SIZE,
					width: Titanium.UI.SIZE,
					bubbleParent: true,
					layout: 'composite'
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
					bubbleParent: true,
					layout: 'composite'
                 });
                 
                 var viewDate = Titanium.UI.createView({
                 	className: 'rowDate',
                 	height: Titanium.UI.SIZE,
					width: Titanium.UI.SIZE,
					left: "10sp",
					bubbleParent: true
                 });
                 
                 var resultLabel = Titanium.UI.createLabel({
                 	text: Math.round(json[i].severidad),
                 	font: {
                 		fontSize: '20sp'
                 	},
                 	color: '#FFFFFF'
                 });
                 
                  var dateLabel = Titanium.UI.createLabel({
                 	text: json[i].nombre,
                 	font: {
                 		fontSize: '20sp'
                 	},
                 	color: '#000000'
                 });
                 
                 var separator = Ti.UI.createView({
			        width: Titanium.UI.FILL,
			        height:1,
			        backgroundColor:'#999999',
			        bottom:0,
			 
			    });
                 
                 viewResult.add(resultLabel);
                 viewDate.add(dateLabel);
                 
                 viewResultColor.add(viewResult);
                 
                 row.add(viewResultColor);
                 row.add(viewDate);                     
                           
                 //dataArray.push(row);
                 $.DASCatego.add(row);
                 $.DASCatego.add(separator);                 
             }; 
             $.activityIndicator.hide();                    
             //$.DASListas.add(dataArray);                            
           }; 
   };