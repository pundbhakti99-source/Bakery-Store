let cart = [];
let total = 0;
let isLoggedIn = false;

// 1. AUTHENTICATION LOGIC

// This function switches the visible form inside the modal
function toggleAuthView(view) {
    const signInView = document.getElementById("signInView");
    const signUpView = document.getElementById("signUpView");
    
    if (view === 'signup') {
        signInView.style.display = "none";
        signUpView.style.display = "block";
    } else {
        signInView.style.display = "block";
        signUpView.style.display = "none";
    }
}

// This handles both the Login button and the Register button
function handleAuth(type) {
    let email, name;

    if (type === 'login') {
        email = document.getElementById("loginEmail").value;
        if (!email.includes("@")) {
            alert("Please enter a valid email to sign in.");
            return;
        }
        name = "User"; // Generic name for login
    } else {
        name = document.getElementById("regName").value;
        email = document.getElementById("regEmail").value;
        if (!name || !email.includes("@")) {
            alert("Please fill in all registration fields.");
            return;
        }
    }

    // Mark as logged in and update UI
    isLoggedIn = true;
    document.getElementById("userLink").innerHTML = `<a href="javascript:void(0)">Hi, ${name.split(' ')[0]}</a>`;
    alert(type === 'login' ? "Welcome back!" : "Account created successfully!");
    closeAuthModal();
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
