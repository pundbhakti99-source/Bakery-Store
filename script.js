let cart = [];
let total = 0;
let isLoggedIn = false;

// 1. RENDERING LOGIC (Fixed conflict and added View Details logic)
function renderGrid(items) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = ""; // Clear grid

    if (items.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; padding: 50px;">We couldn't find any matches!</p>`;
        return;
    }

    items.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        
        // Use your clean CSS classes
        card.innerHTML = `
            <div class="image-container">
                <img src="${p.img}" alt="${p.name}" loading="lazy">
            </div>
            <div class="card-info">
                <h3>${p.name}</h3>
                <p class="price">₹${p.price.toFixed(2)}</p>
                <button class="view-detail-btn">View Details</button>
            </div>
        `;

        // Make the whole card or just the button open the detail page
        card.onclick = () => openProductDetail(p.name, p.price, p.desc, p.img);
        
        grid.appendChild(card);
    });
}

// 2. BAKINGO-STYLE DETAIL PAGE LOGIC
function openProductDetail(name, price, desc, img) {
    document.getElementById("pp-name").innerText = name;
    document.getElementById("pp-price").innerText = `₹${price.toFixed(2)}`;
    // Update the price on the Buy button too
    const btnPrice = document.getElementById("pp-btn-price");
    if(btnPrice) btnPrice.innerText = `₹${price.toFixed(2)}`;
    
    document.getElementById("pp-desc").innerText = desc || "Freshly baked with love and the finest ingredients.";
    document.getElementById("pp-main-img").src = img;
    
    document.getElementById("productPageModal").style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeProductPage() {
    document.getElementById("productPageModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// 3. CATEGORY JUMP LOGIC
function jumpToCategory(cat) {
    const menuSection = document.getElementById("menu");
    menuSection.style.display = "block"; 
    
    menuSection.scrollIntoView({ behavior: 'smooth' });
    
    filterCategory(cat);
}

function filterCategory(cat, e) {
    // Reset active buttons
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    
    // Set active button
    if (e && e.target) {
        e.target.classList.add("active");
    } else {
        const targetBtn = document.getElementById(`btn-${cat}`);
        if(targetBtn) targetBtn.classList.add("active");
    }

    const filtered = (cat === 'all') ? products : products.filter(p => p.cat === cat);
    renderGrid(filtered);
}

// 4. SEARCH LOGIC
document.getElementById("searchInput").addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    if(term.length > 0) {
        document.getElementById("menu").style.display = "block";
        const matches = products.filter(p => p.name.toLowerCase().includes(term));
        renderGrid(matches);
    }
});

// 5. CART LOGIC
function toggleCart() { document.getElementById("cartDrawer").classList.toggle("open"); }

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCartUI();
    if (!document.getElementById("cartDrawer").classList.contains("open")) toggleCart();
}

function addToCartFromPage() {
    // Get name and price from the currently open detail page
    const name = document.getElementById("pp-name").innerText;
    const priceText = document.getElementById("pp-price").innerText.replace('₹', '');
    const price = parseFloat(priceText);
    
    addToCart(name, price);
    closeProductPage();
}

function updateCartUI() {
    document.getElementById("cartCount").innerText = cart.length;
    const container = document.getElementById("cartItems");
    if (cart.length === 0) {
        container.innerHTML = '<p class="empty-msg">Your basket is empty.</p>';
    } else {
        container.innerHTML = cart.map(item => `
            <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size: 0.9rem;">
                <span>${item.name}</span><strong>₹${item.price.toFixed(2)}</strong>
            </div>
        `).join('');
    }
    document.getElementById("cartTotal").innerText = `₹${total.toFixed(2)}`;
}

// 6. AUTH LOGIC
function openAuthModal() { document.getElementById("authModal").style.display = "block"; }
function closeAuthModal() { document.getElementById("authModal").style.display = "none"; }

function handleAuth(type) {
    const name = type === 'login' ? "User" : document.getElementById("regName").value;
    isLoggedIn = true;
    document.getElementById("userLink").innerHTML = `<a href="#">Hi, ${name.split(' ')[0]}</a>`;
    closeAuthModal();
}

// Initial Run
window.onload = () => {
    // Keep it empty until a category is clicked
};

window.onclick = (e) => { 
    if (e.target.className === 'modal' || e.target.className === 'pp-modal') { 
        e.target.style.display = "none"; 
        document.body.style.overflow = "auto";
    } 
}
