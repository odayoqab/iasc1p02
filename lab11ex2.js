function words(){

	var adj = new Array();
	adj=["big", "small", "tall", "fat", "cool"];
	var num1 = Math.floor(Math.random()*5);

	var noun = new Array();
	noun=["cat", "dog", "boy", "girl", "house"];
	var num2 = Math.floor( Math.random()*5);

	document.getElementById("output").innerHTML= ("What a "+ adj[num1]+ " "+ noun[num2]);
}
