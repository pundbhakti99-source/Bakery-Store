
let cart = JSON.parse(localStorage.getItem("golden_whisk_cart")) || [];
let activeItem = null;

/**
 * 1. PERSISTENCE & UI UPDATES
 */
function saveCart() {
    localStorage.setItem("golden_whisk_cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cartCount").innerText = count;
}

/**
 * 2. CART ACTIONS
 */
function addToCart(isBuyNow) {
    if (!activeItem) return;

    const priceText = document.getElementById("m-price").innerText.replace('₹', '');
    const priceNum = parseInt(priceText);
    const weight = document.querySelector('.w-btn.active').innerText;
    const itemName = `${activeItem.name} (${weight})`;

    // Check if item already exists in cart to increment quantity
    const existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: Date.now(), // Unique ID for tracking
            name: itemName,
            price: priceNum,
            quantity: 1,
            img: activeItem.img
        });
    }

    saveCart();
    
    if(isBuyNow) {
        // Open sidebar if not already open
        if(!document.getElementById("cartSidebar").classList.contains("open")) toggleCart();
    } else {
        closeModal();
        // Feedback to user
        alert("Added to basket!");
    }
}

function changeQty(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    renderCart();
}

/**
 * 3. RENDER CART & CALCULATE TOTALS
 */
function renderCart() {
    const list = document.getElementById("cartItemsList");
    const totalEl = document.getElementById("cartTotal");
    const paypalContainer = document.getElementById("paypal-button-container");
    let total = 0;

    if (cart.length === 0) {
        list.innerHTML = `<div class="empty-msg" style="text-align:center; padding:40px;">
                            <p style="color:#888;">Your basket is empty.</p>
                          </div>`;
        totalEl.innerText = "₹0";
        if(paypalContainer) paypalContainer.innerHTML = ""; 
        return;
    }

    list.innerHTML = cart.map((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `
            <div class="cart-item" style="display:flex; align-items:center; gap:12px; margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:10px;">
                <img src="${item.img}" style="width:55px; height:55px; border-radius:8px; object-fit:cover;">
                <div style="flex:1;">
                    <h4 style="font-size:0.9rem; margin:0;">${item.name}</h4>
                    <p style="font-size:0.8rem; color:#82937E; font-weight:bold; margin:4px 0;">₹${item.price}</p>
                </div>
                <div class="qty-controls" style="display:flex; align-items:center; gap:8px;">
                    <button onclick="changeQty(${index}, -1)" style="border:1px solid #ddd; background:#fff; width:24px; height:24px; cursor:pointer;">-</button>
                    <span style="font-size:0.9rem; min-width:12px; text-align:center;">${item.quantity}</span>
                    <button onclick="changeQty(${index}, 1)" style="border:1px solid #ddd; background:#fff; width:24px; height:24px; cursor:pointer;">+</button>
                </div>
            </div>
        `;
    }).join('');

    totalEl.innerText = `₹${total}`;
    
    // Initialize PayPal whenever cart renders
    if(typeof initPayPalButton === "function") {
        initPayPalButton(total);
    }
}

/**
 * 4. INITIALIZATION & UI HANDLERS
 */
window.onload = () => {
    // Hide menu by default, show Hero
    const menu = document.getElementById("menu");
    if(menu) menu.classList.add("hidden");
    
    renderProducts(products); // Load grid
    updateCartCount();        // Sync from LocalStorage
    renderUserNav();          // Sync Login state
};

// Toggle Sidebar
function toggleCart() {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");
    
    if(sidebar) {
        sidebar.classList.toggle("open");
        overlay.style.display = sidebar.classList.contains("open") ? "block" : "none";
        renderCart();
    }
}

/**
 * 5. POST-PURCHASE HANDLING
 */
function handleOrderSuccess(details) {
    cart = [];
    saveCart();
    
    const sidebar = document.getElementById("cartSidebar");
    if(sidebar.classList.contains("open")) toggleCart();
    
    document.getElementById("successOverlay").style.display = "flex";
    
    // Optional: Redirect to a confirmation page
    // setTimeout(() => { window.location.href = "confirmation.html"; }, 3000);
}

function setPayment(method, event) {
    // Remove active class from all buttons
    document.querySelectorAll('.p-method').forEach(btn => btn.classList.remove('active'));
    // Add to clicked
    event.target.classList.add('active');
    
    // Toggle detail views
    const upi = document.getElementById("upiDetail");
    const card = document.getElementById("cardDetail");
    
    if(method === 'UPI') {
        upi.style.display = "block";
        card.style.display = "none";
    } else if(method === 'Card') {
        upi.style.display = "none";
        card.style.display = "block";
    } else {
        upi.style.display = "none";
        card.style.display = "none";
    }
}

function checkPin() {
    const pin = document.getElementById("pinInput").value;
    const status = document.getElementById("pinStatus");
    if(pin.length === 6) {
        status.innerText = "✓ Delivery Available";
        status.style.color = "#82937E";
    } else {
        status.innerText = "× Invalid Pincode";
        status.style.color = "red";
    }
}

function closeSuccess() {
    document.getElementById("successOverlay").style.display = "none";
    window.location.reload(); // Refresh to clear state
}

// Ensure products are rendered on load
function renderProducts(items) {
    const grid = document.getElementById("productGrid");
    if(!grid) return;
    grid.innerHTML = items.map(p => `
        <div class="p-card" onclick="openModal('${p.name}')">
            <img src="${p.img}">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
        </div>
    `).join('');
}
