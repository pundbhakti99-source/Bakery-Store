let cart = [];
let total = 0;
let isLoggedIn = false;

// 1. AUTHENTICATION LOGIC

function openAuthModal() {
    const modal = document.getElementById("authModal");
    if (modal) {
        modal.style.display = "block";
    } else {
        console.error("Auth Modal element not found!");
    }
}

function closeAuthModal() {
    const modal = document.getElementById("authModal");
    if (modal) {
        modal.style.display = "none";
    }
}

// This function switches the visible form inside the modal
function toggleAuthView(view) {
    const signInView = document.getElementById("signInView");
    const signUpView = document.getElementById("signUpView");
    
    if (view === 'signup') {
        signInView.style.display = "none";
        signUpView.style.display = "block";
    } else {
        signInView.style.display = "block";
        signUpView.style.display = "none";
    }
}

// This handles both the Login button and the Register button
function handleAuth(type) {
    let email, name;

    if (type === 'login') {
        email = document.getElementById("loginEmail").value;
        if (!email.includes("@")) {
            alert("Please enter a valid email to sign in.");
            return;
        }
        name = "User"; // Generic name for login
    } else {
        name = document.getElementById("regName").value;
        email = document.getElementById("regEmail").value;
        if (!name || !email.includes("@")) {
            alert("Please fill in all registration fields.");
            return;
        }
    }

    // Mark as logged in and update UI
    isLoggedIn = true;
    document.getElementById("userLink").innerHTML = `<a href="javascript:void(0)">Hi, ${name.split(' ')[0]}</a>`;
    alert(type === 'login' ? "Welcome back!" : "Account created successfully!");
    closeAuthModal();
}
// 2. PRODUCT DETAIL MODAL
function openProductDetail(name, price, desc, imgUrl) {
    const modal = document.getElementById("productModal");
    const body = document.getElementById("modalBody");
    
    body.innerHTML = `
        <img src="${imgUrl}" alt="${name}">
        <h2 style="font-family: 'Cormorant Garamond', serif;">${name}</h2>
        <p style="margin: 15px 0; color: #666; line-height: 1.6;">${desc}</p>
        <p class="price" style="font-size: 1.6rem;">₹${price.toFixed(2)}</p>
        <button class="checkout-btn" onclick="addToCart('${name}', ${price}); closeProductModal();">Add to Cart</button>
    `;
    modal.style.display = "block";
}

function closeProductModal() {
    document.getElementById("productModal").style.display = "none";
}
const products = [
    // COOKIES (1-14)
    { name: "Classic Choco Chip", price: 120, cat: "cookies", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500", desc: "Premium Belgian chocolate chunks." },
    { name: "Red Velvet Cream", price: 140, cat: "cookies", img: "https://images.unsplash.com/photo-1610450938030-2f3086439002?w=500", desc: "Rich cocoa with white chocolate chips." },
    { name: "Oatmeal Raisin", price: 110, cat: "cookies", img: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=500", desc: "Chewy oats and sun-dried raisins." },
    { name: "Double Chocolate", price: 150, cat: "cookies", img: "https://images.unsplash.com/photo-1597733153203-a54d0fbc47df?w=500", desc: "Dark chocolate dough with milk chocolate chips." },
    { name: "Pistachio Shortbread", price: 180, cat: "cookies", img: "https://images.unsplash.com/photo-1557089706-68d02dbda277?w=500", desc: "Buttery shortbread with crushed pistachios." },
    { name: "Nutella Sea Salt", price: 160, cat: "cookies", img: "https://images.unsplash.com/photo-1559622314-f83c65644781?w=500", desc: "Filled with Nutella and topped with sea salt flakes." },
    { name: "Lemon Sugar Cookie", price: 100, cat: "cookies", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500", desc: "Zesty lemon infused sugar cookie." },
    { name: "Peanut Butter Blast", price: 130, cat: "cookies", img: "https://images.unsplash.com/photo-1581339399838-2a120c18baf3?w=500", desc: "Creamy peanut butter baked to perfection." },
    { name: "White Choco Macadamia", price: 190, cat: "cookies", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500", desc: "Exotic macadamia nuts with white chocolate." },
    { name: "Snickerdoodle", price: 115, cat: "cookies", img: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=500", desc: "Soft cookie rolled in cinnamon sugar." },
    { name: "Matcha Green Tea", price: 170, cat: "cookies", img: "https://images.unsplash.com/photo-1515037893149-de7f840978e2?w=500", desc: "Japanese Matcha flavored soft bake." },
    { name: "Coffee Bean Crunch", price: 140, cat: "cookies", img: "https://images.unsplash.com/photo-1559622314-f83c65644781?w=500", desc: "Infused with real espresso grounds." },
    { name: "Ginger Snap", price: 90, cat: "cookies", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500", desc: "Spiced ginger cookie with a crunch." },
    { name: "Coconut Macaroon", price: 130, cat: "cookies", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500", desc: "Toasted coconut flakes and honey." },

    // PASTRIES (15-28)
    { name: "Classic Croissant", price: 150, cat: "pastries", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500", desc: "Buttery 24-layer French pastry." },
    { name: "Pain au Chocolat", price: 180, cat: "pastries", img: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=500", desc: "Croissant filled with dark chocolate bars." },
    { name: "Almond Croissant", price: 210, cat: "pastries", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500", desc: "Twice baked with almond frangipane." },
    { name: "Cinnamon Swirl", price: 180, cat: "pastries", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500", desc: "Gooey cinnamon glaze." },
    { name: "Apple Turnover", price: 160, cat: "pastries", img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500", desc: "Fresh apples in flaky puff pastry." },
    { name: "Blueberry Muffin", price: 120, cat: "pastries", img: "https://images.unsplash.com/photo-1558303420-f814d8a590f5?w=500", desc: "Bursting with fresh organic blueberries." },
    { name: "Cheese Danish", price: 190, cat: "pastries", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500", desc: "Sweet cream cheese center." },
    { name: "Strawberry Tart", price: 250, cat: "pastries", img: "https://images.unsplash.com/photo-1464195244916-405fa0a82545?w=500", desc: "Fresh strawberries on vanilla custard." },
    { name: "Chocolate Eclair", price: 200, cat: "pastries", img: "https://images.unsplash.com/photo-1612203985729-7072695438d3?w=500", desc: "Cream filled with chocolate fondant." },
    { name: "Puff Palmiers", price: 140, cat: "pastries", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500", desc: "Elephant ear crispy sugar cookies." },
    { name: "Banana Bread Slice", price: 95, cat: "pastries", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500", desc: "Moist banana bread with walnuts." },
    { name: "Spinach Feta Puff", price: 180, cat: "pastries", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500", desc: "Savory puff with spinach and cheese." },
    { name: "Vanilla Scone", price: 130, cat: "pastries", img: "https://images.unsplash.com/photo-1558303420-f814d8a590f5?w=500", desc: "Crumbly scone with clotted cream." },
    { name: "Pecan Sticky Bun", price: 220, cat: "pastries", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500", desc: "Caramelized pecans and honey." },

    // CAKES (29-40)
    { name: "Midnight Velvet", price: 950, cat: "cakes", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500", desc: "Dark chocolate ganache layers." },
    { name: "Berry Cheesecake", price: 1200, cat: "cakes", img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500", desc: "New York style with fresh berries." },
    { name: "Birthday Funfetti", price: 850, cat: "cakes", img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500", desc: "Vanilla sponge with sprinkles." },
    { name: "Black Forest", price: 1100, cat: "cakes", img: "https://images.unsplash.com/photo-1571115177098-24ec42ed2bb4?w=500", desc: "Whipped cream, cherries, and chocolate." },
    { name: "Mango Mousse Cake", price: 1300, cat: "cakes", img: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=500", desc: "Seasonal Alphonso mango pulp." },
    { name: "Red Velvet Cake", price: 1050, cat: "cakes", img: "https://images.unsplash.com/photo-1586788680434-30d324634bf6?w=500", desc: "Classic cream cheese frosting." },
    { name: "Carrot Cake", price: 900, cat: "cakes", img: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?w=500", desc: "Spiced cake with walnuts and carrots." },
    { name: "Tiramisu Cake", price: 1400, cat: "cakes", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500", desc: "Coffee soaked layers with mascarpone." },
    { name: "Lemon Drizzle", price: 750, cat: "cakes", img: "https://images.unsplash.com/photo-1519869325930-281384150729?w=500", desc: "Zesty lemon loaf with sugar glaze." },
    { name: "Hazelnut Praline", price: 1550, cat: "cakes", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500", desc: "Roasted hazelnuts and chocolate." },
    { name: "Pineapple Upside Down", price: 800, cat: "cakes", img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500", desc: "Caramelized pineapple rings." },
    { name: "Opera Cake", price: 1800, cat: "cakes", img: "https://images.unsplash.com/photo-1571115177098-24ec42ed2bb4?w=500", desc: "French almond sponge with coffee." }
];

// --- FUNCTION TO RENDER ALL PRODUCTS ---
function renderProducts() {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = products.map(p => `
        <div class="product-card" data-category="${p.cat}" onclick="openProductDetail('${p.name}', ${p.price}, '${p.desc}', '${p.img}')">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="price">₹${p.price.toFixed(2)}</p>
            <button class="add-to-cart">View Details</button>
        </div>
    `).join('');
}

// Call the function when the page loads
window.onload = renderProducts;

// 3. CART LOGIC (Rupees)
function toggleCart() {
    document.getElementById("cartDrawer").classList.toggle("open");
}

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCartUI();
    
    // Automatically open cart to show the added item
    if(!document.getElementById("cartDrawer").classList.contains("open")) {
        toggleCart();
    }
}

function updateCartUI() {
    const cartCount = document.getElementById("cartCount");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    cartCount.innerText = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-msg">Your basket is empty.</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div style="display:flex; justify-content:space-between; margin-bottom:15px; border-bottom:1px solid #f9f9f9; padding-bottom:5px;">
                <span>${item.name}</span>
                <strong>₹${item.price.toFixed(2)}</strong>
            </div>
        `).join('');
    }
    cartTotal.innerText = `₹${total.toFixed(2)}`;
}

// 4. SEARCH & FILTER
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", function () {
    const value = searchInput.value.toLowerCase();
    const products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        const title = product.querySelector("h3").innerText.toLowerCase();
        product.style.display = title.includes(value) ? "block" : "none";
    });
});
function filterCategory(category, event) {
    const grid = document.getElementById("productGrid");
    const buttons = document.querySelectorAll(".filter-btn");

    // UI: Active button state
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    // Logic: Filter the product array
    const filtered = category === "all" ? products : products.filter(p => p.cat === category);
    
    // Re-render only filtered items
    grid.innerHTML = filtered.map(p => `
        <div class="product-card" data-category="${p.cat}" onclick="openProductDetail('${p.name}', ${p.price}, '${p.desc}', '${p.img}')">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="price">₹${p.price.toFixed(2)}</p>
            <button class="add-to-cart">View Details</button>
        </div>
    `).join('');
}



function proceedToCheckout() {
    if(cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    if(!isLoggedIn) {
        alert("Please Sign In to complete your purchase.");
        openAuthModal();
        return;
    }
    alert(`Order of ₹${total.toFixed(2)} received! Redirecting to payment...`);
}

// Global click handler to close modals
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}
