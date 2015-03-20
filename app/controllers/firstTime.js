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
				        
				        Alloy.createController('enterPIN').getView();
				        
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