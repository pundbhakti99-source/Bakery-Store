let cart = [];
let total = 0;
let isLoggedIn = false;

// --- 1. SIGN IN LOGIC ---
function openAuthModal() {
    document.getElementById("authModal").style.display = "block";
}

function closeAuthModal() {
    document.getElementById("authModal").style.display = "none";
}

function handleAuth() {
    const email = document.getElementById("email").value;
    if (email) {
        isLoggedIn = true;
        document.getElementById("userLink").innerHTML = `<a href="#">Hi, User</a>`;
        alert("Logged in successfully!");
        closeAuthModal();
    } else {
        alert("Please enter an email.");
    }
}

// --- 2. PRODUCT DETAIL MODAL ---
function openProductDetail(name, price, desc, imgUrl) {
    const modal = document.getElementById("productModal");
    const body = document.getElementById("modalBody");
    
    body.innerHTML = `
        <img src="${imgUrl}" alt="${name}">
        <h2>${name}</h2>
        <p style="margin: 15px 0; color: #666;">${desc}</p>
        <p class="price" style="font-size: 1.5rem;">₹${price.toFixed(2)}</p>
        <button class="checkout-btn" onclick="addToCart('${name}', ${price}); closeProductModal();">Add to Cart</button>
    `;
    modal.style.display = "block";
}

function closeProductModal() {
    document.getElementById("productModal").style.display = "none";
}

// --- 3. UPDATED CART (Rupees) ---
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCartUI();
    if(!document.getElementById("cartDrawer").classList.contains("open")) {
        toggleCart();
    }
}

function updateCartUI() {
    const cartCount = document.getElementById("cartCount");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    cartCount.innerText = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-msg">Your basket is empty.</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div style="display:flex; justify-content:space-between; margin-bottom:15px; border-bottom:1px solid #f9f9f9; padding-bottom:5px;">
                <span>${item.name}</span>
                <strong>₹${item.price.toFixed(2)}</strong>
            </div>
        `).join('');
    }
    cartTotal.innerText = `₹${total.toFixed(2)}`;
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}

// --- 4. SEARCH & FILTER (Keep existing logic) ---
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", function () {
    const value = searchInput.value.toLowerCase();
    const products = document.querySelectorAll(".product-card");
    products.forEach(product => {
        const title = product.querySelector("h3").innerText.toLowerCase();
        product.style.display = title.includes(value) ? "block" : "none";
    });
});
