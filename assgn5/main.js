console.log('here');
//declaring global variable
var z = 0;

//function to update page based on glaze selection
function myFunction1() {
  var x = document.getElementById("mySelect1").value;
  document.getElementById("demo1").innerHTML = "You selected: " + x; //selection obtained

  if (x==="none")
  	document.getElementById("myImg").src = "walnut.jpg";
  else if (x==="sugar-milk")
  	document.getElementById("myImg").src = "walnut-sugar-milk.jpg";
  else if (x==="vanilla-milk")
  	document.getElementById("myImg").src = "walnut-vanilla-milk.jpg";
  else if (x==="double-chocolate")
  	document.getElementById("myImg").src = "walnut-double-chocolate.jpg"; //based on value of x, different images are updated
}

//function to update page based on quantity selection
function myFunction2() {
  var y = document.getElementById("mySelect2").value;
  document.getElementById("demo2").innerHTML = "You selected: " + y; //selection obtained
  z = y;
}

//function to update page based on clicking add to cart button
function myFunction3() {
  //document.getElementById("demo3").innerHTML = "Your selection is added to cart";
  alert("Your selection is added to cart"); //updating the page with message
  console.log('1');
}


if(! count){
	var count =0;
	var number =0;
}

// function to update the cart with the number of items
function incrementCount(){
	count++;
	number = number + parseInt(z); //convert z from string to integer 
	//document.getElementById("demo3").innerHTML = "Number of items in your cart: " + count;
	var w = document.getElementById("cart-number");
	w.innerHTML = "(" + number + ")"; //paste actual item count
	//document.getElementById("cart-number").innerHTML = "(" + number +")";
}