//testing console
console.log('here');

//declaring some variables used below
var z = 0;
var u= 0;

//function to update user on glaze choices by calling it 'onchange'
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

//function to update user on quantity choice by calling it 'onchange'
function myFunction2() {
  var y = document.getElementById("mySelect2").value;
  document.getElementById("demo2").innerHTML = "You selected: " + y;
  z = y;
  u = y*8;
  //console.log(u);
}

//Add to cart, update storage
function myFunction3() {
  alert("Your selection is added to cart");
  //console.log('1');
  var myData = JSON.parse(localStorage.getItem("shopping-cart"))||[];
  var newData =
    [{'name': 'Walnut Cinnamon Roll','glaze': document.getElementById("mySelect1").value,
      'count': document.getElementById("mySelect2").value,'price': u
    }];
  myData.push(newData);
  localStorage.setItem("shopping-cart", JSON.stringify(myData));
  var newData1 = JSON.parse(localStorage.getItem("shopping-cart"));
  console.log(newData1);
  //console.log(newData1[0][0].glaze);
}

//updating cart number details without storage
function myFunction5(){
  var countData = JSON.parse(localStorage.getItem("shopping-cart"));
  var totalCount = 0;
  if (countData.length == 0){
    totalCount = 0;
    var r = document.getElementById("cart-number");
    r.innerHTML = "(" + totalCount + ")";
  }
  else{
    for(i=0; i<countData.length; i++){
      totalCount = totalCount + parseInt(countData[i][0].count);
      //console.log(totalCount);
      var w = document.getElementById("cart-number");
      w.innerHTML = "(" + totalCount + ")";
    }
  }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("photo");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// if(! count){
// 	var count =0;
// 	var number =0;
// }
// function incrementCount(){
// 	count++;
// 	number = number + parseInt(z);
// 	//document.getElementById("demo3").innerHTML = "Number of items in your cart: " + count;
// 	var w = document.getElementById("cart-number");
// 	w.innerHTML = "(" + number + ")";
// 	//document.getElementById("cart-number").innerHTML = "(" + number +")";
// }