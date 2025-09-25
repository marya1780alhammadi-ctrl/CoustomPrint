let cartCount = 0;

function addToCart(item) {
  cartCount++;
  document.getElementById("cart").innerText = "🛒 Cart: " + cartCount + " items";
  alert(item + " added to cart!");
}
