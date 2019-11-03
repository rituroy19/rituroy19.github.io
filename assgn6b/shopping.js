//declaring some variables to be used below
var totalPrice = 0;

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

//function triggered on page load - to show shopping cart items and remove from cart
function myFunction4(){

  //getting data from storage
  var newData1 = JSON.parse(localStorage.getItem("shopping-cart"));
  //console.log(newData1);

  for(i=0; i<newData1.length; i++){
    //separating each component
    var newDataName = newData1[i][0].name;
    var newDataGlaze = newData1[i][0].glaze;
    var newDataCount = newData1[i][0].count;
    var newDataPrice = newData1[i][0].price;
    //console.log(newDataGlaze);

    //creating table rows to display shopping cart
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var x = document.createElement("BUTTON");
      x.innerHTML = 'Remove';
    cell1.innerHTML = newDataName;
    cell2.innerHTML = newDataCount;
    cell3.innerHTML = newDataGlaze;
    cell4.innerHTML = '$'+newDataPrice;
    cell5.appendChild(x);

    //updating cart total
    totalPrice = totalPrice + newDataPrice;
    document.getElementById("total-price").innerHTML = "Total Price: $" + totalPrice;
    
    //removing items from cart function on click of remove button
    x.addEventListener("click", function(event){
      //sourcing index to delete row
      var buttonClicked = event.target;
      var index = buttonClicked.parentElement.parentElement.rowIndex;
      //console.log(index);

      //Getting price value of the deleted item
      var valuePrice = document.getElementById("myTable").rows[index].cells[3].innerHTML;
      //console.log(valuePrice);
      var ValuePriceActual = valuePrice.substr(1);
      //console.log(ValuePriceActual);
      
      //removing selection from HTML shopping cart
      buttonClicked.parentElement.parentElement.remove();
      
      //adjusting cart total
      totalPrice = totalPrice - ValuePriceActual;
      document.getElementById("total-price").innerHTML = "Total Price: $" + totalPrice;
      
      //updating storage
      var items = JSON.parse(localStorage.getItem("shopping-cart"));
      console.log(items);
      
      //price and quantity adjustment
      var n = items.length;
      //console.log(n);
      var m = n - index - 1;
      //console.log(m);
      
      //deleting the selection from storage
      for (i=0; i< items.length; i++) {
           if (i == m) {
            items.splice(i, 1);
          }

      //updating storage complete
      balanceitems = JSON.stringify(items);
      localStorage.setItem("shopping-cart", balanceitems);
      //console.log(balanceitems);
      }

      myFunction5();
      });
  }

}