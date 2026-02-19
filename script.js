let cart = [];
let total = 0;
let currentProduct = null;

// Initial state
window.onload = () => { document.getElementById("menu").style.display = "none"; };

// 1. NAVIGATION LOGIC
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

    const filtered = (cat === 'all') ? products : products.filter(p => p.cat === cat);
    renderGrid(filtered);
}

// 2. RENDERING GRID
function renderGrid(items) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = items.map(p => `
        <div class="product-card" onclick="openProductDetail('${p.name.replace(/'/g, "\\'")}', ${p.price}, '${p.desc.replace(/'/g, "\\'")}', '${p.img}')">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="price">₹${p.price}</p>
            <button class="view-detail-btn" style="width:100%; margin-top:10px; padding:8px; background:none; border:1px solid #ddd; border-radius:5px; cursor:pointer;">View Details</button>
        </div>
    `).join('');
}

// 3. BAKINGO-STYLE DETAIL PAGE
function openProductDetail(name, price, desc, img) {
    currentProduct = { name, price }; 
    document.getElementById("pp-name").innerText = name;
    document.getElementById("pp-price").innerText = `₹${price}`;
    document.getElementById("pp-btn-price").innerText = `₹${price}`;
    document.getElementById("pp-desc").innerText = desc;
    document.getElementById("pp-main-img").src = img;
    
    // Reset weights
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

// 4. PRICE CALCULATION (Weight Switch)
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

// 5. CART LOGIC
function addToCartFromPage() {
    const p = document.getElementById("pp-price").innerText.replace('₹','');
    const w = document.querySelector('.w-btn.active').innerText;
    const finalName = `${currentProduct.name} (${w})`;
    
    cart.push({ name: finalName, price: parseInt(p) });
    document.getElementById("cartCount").innerText = cart.length;
    alert("Added to Basket!");
    closeProductPage();
}
};

