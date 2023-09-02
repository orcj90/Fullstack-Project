
// VARS
const cartContent = document.querySelector("#cart-content");
const totalPriceContainer = document.querySelector("#total-price");


export function getLSContent() {
  // get contents from local storage.
  // if nothing is there, create an empty array
  const lsContent = JSON.parse(localStorage.getItem("products")) || [];
  calculateTotal(lsContent)
  return lsContent;
}

export function setLSContent(lsContent) {
  // save content inside local storage
  localStorage.setItem("products", JSON.stringify(lsContent));
  calculateTotal(lsContent)
}

function calculateTotal(lsContent) {
    // get the index of the product item to remove
    // inside the local storage content array
    let sum = 0
    lsContent.forEach(function (product, i) {
        if (product.id) {
            sum += (product.price * product.qty)
            
        }
    });
    localStorage.setItem("totalprice", JSON.stringify(sum));
    console.log(sum)
}


export function saveProduct(clickedBtn, prodName, prodImage, prodPrice, prodQty) {
  // save selected product in local storage and display it in the cart together

  let isProductInCart = false;

  // // get local storage array
  const lsContent = getLSContent();
  // to avoid user adds the same course twice, check
  // the product is not in LS already before adding it
  lsContent.forEach(function (product) {
    if (product.id === clickedBtn) {
      // alert("This course is already in your cart.");
      isProductInCart = true;
    }
  });

  // only if the product is not already in the cart,
  // create an object representing selected product info
  // and push it into local storage array
  if (!isProductInCart) {
    lsContent.push({
      id: clickedBtn,
      image: prodImage,
      name: prodName,
      price: prodPrice,
      qty: prodQty
    });
  }
  // add product into local storage
  setLSContent(lsContent);
  // update the display of courses in the shopping cart
  // displayProducts();
}

function checkout() {
  // checkout: just clear the cart
  // after user confirms the checkout process
  const cartProducts = cartContent.querySelector("tbody").innerHTML;
  // if (cartProducts !== "" && confirm("Are you sure you want to checkout?")) {
  if (cartProducts !== "") {
    // clearCart();
  } else {
    return;
  }
}