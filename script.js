let cart = [];
let currentProduct = null;

// Initial Setup
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

function filterCategory(cat, e) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    const targetBtn = e ? e.target : document.getElementById(`btn-${cat}`);
    if (targetBtn) targetBtn.classList.add('active');

    // Accesses global 'products' variable from product.js
    const list = (cat === 'all') ? products : products.filter(p => p.cat === cat);
    renderGrid(list);
}

function renderGrid(items) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = items.map(p => `
        <div class="product-card" onclick="openProductDetail('${p.name.replace(/'/g, "\\'")}')">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="price">₹${p.price}</p>
        </div>
    `).join('');
}

function handleSearch(e) {
    const term = e.target.value.toLowerCase();
    const matches = products.filter(p => p.name.toLowerCase().includes(term));
    if (term.length > 0) {
        document.getElementById("menu").style.display = "block";
        renderGrid(matches);
    }
}

// 2. Product Detail Logic
function openProductDetail(name) {
    const item = products.find(p => p.name === name);
    if (!item) return;

    currentProduct = item;
    document.getElementById("pp-name").innerText = item.name;
    document.getElementById("pp-desc").innerText = item.desc;
    document.getElementById("pp-main-img").src = item.img;
    document.getElementById("pp-price").innerText = `₹${item.price}`;
    document.getElementById("pp-btn-price").innerText = `₹${item.price}`;

    // Reset weight buttons
    document.querySelectorAll('.w-btn').forEach((btn, idx) => {
        idx === 0 ? btn.classList.add('active') : btn.classList.remove('active');
    });

    document.getElementById("productPageModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeProductPage() {
    document.getElementById("productPageModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// 3. Weight & Pricing Multipliers
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('w-btn')) {
        document.querySelectorAll('.w-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        const mult = parseFloat(e.target.dataset.mult);
        const newPrice = Math.round(currentProduct.price * mult);
        
        document.getElementById("pp-price").innerText = `₹${newPrice}`;
        document.getElementById("pp-btn-price").innerText = `₹${newPrice}`;
    }
});

// 4. Delivery Pincode Check
function checkPincode() {
    const pin = document.getElementById("pincodeInput").value;
    const msg = document.getElementById("pincodeMsg");
    if (pin.length === 6 && !isNaN(pin)) {
        msg.innerText = "✓ Delivery is available for this area.";
        msg.style.color = "green";
    } else {
        msg.innerText = "× Sorry, we don't deliver here yet.";
        msg.style.color = "red";
    }
}

// 5. Cart Management
function addToCart(buyNow) {
    const price = document.getElementById("pp-price").innerText.replace('₹','');
    const weight = document.querySelector('.w-btn.active').innerText;
    const finalName = `${currentProduct.name} (${weight})`;

    cart.push({ name: finalName, price: parseInt(price) });
    document.getElementById("cartCount").innerText = cart.length;

    if (buyNow) {
        alert("Redirecting to Checkout for: " + finalName);
    } else {
        alert("Added to Basket!");
        closeProductPage();
    }
}
