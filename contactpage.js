const app = {

initialize: function() {
	
	document.getElementById('submitButton').addEventListener('click', e => {
		var email = document.getElementById("email").value;
		
		if (validateEmail(document.getElementById("email").value)){
            document.getElementById("email").classList.remove("inputEmpty");
            document.getElementById("submitButton").style.display = "none";
            console.log("hey");
          }

        else{
        	document.getElementById("email").classList.add("inputEmpty");
        }

	})

	function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
}