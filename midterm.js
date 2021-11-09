const app = {

initialize: function() {

	document.getElementById("arenaHelp").addEventListener('click', e =>{
		document.getElementById("helplabel").innerHTML = "COMING SOON!";
		console.log("clicked");
	})

	document.getElementById("arenaScribe").addEventListener('click', e =>{
		document.getElementById("scribelabel").innerHTML = "COMING SOON!";
		console.log("clicked");
	})

	document.getElementById("myName").addEventListener('click', e =>{
		console.log("clicked");
		var color = randomColor();

		console.log(color);
		if(color <= 0){
			document.getElementById("myName").classList.remove("changeBlue");
			document.getElementById("myName").classList.add("changeRed");
			console.log("Red");
		}
		else if(color <= 1){
			document.getElementById("myName").classList.remove("changeRed");
			document.getElementById("myName").classList.add("changeBlue");
			console.log("blue");
		}
		else {
			document.getElementById("myName").classList.remove("changeRed");
			document.getElementById("myName").classList.remove("changeBlue");
			console.log("black");
		}
		
	})
	

	function randomColor(){
		return Math.floor(Math.random()*3)
	}

	
}
}