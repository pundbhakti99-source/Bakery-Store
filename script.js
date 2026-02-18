let cart = [];
let total = 0;

// 1. SEARCH FUNCTIONALITY
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", function () {
    const value = searchInput.value.toLowerCase();
    const products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        const title = product.querySelector("h3").innerText.toLowerCase();
        product.style.display = title.includes(value) ? "block" : "none";
    });
});

// 2. CATEGORY FILTERING
function filterCategory(category, event) {
    const products = document.querySelectorAll(".product-card");
    const buttons = document.querySelectorAll(".filter-btn");

    // Update active button UI
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    // Show/Hide products
    products.forEach(product => {
        if (category === "all" || product.getAttribute("data-category") === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// 3. CART DRAWER TOGGLE
function toggleCart() {
    document.getElementById("cartDrawer").classList.toggle("open");
}

// 4. ADD TO CART LOGIC (Lab 5: Session/State Handling)
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCartUI();
    
    // Optional: Open cart drawer automatically when adding
    if(!document.getElementById("cartDrawer").classList.contains("open")) {
        toggleCart();
    }
}
function applyDiscount() {
    const code = prompt("Enter Discount Code (Try: WELCOME10)");
    if (code === "WELCOME10") {
        total = total * 0.9; // 10% off
        updateCartUI();
        alert("Discount applied!");
    } else {
        alert("Invalid code.");
    }
}

function updateCartUI() {
    const cartCount = document.getElementById("cartCount");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    // Update Number of Items in Navbar
    cartCount.innerText = cart.length;

    // Update Drawer Content
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-msg">Your basket is empty.</p>';
    } else {
        cartItems.innerHTML = cart.map((item, index) => `
            <div style="display:flex; justify-content:space-between; margin-bottom:15px; border-bottom:1px solid #f9f9f9; padding-bottom:5px;">
                <span>${item.name}</span>
                <strong>$${item.price.toFixed(2)}</strong>
            </div>
        `).join('');
    }

    // Update Total Price
    cartTotal.innerText = `$${total.toFixed(2)}`;
}

// 5. CHECKOUT PLACEHOLDER (Prep for Lab 3)
function proceedToCheckout() {
    if(cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Proceeding to Checkout! In Lab 3, we will connect this to a PayPal/Stripe Sandbox.");
}

