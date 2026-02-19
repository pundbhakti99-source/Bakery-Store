let cart = [];
let currentProduct = null;

const products = [
    { name: "Classic Choco Chip", price: 120, cat: "cookies", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600", desc: "Signature soft-bake with Belgian chocolate chunks." },
    { name: "Red Velvet Cream", price: 140, cat: "cookies", img: "https://images.unsplash.com/photo-1610450938030-2f3086439002?q=80&w=600", desc: "Rich cocoa base with white chocolate chips." },
    { name: "Classic Croissant", price: 150, cat: "pastries", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600", desc: "Authentic 24-layer buttery French pastry." },
    { name: "Belgian Chocolate Cake", price: 850, cat: "cakes", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600", desc: "Decadent layers of dark chocolate ganache." }
    // ... add your remaining items here
];

window.onload = () => {
    document.getElementById("menu").style.display = "none";
};

// 1. Navigation & Dynamic Population
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

// 2. Product Detail Fixes
function openProductDetail(name) {
    const product = products.find(p => p.name === name);
    if(!product) return;

    currentProduct = product; 
    document.getElementById("pp-name").innerText = product.name;
    document.getElementById("pp-price").innerText = `₹${product.price}`;
    document.getElementById("pp-btn-price").innerText = `₹${product.price}`;
    document.getElementById("pp-desc").innerText = product.desc;
    document.getElementById("pp-main-img").src = product.img;
    
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

// 3. Weight Selection (Active States)
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

// 4. Pincode Logic
function checkPincode() {
    const pin = document.getElementById("pincodeInput").value;
    const msg = document.getElementById("pincodeMsg");
    const validPins = ["400001", "110001", "560001"]; // Example list

    if(validPins.includes(pin)) {
        msg.innerText = "✓ Delivery available to this area!";
        msg.style.color = "#82937E";
    } else {
        msg.innerText = "× Sorry, we don't deliver here yet.";
        msg.style.color = "#ff3232";
    }
}

// 5. Cart Logic
function addToCartFromPage(isBuyNow) {
    const p = document.getElementById("pp-price").innerText.replace('₹','');
    const w = document.querySelector('.w-btn.active').innerText;
    const finalName = `${currentProduct.name} (${w})`;
    
    cart.push({ name: finalName, price: parseInt(p) });
    document.getElementById("cartCount").innerText = cart.length;
    
    if(isBuyNow) {
        alert("Proceeding to Checkout with: " + finalName);
    } else {
        alert(finalName + " added to basket!");
        closeProductPage();
    }
}
