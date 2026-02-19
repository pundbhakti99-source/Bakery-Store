let cart = [];
let activeItem = null;

window.onload = () => {
    document.getElementById("menu").style.display = "none";
};

// 1. Navigation
function jumpToCategory(cat) {
    const menu = document.getElementById("menu");
    menu.style.display = "block";
    menu.scrollIntoView({ behavior: 'smooth' });
    filterCategory(cat);
}

function handleSearch() {
    const term = document.getElementById("searchInput").value.toLowerCase();
    document.getElementById("menu").style.display = "block";
    const matches = products.filter(p => p.name.toLowerCase().includes(term) || p.cat.toLowerCase().includes(term));
    renderProducts(matches);
}

function filterCategory(cat, event) {
    document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
    if(event) event.target.classList.add('active');
    else document.getElementById(`btn-${cat}`).classList.add('active');
    const filtered = (cat === 'all') ? products : products.filter(p => p.cat === cat);
    renderProducts(filtered);
}

// 2. Rendering
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

// 3. Modal Logic
function openModal(name) {
    const p = products.find(item => item.name === name);
    if(!p) return;
    activeItem = p;

    document.getElementById("m-name").innerText = p.name;
    document.getElementById("m-img").src = p.img;
    document.getElementById("m-desc").innerText = p.desc || "Artisan bake prepared fresh.";
    document.getElementById("m-price").innerText = `₹${p.price}`;
    document.getElementById("m-buy-price").innerText = `₹${p.price}`;

    // Recommendations & Reset Scroll
    const recGrid = document.getElementById("recGrid");
    recGrid.scrollLeft = 0;
    const suggestions = products.filter(item => item.cat === p.cat && item.name !== p.name).slice(0, 6);
    recGrid.innerHTML = suggestions.map(s => `
        <div class="rec-item" onclick="openModal('${s.name.replace(/'/g, "\\'")}')">
            <img src="${s.img}" alt="${s.name}">
            <p>${s.name}</p>
        </div>
    `).join('');

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

// 5. Auth
function openSignIn() { document.getElementById("signInModal").style.display = "block"; }
function closeSignIn() { document.getElementById("signInModal").style.display = "none"; }
function handleSignIn(e) { e.preventDefault(); alert("Welcome to The Golden Whisk!"); closeSignIn(); }

// 6. Cart & Checkout
function toggleCart() {
    const sidebar = document.getElementById("cartSidebar");
    sidebar.classList.toggle("open");
    document.getElementById("cartOverlay").style.display = sidebar.classList.contains("open") ? "block" : "none";
    renderCart();
}

function addToCart(isBuyNow) {
    const price = parseInt(document.getElementById("m-price").innerText.replace('₹', ''));
    const weight = document.querySelector('.w-btn.active').innerText;
    cart.push({ name: `${activeItem.name} (${weight})`, price: price });
    updateCartCount();
    if(isBuyNow) toggleCart(); else { alert("Added!"); closeModal(); }
}

function updateCartCount() { document.getElementById("cartCount").innerText = cart.length; }

function renderCart() {
    const list = document.getElementById("cartItemsList");
    let total = 0;
    list.innerHTML = cart.map((item, i) => {
        total += item.price;
        return `<div class="cart-item"><span>${item.name}</span><span>₹${item.price}</span></div>`;
    }).join('');
    document.getElementById("cartTotal").innerText = `₹${total}`;
}

function proceedToCheckout() {
    if(cart.length === 0) return;
    toggleCart();
    document.getElementById("successOverlay").style.display = "flex";
    cart = []; updateCartCount();
}

function closeSuccess() { document.getElementById("successOverlay").style.display = "none"; }
