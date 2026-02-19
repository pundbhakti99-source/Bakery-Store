let cart = [];
let currentProduct = null;

// Ensure menu is hidden initially
window.onload = () => { 
    document.getElementById("menu").style.display = "none"; 
};

// 1. NAVIGATION
function jumpToCategory(cat) {
    const menuSection = document.getElementById("menu");
    menuSection.style.display = "block";
    menuSection.scrollIntoView({ behavior: 'smooth' });
    filterCategory(cat);
}

function filterCategory(cat, e) {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    const activeBtn = e ? e.target : document.getElementById(`btn-${cat}`);
    if (activeBtn) activeBtn.classList.add("active");

    // Using the 'products' array from your external product.js
    const filtered = (cat === 'all') ? products : products.filter(p => p.cat === cat);
    renderGrid(filtered);
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

// 2. DYNAMIC POPULATION (Functional Fix)
function openProductDetail(name) {
    // Search your external products list for the matching name
    const productData = products.find(p => p.name === name);
    if (!productData) return;

    currentProduct = productData; 
    document.getElementById("pp-name").innerText = productData.name;
    document.getElementById("pp-price").innerText = `₹${productData.price}`;
    document.getElementById("pp-btn-price").innerText = `₹${productData.price}`;
    document.getElementById("pp-desc").innerText = productData.desc;
    document.getElementById("pp-main-img").src = productData.img;
    
    // Reset weight buttons to first option
    document.querySelectorAll('.w-btn').forEach((btn, i) => {
        i === 0 ? btn.classList.add('active') : btn.classList.remove('active');
    });

    document.getElementById("productPageModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeProductPage() {
    document.getElementById("productPageModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// 3. UI IMPROVEMENT: Active Weight States
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('w-btn')) {
        document.querySelectorAll('.w-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        const mult = parseFloat(e.target.dataset.mult);
        const finalPrice = Math.round(currentProduct.price * mult);
        
        document.getElementById("pp-price").innerText = `₹${finalPrice}`;
        document.getElementById("pp-btn-price").innerText = `₹${finalPrice}`;
    }
});

// 4. PINCODE CHECK (Integration)
function checkPincode() {
    const pin = document.getElementById("pincodeInput").value;
    const msg = document.getElementById("pincodeMsg");
    
    // Simple validation logic (Example: only 6 digit numbers allowed)
    if (pin.length === 6 && !isNaN(pin)) {
        msg.innerText = "✓ We deliver to " + pin;
        msg.style.color = "green";
    } else {
        msg.innerText = "× Sorry, no delivery to this area.";
        msg.style.color = "red";
    }
}

// 5. CART LOGIC (Enhanced with Add to Cart)
function addToCart(isBuyNow) {
    const priceText = document.getElementById("pp-price").innerText.replace('₹','');
    const weight = document.querySelector('.w-btn.active').innerText;
    const itemName = `${currentProduct.name} (${weight})`;
    
    cart.push({ name: itemName, price: parseInt(priceText) });
    document.getElementById("cartCount").innerText = cart.length;
    
    if (isBuyNow) {
        alert("Redirecting to Checkout...");
    } else {
        alert(itemName + " added to your basket!");
        closeProductPage();
    }
}
