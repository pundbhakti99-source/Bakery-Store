let cart = [];
let total = 0;
let isLoggedIn = false;

// 1. RENDERING LOGIC
function renderGrid(items) {
    const grid = document.getElementById("productGrid");
    if (items.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; padding: 50px;">We couldn't find any matches!</p>`;
        return;
    }
    grid.innerHTML = items.map(p => `
        <div class="product-card" onclick="openProductDetail('${p.name.replace(/'/g, "\\'")}', ${p.price}, '${p.desc.replace(/'/g, "\\'")}', '${p.img}')">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="price">₹${p.price.toFixed(2)}</p>
            <button class="add-to-cart">View Details</button>
        </div>
    `).join('');
}

// 2. MODAL & AUTH LOGIC
function openAuthModal() { document.getElementById("authModal").style.display = "block"; }
function closeAuthModal() { document.getElementById("authModal").style.display = "none"; }
function toggleAuthView(view) {
    document.getElementById("signInView").style.display = view === 'signup' ? "none" : "block";
    document.getElementById("signUpView").style.display = view === 'signup' ? "block" : "none";
}

function handleAuth(type) {
    const email = type === 'login' ? document.getElementById("loginEmail").value : document.getElementById("regEmail").value;
    const name = type === 'login' ? "User" : document.getElementById("regName").value;
    if (!email.includes("@")) return alert("Invalid email!");
    isLoggedIn = true;
    document.getElementById("userLink").innerHTML = `<a href="#">Hi, ${name.split(' ')[0]}</a>`;
    closeAuthModal();
    alert("Success!");
}

function openProductDetail(name, price, desc, img) {
    const body = document.getElementById("modalBody");
    body.innerHTML = `
        <img src="${img}" alt="${name}">
        <h2 style="font-family: 'Cormorant Garamond', serif; margin-bottom: 10px;">${name}</h2>
        <p style="color: #666; margin-bottom: 20px;">${desc}</p>
        <div class="total-row"><span>Price:</span><span>₹${price.toFixed(2)}</span></div>
        <button class="checkout-btn" onclick="addToCart('${name.replace(/'/g, "\\'")}', ${price}); closeProductModal();">Add to Basket</button>
    `;
    document.getElementById("productModal").style.display = "block";
}
function closeProductModal() { document.getElementById("productModal").style.display = "none"; }

// 3. CART LOGIC
function toggleCart() { document.getElementById("cartDrawer").classList.toggle("open"); }

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCartUI();
    if (!document.getElementById("cartDrawer").classList.contains("open")) toggleCart();
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

// 4. FILTER & SEARCH (Restored Logic)
function filterCategory(cat, e) {
    // 1. Reset all buttons
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    
    // 2. Add active class to clicked button
    if (e && e.target) {
        e.target.classList.add("active");
    } else {
        // Fallback if called via code without an event
        document.querySelector('.filter-btn[onclick*="' + cat + '"]').classList.add("active");
    }

    // 3. Filter the array
    const filtered = (cat === 'all') ? products : products.filter(p => p.cat === cat);
    renderGrid(filtered);
}

document.getElementById("searchInput").addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const matches = products.filter(p => p.name.toLowerCase().includes(term));
    renderGrid(matches);
});

// Initial Run: Now uses the filterCategory function to ensure buttons match state
window.onload = () => filterCategory('all');

window.onclick = (e) => { 
    if (e.target.className === 'modal') { 
        e.target.style.display = "none"; 
    } 
}

// Function to handle the category click on homepage
function jumpToCategory(cat) {
    const menuSection = document.getElementById("menu");
    menuSection.style.display = "block"; // Show the hidden menu
    
    // Smooth scroll to the menu
    menuSection.scrollIntoView({ behavior: 'smooth' });
    
    // Trigger the existing filter logic
    filterCategory(cat);
    
    // Set the button to active visually
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.getElementById(`btn-${cat}`);
    if(activeBtn) activeBtn.classList.add("active");
}

// Update the window.onload to NOT show products immediately
window.onload = () => {
    // We don't call renderGrid(products) here anymore 
    // so the page stays empty/clean until a category is clicked.
};
