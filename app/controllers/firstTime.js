var args = arguments[0] || {};

$.userNameVerifier.open();

$.closeModal.addEventListener("click", function(){
		$.InformationModal.hide();
});

$.verificarButton.addEventListener("click", function(){
	userVerify($.username.value, $.password.value);
});

function userVerify(user, pswd) { 
   //function to use HTTP to connect to a web server and transfer the data. 
          var sendit = Ti.Network.createHTTPClient({ 
                 onerror: function(e){ 
                       Ti.API.debug(e.error); 
                       alert('There was an error during the connection'); 
                 }, 
              timeout:1000, 
          });                      
          if (user != '' && pswd != '')
          {
	          var params = {
	            username: user,
	            password: Ti.Utils.md5HexDigest(pswd)
	      	  };
	          sendit.open('POST', 'http://app.bluecoreservices.com/webservices/loginCheck.php');  
	          sendit.send(params); 
	          //Function to be called upon a successful response 
	          sendit.onload = function(){ 
	                var json = this.responseText;
				    var response = JSON.parse(json);
				    if (response.logged == true)
				    {
				        Ti.App.Properties.setString('name', response.firstName);
				        Ti.App.Properties.setInt('userType', response.type);
				        Ti.App.Properties.setInt('id', response.id);
				        Ti.App.Properties.setString('username', $.username.value);
				        Ti.App.Properties.setString('password', $.password.value);
				        
				        alert("username: " + username + " Password: " + password);
				        
				        alert('checando arrowdb');
				        //now to check for arrowDB usename and password if exist												
					    //Create a Default User in Cloud Console, and login
					    Cloud.Users.login({
					        login: $.username.value,
					        password: $.password.value
					    }, function (e) {
				    	
				    		alert('comenzando chequeo de usuario');
				       		if (e.success) {
				       			alert('si paso el login');
				            	defaultSubscribe();
				            	//now we go to the get pin page
		        				Alloy.createController('enterPIN').getView();
			        		} 
				        	else {
				        		alert('no existe el usuario');
				            	alert('Error: ' +((e.error && e.message) || JSON.stringify(e)));
				            	
				            	Cloud.Users.create({
								    username: $.username.value,
								    password: $.password.value,
								    password_confirmation: $.password.value
								}, function (e) {
								    if (e.success) {
								    	alert('se creo el nuevo usuario');
								        defaultSubscribe();
								        //now we go to the get pin page
			        					Alloy.createController('enterPIN').getView();
								    } else {
								    	alert('hubo un error creando el usuario');
								        alert('Error:\n' +
								            ((e.error && e.message) || JSON.stringify(e)));
								    }
								});
			            	}
				        });
				    }
				    else
				    {
				        alert(response.message);
				    }                        
	           };
           }
           else {
           		alert('El nombre de usuario y la contraseña son requeridos');
           } 
   };