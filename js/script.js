const cart = [];
const cartCountElement = document.getElementById("cart-count");
const cartItemsList = document.getElementById("cart-items");
const cartModal = new bootstrap.Modal(document.getElementById("cartModal"));

function updateCart() {
    cartCountElement.innerText = cart.length;

    // Clear the cart items list
    cartItemsList.innerHTML = "";

    // Populate the cart items list
    cart.forEach((item) => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
    });
}

document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
        const name = button.getAttribute("data-name");
        const price = parseFloat(button.getAttribute("data-price"));

        cart.push({ name, price });
        updateCart();
    });
});

// Open the cart modal when clicking the cart icon
document.getElementById("cart-icon").addEventListener("click", () => {
    cartModal.show();
});

document.querySelector("#cartModal .modal-footer .btn-primary").addEventListener("click", () => {
  // Implement your checkout logic here, e.g., redirect to a checkout page
  if (cart.length === 0) {
    alert("Your cart is empty. Add items to the cart before checking out.");
    return;
}
const totalPrice = cart.reduce((total, item) => total + item.price, 0);

// You can perform further actions here, such as:
// 1. Display a confirmation message with the total price.
alert(`Total Price: $${totalPrice.toFixed(2)}`);

// 2. Clear the cart
cart.length = 0;
updateCart(); // Update the cart display

});

// Function to handle the "Close" button click
document.querySelector("#cartModal .modal-footer .btn-secondary").addEventListener("click", () => {
  // Close the cart modal
  cartModal.hide();

});



const defaultCategory = "fry-items"; // showing category by default
toggleCategoryVisibility(defaultCategory);

document.getElementById('cake-btn').addEventListener('click' , function(){
     toggleCategoryVisibility('cake-items');
});

document.getElementById('bakery-btn').addEventListener('click' , function(){
    toggleCategoryVisibility('bakery-items');
});

document.getElementById('nimco-btn').addEventListener('click' , function(){
    toggleCategoryVisibility('nimco-items');
});

document.getElementById('fry-btn').addEventListener('click' , function(){
    toggleCategoryVisibility('fry-items');
});

function toggleCategoryVisibility(categoryId){
    const categories = document.querySelectorAll('.category');
    categories.forEach(function(category){
        category.style.display="none";
    });

    const selectedCategory = document.getElementById(categoryId);
    selectedCategory.style.display = "block";
}


