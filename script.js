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

    document.getElementById("m-name").innerText = p.name;
    document.getElementById("m-img").src = p.img;
    document.getElementById("m-desc").innerText = p.desc;
    document.getElementById("m-price").innerText = `₹${p.price}`;
    document.getElementById("m-buy-price").innerText = `₹${p.price}`;

    // Reset weights
    document.querySelectorAll('.w-btn').forEach((b, i) => {
        i === 0 ? b.classList.add('active') : b.classList.remove('active');
    });

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
function addToCart(isBuyNow) {
    // Strips the ₹ and converts to a number
    const priceText = document.getElementById("m-price").innerText.replace('₹', '');
    const priceNum = parseInt(priceText);
    
    const weight = document.querySelector('.w-btn.active').innerText;
    const entryName = `${activeItem.name} (${weight})`;
    
    cart.push({ name: entryName, price: priceNum });
    document.getElementById("cartCount").innerText = cart.length;

    if(isBuyNow) {
        alert("Proceeding to Checkout for: " + entryName + " at ₹" + priceNum);
        // Here you would typically redirect to a checkout page
    } else {
        alert(entryName + " added to Basket!");
        closeModal();
    }
}

