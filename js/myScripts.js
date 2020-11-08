// product details page
// color customization function
// -pre: page always loads on 'strawberry' color
// -post: color of images and text by color field will reflect newly selected color
function changeColor(newColor) {
  let newProductImg = document.getElementById("product-img");
  let colorFieldText = document.getElementById("color-text");

  if(newColor == "strawberry") {
    newProductImg.src = "images/strawberry-harness.png";
    colorFieldText.textContent="Strawberry";
  }
  else if (newColor == "blackberry") {
    newProductImg.src = "images/blackberry-harness.png";
    colorFieldText.textContent="Blackberry";
  }
  else if (newColor == "crazyberry") {
    newProductImg.src = "images/crazyberry-harness.png";
    colorFieldText.textContent="Crazyberry";
  }
  else if (newColor == "fireOrange") {
    newProductImg.src = "images/fireOrange-harness.png";
    colorFieldText.textContent="Fire Orange";
  }
}

var cartItemArr = [];
var cartItemArrCopy = [];

// product class for cat harness
class Product {
  constructor (color, size) {
    this.color = color;
    this.size = size;
  }
}

function addToCart() {
  var colorOptions = document.getElementsByName("color");
  var colorChoice = "none";

  for(var i = 0; i < colorOptions.length; i ++) {
    if(colorOptions[i].checked) {
      colorChoice = colorOptions[i].value;
    }
  }

  var size = document.getElementById("productSize").value;

  var catHarness = new Product(colorChoice, size);
  cartItemArr.push(catHarness);

  console.log(cartItemArr);
	updateCartItemCount(cartItemArr.length)
} // end of addToCart

function updateCartItemCount(newQuantity) {
  let cartQuantity = document.getElementById("item-count-in-cart");
  cartQuantity.innerHTML = newQuantity;
  cartQuantity.style.display = "inline";
} // end of updateCartItemCount

function loadCartItems() {
  localStorage.setItem("order", JSON.stringify(cartItemArr));
}

function cartItemsLoaded() {
  var loadedCart = localStorage.getItem("order");
	cartItemArrCopy = JSON.parse(loadedCart);

  console.log(cartItemArrCopy);

  // var listOfProducts = document.getElementById('listOfProducts');
  //
	// for(var i = 0; i < cartItemArrCopy.length; i++) {
	//    var product = cartItemArrCopy[i]
	//    var productColor = product.color
	//    var productSize = product.size
	//    if (flowerType == 'rose') {
	// 	listOfProducts.innerHTML += '<div class="roses">Type: ' + flowerType + ' Color: ' + flowerColor + ' Thorns: ' + flowerThorns + '</div>'
	// 	listOfProducts.innerHTML += '<span onclick="deleteProduct(' + i + ')">[click to delete]</span>'
	// 	listOfProducts.innerHTML += '<br /><br /><br />'
	//    }
	//    else {
	// 	listOfProducts.innerHTML += '<div onclick="wow()">Type: ' + flowerType + ' Color: ' + flowerColor + ' Thorns: ' + flowerThorns + '</div>'
	// 	listOfProducts.innerHTML += '<span onclick="deleteProduct(' + i + ')">[click to delete]</span>'
	// 	listOfProducts.innerHTML += '<br /><br /><br />'
	//    }
	// }// end of for-loop
}// end of cartItemsLoaded
