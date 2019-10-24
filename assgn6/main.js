console.log('here');

var z = 0;

function myFunction1() {
  var x = document.getElementById("mySelect1").value;
  document.getElementById("demo1").innerHTML = "You selected: " + x;

  if (x==="none")
  	document.getElementById("myImg").src = "walnut.jpg";
  else if (x==="sugar-milk")
  	document.getElementById("myImg").src = "walnut-sugar-milk.jpg";
  else if (x==="vanilla-milk")
  	document.getElementById("myImg").src = "walnut-vanilla-milk.jpg";
  else if (x==="double-chocolate")
  	document.getElementById("myImg").src = "walnut-double-chocolate.jpg";
}

function myFunction2() {
  var y = document.getElementById("mySelect2").value;
  document.getElementById("demo2").innerHTML = "You selected: " + y;
  z = y;
}

function myFunction3() {
  //document.getElementById("demo3").innerHTML = "Your selection is added to cart";
  alert("Your selection is added to cart");
  console.log('1');
}
if(! count){
	var count =0;
	var number =0;
}

function incrementCount(){
	count++;
	number = number + parseInt(z);
	//document.getElementById("demo3").innerHTML = "Number of items in your cart: " + count;
	var w = document.getElementById("cart-number");
	w.innerHTML = "(" + number + ")";
	//document.getElementById("cart-number").innerHTML = "(" + number +")";
}