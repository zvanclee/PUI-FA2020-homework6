// array that will hold items in shopping-cart
let cartItemArr = [];

// constructor for products - will only be used for cat harness on this assignment
class Product {
  constructor (color, size) {
    this.color = color;
    this.size = size;
  }
}

//Adds item with slected size and color to cart
function addToCart() {
  var colorOptions = document.getElementsByName("color");
  var colorChoice = "";

  for(var i = 0; i < colorOptions.length; i ++) {
    if(colorOptions[i].checked) {
      colorChoice = colorOptions[i].value;
    }
  }

  var size = document.getElementById("productSize").value;

  var catHarness = new Product(colorChoice, size);
  cartItemArr.push(catHarness);
	updateCartItemCount(cartItemArr.length);
  setCartItems();
  alert(catHarness.size + " " + catHarness.color + " cat harness added to cart!");
} // end of addToCart

//Actively updates visiual representation of number of items in cart
function updateCartItemCount(newQuantity) {
  let cartQuantity = document.getElementById("item-count-in-cart");
  cartQuantity.innerHTML = newQuantity;
  cartQuantity.style.display = "inline";
} // end of updateCartItemCount

//Updates visiual representation of number of items in cart on web page load
function displayCartItemCount() {
  let cartQuantity = document.getElementById("item-count-in-cart");
  var loadedCart = localStorage.getItem("order");
  cartItemArr = JSON.parse(loadedCart);
  if(cartItemArr != null) {
    if(cartItemArr.length != 0) {
      cartQuantity.innerHTML = cartItemArr.length;
      cartQuantity.style.display = "inline";
    }
  }
} // end of displayCartItemCount

// set items into cart
function setCartItems() {
  localStorage.setItem("order", JSON.stringify(cartItemArr));
}

//loads and renders cart items on shopping-cart page
function cartItemsLoaded() {
  var loadedCart = localStorage.getItem("order");
	cartItemArr = JSON.parse(loadedCart);

  var newItem = document.getElementById("item");

	for(var i = 0; i < cartItemArr.length; i++) {
    var newItemBox = document.createElement("item");
    newItemBox.id = "item";

	  var item = cartItemArr[i];
	  var itemColor = item.color;
	  var itemSize = item.size;

	  if (itemColor == "strawberry") {
      newItemBox.innerHTML +=
      '<div id="item-image">' +
        '<img id="img-file" src="images/cart-strawberry-harness.png" alt="Strawberry Cat Harness Image"/>' +
      '</div>';
      newItemBox.innerHTML +=
      '<div class="item-details">' +
        '<h3 id="itemName">Cat Harness</h3>' +
        '<p id="itemColor">' + 'Color: ' + itemColor.charAt(0).toUpperCase() + itemColor.slice(1) + '</p>' +
        '<p id="itemSize">' + 'Size: ' + itemSize.charAt(0).toUpperCase() + itemSize.slice(1) + '</p>' +
      '</div>';
      newItemBox.innerHTML += '<div class="item-price">$29.99' + '</div>';
      newItemBox.innerHTML += '<img id="trash-bin" src="images/trash.png" alt="Remove item from cart" onclick="deleteItem(' + i + ')""/>';
	   }
     else if (itemColor == "blackberry") {
       newItemBox.innerHTML +=
       '<div id="item-image">' +
         '<img id="img-file" src="images/cart-blackberry-harness.png" alt="Blackberry Cat Harness Image"/>' +
       '</div>';
       newItemBox.innerHTML +=
       '<div class="item-details">' +
         '<h3 id="itemName">Cat Harness</h3>' +
         '<p id="itemColor">' + 'Color: ' + itemColor.charAt(0).toUpperCase() + itemColor.slice(1) + '</p>' +
         '<p id="itemSize">' + 'Size: ' + itemSize.charAt(0).toUpperCase() + itemSize.slice(1) + '</p>' +
       '</div>';
       newItemBox.innerHTML += '<div class="item-price">$29.99' + '</div>';
       newItemBox.innerHTML += '<img id="trash-bin" src="images/trash.png" alt="Remove item from cart" onclick="deleteItem(' + i + ')""/>';
 	   }
     else if (itemColor == "crazyberry") {
       newItemBox.innerHTML +=
       '<div id="item-image">' +
         '<img id="img-file" src="images/cart-crazyberry-harness.png" alt="Crazyberry Cat Harness Image"/>' +
       '</div>';
       newItemBox.innerHTML +=
       '<div class="item-details">' +
         '<h3 id="itemName">Cat Harness</h3>' +
         '<p id="itemColor">' + 'Color: ' + itemColor.charAt(0).toUpperCase() + itemColor.slice(1) + '</p>' +
         '<p id="itemSize">' + 'Size: ' + itemSize.charAt(0).toUpperCase() + itemSize.slice(1) + '</p>' +
       '</div>';
       newItemBox.innerHTML += '<div class="item-price">$29.99' + '</div>';
       newItemBox.innerHTML += '<img id="trash-bin" src="images/trash.png" alt="Remove item from cart" onclick="deleteItem(' + i + ')""/>';
 	   }
     else if (itemColor == "fireOrange") {
       newItemBox.innerHTML +=
       '<div id="item-image">' +
         '<img id="img-file" src="images/cart-fireOrange-harness.png" alt="Fire Orange Cat Harness Image"/>' +
       '</div>';
       newItemBox.innerHTML +=
       '<div class="item-details">' +
         '<h3 id="itemName">Cat Harness</h3>' +
         '<p id="itemColor">' + 'Color: ' + itemColor.charAt(0).toUpperCase() + itemColor.slice(1) + '</p>' +
         '<p id="itemSize">' + 'Size: ' + itemSize.charAt(0).toUpperCase() + itemSize.slice(1) + '</p>' +
       '</div>';
       newItemBox.innerHTML += '<div class="item-price">$29.99' + '</div>';
       newItemBox.innerHTML += '<img id="trash-bin" src="images/trash.png" alt="Remove item from cart" onclick="deleteItem(' + i + ')""/>';
 	   }
     document.getElementById("cart").appendChild(newItemBox);
	}// end of for-loop
  updateOrderPrice();
}// end of cartItemsLoaded

// Deletes items from cart
// Prompted by clicking trash bin image on shopping cart page
function deleteItem(itemIndex) {
  alert(cartItemArr[itemIndex].size + " " + cartItemArr[itemIndex].color + " cat harness removed from cart!");
	cartItemArr.splice(itemIndex,1);
  saveCartChanges();
  location.reload(); // reloads page to reflect visually indicate deletion of item
}

// Saves changes to cart after items are deleted
function saveCartChanges() {
	localStorage.setItem("order", JSON.stringify(cartItemArr))
}

// Update total price of order
// Displayed on shopping cart page
function updateOrderPrice () {
  let orderTotal = document.getElementById("totalPrice");
  let totalPrice = cartItemArr.length * 29.99;
  totalPrice = totalPrice.toFixed(2);
  orderTotal.innerHTML = "Total: $" + totalPrice;
}

// changes color of image when user selects a new color on product details page
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
