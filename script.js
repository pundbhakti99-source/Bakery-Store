// 1. INITIALIZATION (Fixed the localStorage reset bug)
let cart = JSON.parse(localStorage.getItem("golden_whisk_cart")) || [];
let activeItem = null;
let isSignUpMode = false;
let selectedPayment = 'UPI';

// 2. CORE WINDOW LOAD
window.onload = () => {
    // Hide the menu section by default
    const menu = document.getElementById("menu");
    if(menu) menu.classList.add("hidden");
    
    // Load the products (Assumes products array is available from product.js)
    if (typeof products !== 'undefined') {
        renderProducts(products);
    }
    
    updateCartCount();
    renderUserNav(); 
};

// 3. STOREFRONT & NAVIGATION
function showStorefront(isSearching) {
    const hero = document.querySelector(".hero");
    const menu = document.getElementById("menu");
    if (isSearching) {
        hero.classList.add("hidden");
        menu.classList.remove("hidden");
    } else {
        hero.classList.remove("hidden");
        menu.classList.add("hidden");
    }
}

function handleSearch() {
    const term = document.getElementById("searchInput").value.toLowerCase();
    if (term.length > 0) {
        showStorefront(true);
        const matches = products.filter(p => 
            p.name.toLowerCase().includes(term) || p.cat.toLowerCase().includes(term)
        );
        renderProducts(matches, term);
    } else {
        showStorefront(false);
    }
}

function jumpToCategory(cat) {
    showStorefront(true);
    filterCategory(cat);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterCategory(cat, event) {
    document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
    if(event) event.target.classList.add('active');
    else {
        const btn = document.getElementById(`btn-${cat}`);
        if(btn) btn.classList.add('active');
    }
    const filtered = (cat === 'all') ? products : products.filter(p => p.cat === cat);
    renderProducts(filtered);
}

// 4. PRODUCT MODAL LOGIC
function openModal(name) {
    const p = products.find(item => item.name === name);
    if (!p) return;
    activeItem = p;

    document.getElementById("m-name").innerText = p.name;
    document.getElementById("m-img").src = p.img;
    document.getElementById("m-price").innerText = `₹${p.price}`;
    document.getElementById("m-desc").innerText = p.desc;

    const modal = document.getElementById("productModal");
    modal.style.display = "block";
    document.body.style.overflow = "hidden";

    // Recommendations
    const recGrid = document.getElementById("recGrid");
    const suggestions = products
        .filter(item => item.cat === p.cat && item.name !== p.name)
        .slice(0, 5);

    recGrid.innerHTML = suggestions.map(s => `
        <div class="rec-item" onclick="openModal('${s.name.replace(/'/g, "\\'")}')">
            <img src="${s.img}" alt="${s.name}">
            <p>${s.name}</p>
        </div>
    `).join('');
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// 5. CART SYSTEM
function saveCart() {
    localStorage.setItem("golden_whisk_cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cartCount").innerText = count;
}

function addToCart(isBuyNow) {
    const priceText = document.getElementById("m-price").innerText.replace('₹', '');
    const priceNum = parseInt(priceText);
    const weightBtn = document.querySelector('.w-btn.active');
    const weight = weightBtn ? weightBtn.innerText : "Standard";
    const itemName = `${activeItem.name} (${weight})`;

    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: Date.now(),
            name: itemName,
            price: priceNum,
            quantity: 1,
            img: activeItem.img
        });
    }

    saveCart();
    if(isBuyNow) {
        if(!document.getElementById("cartSidebar").classList.contains("open")) toggleCart();
    } else {
        closeModal();
    }
}

function toggleCart() {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");
    sidebar.classList.toggle("open");
    overlay.style.display = sidebar.classList.contains("open") ? "block" : "none";
    renderCart();
}

function renderCart() {
    const list = document.getElementById("cartItemsList");
    const totalEl = document.getElementById("cartTotal");
    const payContainer = document.getElementById("paypal-button-container");
    let total = 0;

    if (cart.length === 0) {
        list.innerHTML = `<p style="text-align:center; padding:20px;">Your basket is empty.</p>`;
        totalEl.innerText = "₹0";
        if(payContainer) payContainer.innerHTML = ""; 
        return;
    }

    list.innerHTML = cart.map((item, index) => {
        total += (item.price * item.quantity);
        return `
            <div class="cart-item" style="display:flex; align-items:center; margin-bottom:10px;">
                <img src="${item.img}" style="width:50px; border-radius:5px;">
                <div style="flex:1; margin-left:10px;">
                    <h4 style="font-size:0.8rem;">${item.name}</h4>
                    <p>₹${item.price}</p>
                </div>
                <button onclick="changeQty(${index}, -1)">-</button>
                <span style="margin:0 5px;">${item.quantity}</span>
                <button onclick="changeQty(${index}, 1)">+</button>
            </div>`;
    }).join('');

    totalEl.innerText = `₹${total}`;
    // Initialize/Update PayPal with new total
    initPayPalButton(total);
}

function changeQty(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) cart.splice(index, 1);
    saveCart();
    renderCart();
}

// 6. CHECKOUT & GATEWAY INTEGRATION (Practical 3 Objectives)
function proceedToCheckout() {
    const name = document.getElementById("checkoutName").value;
    const phone = document.getElementById("checkoutPhone").value;
    const address = document.getElementById("checkoutAddress").value;
    const payContainer = document.getElementById("paypal-button-container");

    if (cart.length === 0) return alert("Basket is empty!");
    
    if (!name || !phone || !address) {
        alert("Please fill in Name, Phone, and Address to unlock payment.");
        return;
    }

    // Success: Reveal the Payment Gateway
    alert("Details Verified! The PayPal payment gateway is now active below.");
    payContainer.style.display = "block";
    payContainer.scrollIntoView({ behavior: 'smooth' });
}

function initPayPalButton(totalAmount) {
    // Convert INR to USD for Sandbox (Objective: Multi-currency support)
    const usdAmount = (totalAmount / 83).toFixed(2); 
    const container = document.getElementById("paypal-button-container");
    
    if(!container) return;
    container.innerHTML = ""; // Prevent duplicate buttons

    paypal.Buttons({
        style: { layout: 'vertical', color: 'gold', shape: 'rect' },
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{ amount: { value: usdAmount } }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                handleOrderSuccess(details);
            });
        },
        onCancel: function(data) {
            alert("Transaction Cancelled. You can try again or use UPI.");
        },
        onError: function(err) {
            alert("Gateway Error: Connection to issuing bank failed.");
        }
    }).render('#paypal-button-container');
}

function handleOrderSuccess(details) {
    alert("Payment Successful! Thank you " + details.payer.name.given_name);
    cart = [];
    saveCart();
    toggleCart();
    document.getElementById("successOverlay").style.display = "flex";
}

// 7. PRODUCT GRID RENDERER
function renderProducts(items, searchTerm = "") {
    const grid = document.getElementById("productGrid");
    if(!grid) return;
    grid.innerHTML = items.map(p => `
        <div class="p-card" onclick="openModal('${p.name.replace(/'/g, "\\'")}')">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="p-price">₹${p.price}</p>
        </div>
    `).join('');
}

// HELPER: Renders Auth UI
function renderUserNav() {
    const session = JSON.parse(localStorage.getItem("activeSession"));
    const container = document.getElementById("userAuthSection");
    if (!container) return;

    if (session) {
        container.innerHTML = `<span>Hi, ${session.name.split(' ')[0]}</span>`;
    } else {
        container.innerHTML = `<a href="javascript:void(0)" onclick="openAuth()">Sign In</a>`;
    }
}
