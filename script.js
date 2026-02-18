let cart = [];
let total = 0;

// 1. SEARCH FUNCTIONALITY
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", function () {
    const value = searchInput.value.toLowerCase();
    const products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        const title = product.querySelector("h3").innerText.toLowerCase();
        product.style.display = title.includes(value) ? "block" : "none";
    });
});

// 2. CATEGORY FILTERING
function filterCategory(category, event) {
    const products = document.querySelectorAll(".product-card");
    const buttons = document.querySelectorAll(".filter-btn");

    // Update active button UI
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    // Show/Hide products
    products.forEach(product => {
        if (category === "all" || product.getAttribute("data-category") === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// 3. CART DRAWER TOGGLE
function toggleCart() {
    document.getElementById("cartDrawer").classList.toggle("open");
}

// 4. ADD TO CART LOGIC (Lab 5: Session/State Handling)
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCartUI();
    
    // Optional: Open cart drawer automatically when adding
    if(!document.getElementById("cartDrawer").classList.contains("open")) {
        toggleCart();
    }
}
function applyDiscount() {
    const code = prompt("Enter Discount Code (Try: WELCOME10)");
    if (code === "WELCOME10") {
        total = total * 0.9; // 10% off
        updateCartUI();
        alert("Discount applied!");
    } else {
        alert("Invalid code.");
    }
}

function updateCartUI() {
    const cartCount = document.getElementById("cartCount");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    // Update Number of Items in Navbar
    cartCount.innerText = cart.length;

    // Update Drawer Content
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-msg">Your basket is empty.</p>';
    } else {
        cartItems.innerHTML = cart.map((item, index) => `
            <div style="display:flex; justify-content:space-between; margin-bottom:15px; border-bottom:1px solid #f9f9f9; padding-bottom:5px;">
                <span>${item.name}</span>
                <strong>$${item.price.toFixed(2)}</strong>
            </div>
        `).join('');
    }

    // Update Total Price
    cartTotal.innerText = `$${total.toFixed(2)}`;
}
// 1. DATA SOURCE (The "Source of Truth")
const products = [
    { id: 1, name: "Classic Choco Chip", price: 12.00, category: "cookies", desc: "Our signature soft-bake.", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Red Velvet Cream", price: 14.00, category: "cookies", desc: "Velvety cocoa with white chips.", img: "https://images.unsplash.com/photo-1559622314-f83c65644781?auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Classic Croissant", price: 4.50, category: "pastries", desc: "24 layers of buttery goodness.", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "Midnight Velvet", price: 45.00, category: "cakes", desc: "Dark chocolate ganache layers.", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80" },
    { id: 5, name: "Artisan Sourdough", price: 9.00, category: "pastries", desc: "Crusty outside, airy inside.", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80" }
    // Add more items here as needed...
];

let cart = {}; // Using an object to track { productId: quantity }
let total = 0;

// 2. RENDER PRODUCTS TO PAGE
function renderProducts(productsToDisplay) {
    const grid = document.getElementById("productGrid");
    const noResults = document.getElementById("noResults");
    
    grid.innerHTML = ""; // Clear current grid

    if (productsToDisplay.length === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
        productsToDisplay.forEach(product => {
            grid.innerHTML += `
                <div class="product-card" data-category="${product.category}">
                    <img src="${product.img}" alt="${product.name}" loading="lazy">
                    <h3>${product.name}</h3>
                    <p>${product.desc}</p>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            `;
        });
    }
}

// 3. SEARCH & FILTER LOGIC
document.getElementById("searchInput").addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term));
    renderProducts(filtered);
});

function filterCategory(category, event) {
    // UI Update for buttons
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    const filtered = category === 'all' ? products : products.filter(p => p.category === category);
    renderProducts(filtered);
}

// 4. IMPROVED CART LOGIC (Grouped by Quantity)
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (cart[productId]) {
        cart[productId].qty += 1;
    } else {
        cart[productId] = { ...product, qty: 1 };
    }
    
    updateCartUI();
    if(!document.getElementById("cartDrawer").classList.contains("open")) toggleCart();
}

function updateCartUI() {
    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");
    
    let itemCount = 0;
    let totalPrice = 0;
    cartItems.innerHTML = "";

    const items = Object.values(cart);

    if (items.length === 0) {
        cartItems.innerHTML = '<p class="empty-msg">Your basket is empty.</p>';
    } else {
        items.forEach(item => {
            itemCount += item.qty;
            totalPrice += (item.price * item.qty);
            cartItems.innerHTML += `
                <div style="display:flex; justify-content:space-between; margin-bottom:15px; border-bottom:1px solid #f9f9f9; padding-bottom:10px;">
                    <div>
                        <strong>${item.name}</strong><br>
                        <small>$${item.price.toFixed(2)} x ${item.qty}</small>
                    </div>
                    <strong>$${(item.price * item.qty).toFixed(2)}</strong>
                </div>
            `;
        });
    }

    cartCount.innerText = itemCount;
    cartTotal.innerText = `$${totalPrice.toFixed(2)}`;
}

// Helper: Toggle Drawer
function toggleCart() {
    document.getElementById("cartDrawer").classList.toggle("open");
}

// Initial Render
renderProducts(products);

// 5. CHECKOUT PLACEHOLDER (Prep for Lab 3)
function proceedToCheckout() {
    if(cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Proceeding to Checkout! In Lab 3, we will connect this to a PayPal/Stripe Sandbox.");
}

