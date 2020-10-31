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

// shows message that item has been added to cart
function addItemToCartMessage() {
  alert("Item added to cart!")
}

function addItemCartCount() {
  let displayedItemCount = document.getElementById("item-count-in-cart");
  let currItemCount = displayedItemCount.value;
  currItemCount = Number(currItemCount[0]);
  let newItemCount = currItemCount + 1;
  newItemCount = currItemCount.toString();
  let newCount = document.createTextNode(newItemCount);
  displayedItemCount.appendChild(newCount);
  document.getElementById("item-count-in-cart").style.display = "inline";
}
