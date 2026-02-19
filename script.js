let cart = [];
let activeItem = null;

// Ensure Menu section stays hidden until triggered
window.onload = () => {
    document.getElementById("menu").style.display = "none";
};

// 1. Navigation & Search
function jumpToCategory(cat) {
    const menu = document.getElementById("menu");
    menu.style.display = "block";
    menu.scrollIntoView({ behavior: 'smooth' });
    filterCategory(cat);
}
function handleSearch() {
    const term = document.getElementById("searchInput").value.toLowerCase();
    
    // 1. Show the menu
    document.getElementById("menu").style.display = "block";
    
    // 2. Remove 'active' highlight from category buttons since we are searching everything
    document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btn-all').classList.add('active');

    const matches = products.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.cat.toLowerCase().includes(term)
    );
    renderProducts(matches);
}

// 2. Filter & Render
function filterCategory(cat, event) {
    document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
    if(event) event.target.classList.add('active');
    else document.getElementById(`btn-${cat}`).classList.add('active');

    const filtered = (cat === 'all') ? products : products.filter(p => p.cat === cat);
    renderProducts(filtered);
}

function renderProducts(items) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = items.map(p => `
        <div class="p-card" onclick="openModal('${p.name.replace(/'/g, "\\'")}')">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="p-price">₹${p.price}</p>
        </div>
    `).join('');
}

// 3. Modal Logic
function openModal(name) {
    const p = products.find(item => item.name === name);
    if(!p) return;
    activeItem = p;

    // ... (Your existing modal text updates: name, img, desc, price) ...
    document.getElementById("m-name").innerText = p.name;
    document.getElementById("m-img").src = p.img;
    document.getElementById("m-desc").innerText = p.desc;
    document.getElementById("m-price").innerText = `₹${p.price}`;
    document.getElementById("m-buy-price").innerText = `₹${p.price}`;

    // --- NEW: RECOMMENDATION LOGIC ---
    const recGrid = document.getElementById("recGrid");
    // Filter items in the same category, excluding the current one
    const suggestions = products
        .filter(item => item.cat === p.cat && item.name !== p.name)
        .sort(() => 0.5 - Math.random()) // Shuffle
        .slice(0, 3); // Take top 3

    recGrid.innerHTML = suggestions.map(s => `
        <div class="rec-item" onclick="openModal('${s.name.replace(/'/g, "\\'")}')">
            <img src="${s.img}" alt="${s.name}">
            <p>${s.name}</p>
        </div>
    `).join('');
    // ---------------------------------

    document.getElementById("productModal").style.display = "block";
    document.body.style.overflow = "hidden";
}


function closeModal() {
    document.getElementById("productModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// 4. Weight Multiplier
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('w-btn')) {
        document.querySelectorAll('.w-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        const mult = parseFloat(e.target.dataset.mult);
        const finalPrice = Math.round(activeItem.price * mult);
        document.getElementById("m-price").innerText = `₹${finalPrice}`;
        document.getElementById("m-buy-price").innerText = `₹${finalPrice}`;
    }
});

// 5. Pincode & Cart
function checkPin() {
    const pin = document.getElementById("pinInput").value;
    const status = document.getElementById("pinStatus");
    if(pin.length === 6 && !isNaN(pin)) {
        status.innerText = "✓ Delivery Available!";
        status.style.color = "green";
    } else {
        status.innerText = "× Invalid Pincode.";
        status.style.color = "red";
    }
}
// Toggle Sidebar visibility
function toggleCart() {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");
    sidebar.classList.toggle("open");
    overlay.style.display = sidebar.classList.contains("open") ? "block" : "none";
    renderCart();
}

function addToCart(isBuyNow) {
    const priceText = document.getElementById("m-price").innerText.replace('₹', '');
    const priceNum = parseInt(priceText);
    const weight = document.querySelector('.w-btn.active').innerText;
    
    const entry = {
        name: `${activeItem.name} (${weight})`,
        price: priceNum,
        img: activeItem.img
    };

    cart.push(entry);
    updateCartCount();

    if(isBuyNow) {
        toggleCart();
    } else {
        alert("Added to basket!");
        closeModal();
    }
}

function updateCartCount() {
    document.getElementById("cartCount").innerText = cart.length;
}

function renderCart() {
    const list = document.getElementById("cartItemsList");
    const totalEl = document.getElementById("cartTotal");
    let total = 0;

    if (cart.length === 0) {
        list.innerHTML = "<p style='text-align:center; color:#888;'>Your basket is empty.</p>";
        totalEl.innerText = "₹0";
        return;
    }

    list.innerHTML = cart.map((item, index) => {
        total += item.price;
        return `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong>
                    <p>₹${item.price}</p>
                </div>
                <button onclick="removeItem(${index})" style="background:none; border:none; color:red; cursor:pointer;">Remove</button>
            </div>
        `;
    }).join('');

    totalEl.innerText = `₹${total}`;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCartCount();
    renderCart();
}

// Replace your proceedToCheckout with this:
function proceedToCheckout() {
    if(cart.length === 0) return alert("Your basket is empty!");

    // Close cart and show success
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");
    sidebar.classList.remove("open");
    overlay.style.display = "none";
    
    document.getElementById("successOverlay").style.display = "flex";

    // Clear data
    cart = [];
    updateCartCount();
}

function closeSuccess() {
    document.getElementById("successOverlay").style.display = "none";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderProducts(items) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = items.map(p => {
        const rate = (Math.random() * (5 - 4.5) + 4.5).toFixed(1);
        return `
            <div class="p-card" onclick="openModal('${p.name.replace(/'/g, "\\'")}')">
                <img src="${p.img}" alt="${p.name}">
                <div class="rating">★★★★★ <span>(${rate})</span></div>
                <h3>${p.name}</h3>
                <p class="p-price">₹${p.price}</p>
            </div>
        `;
    }).join('');
}
