let cart = [];
let total = 0;
let isLoggedIn = false;

// 1. AUTHENTICATION LOGIC
function openAuthModal() {
    document.getElementById("authModal").style.display = "block";
}

function closeAuthModal() {
    document.getElementById("authModal").style.display = "none";
}

function handleAuth() {
    const email = document.getElementById("email").value;
    if (email.includes("@")) {
        isLoggedIn = true;
        document.getElementById("userLink").innerHTML = `<a href="javascript:void(0)">Hi, User</a>`;
        alert("Success! You are now signed in.");
        closeAuthModal();
    } else {
        alert("Please enter a valid email address.");
    }
}

// 2. PRODUCT DETAIL MODAL
function openProductDetail(name, price, desc, imgUrl) {
    const modal = document.getElementById("productModal");
    const body = document.getElementById("modalBody");
    
    body.innerHTML = `
        <img src="${imgUrl}" alt="${name}">
        <h2 style="font-family: 'Cormorant Garamond', serif;">${name}</h2>
        <p style="margin: 15px 0; color: #666; line-height: 1.6;">${desc}</p>
        <p class="price" style="font-size: 1.6rem;">₹${price.toFixed(2)}</p>
        <button class="checkout-btn" onclick="addToCart('${name}', ${price}); closeProductModal();">Add to Cart</button>
    `;
    modal.style.display = "block";
}

function closeProductModal() {
    document.getElementById("productModal").style.display = "none";
}

// 3. CART LOGIC (Rupees)
function toggleCart() {
    document.getElementById("cartDrawer").classList.toggle("open");
}

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCartUI();
    
    // Automatically open cart to show the added item
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

// 4. SEARCH & FILTER
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", function () {
    const value = searchInput.value.toLowerCase();
    const products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        const title = product.querySelector("h3").innerText.toLowerCase();
        product.style.display = title.includes(value) ? "block" : "none";
    });
});

function filterCategory(category, event) {
    const products = document.querySelectorAll(".product-card");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    products.forEach(product => {
        if (category === "all" || product.getAttribute("data-category") === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

function proceedToCheckout() {
    if(cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    if(!isLoggedIn) {
        alert("Please Sign In to complete your purchase.");
        openAuthModal();
        return;
    }
    alert(`Order of ₹${total.toFixed(2)} received! Redirecting to payment...`);
}

// Global click handler to close modals
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}
