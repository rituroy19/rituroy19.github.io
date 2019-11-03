function myFunction4() {
	console.log('here');
   	var newData1 = JSON.parse(localStorage.getItem("shopping-cart"));
   	//console.log(newData1);
   	
   	for(i=0; i<newData1.length; i++){
   		var newDataName = newData1[i][0].name;
   		var newDataGlaze = newData1[i][0].glaze;
   		var newDataCount = newData1[i][0].count;
   		var newDataPrice = newData1[i][0].price;
  	//console.log(newdataglaze);

  	var y1 = document.getElementById("objName");
  	var x1 = document.createElement("text");
  	x1.innerHTML = newDataName + "<br><br>";
  	y1.appendChild(x1);

  	var y2 = document.getElementById("objCount");
  	var x2 = document.createElement("text");
  	x2.innerHTML = newDataCount + "<br><br>";
  	y2.appendChild(x2);

  	var y3 = document.getElementById("objGlaze");
  	var x3 = document.createElement("text");
  	x3.innerHTML = newDataGlaze + "<br><br>";
  	y3.appendChild(x3);

  	var y4 = document.getElementById("objDelete");
  	var x4 = document.createElement("BUTTON");
  	x4.innerHTML = 'Delete';
  	y4.appendChild(x4);
  	x4.addEventListener("click", function(event){
  		console.log('event', event);
  		
  	})

  }
}