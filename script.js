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
    // --- COOKIES (15 Items) ---
    { name: "Classic Choco Chip", price: 120, cat: "cookies", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80", desc: "Signature soft-bake with Belgian chocolate." },
    { name: "Red Velvet Cream", price: 140, cat: "cookies", img: "https://images.unsplash.com/photo-1610450938030-2f3086439002?auto=format&fit=crop&w=600&q=80", desc: "Rich cocoa base with white chocolate chips." },
    { name: "Oatmeal Raisin", price: 110, cat: "cookies", img: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=600&q=80", desc: "Chewy oats with organic sun-dried raisins." },
    { name: "Double Chocolate", price: 150, cat: "cookies", img: "https://images.unsplash.com/photo-1597733153203-a54d0fbc47df?auto=format&fit=crop&w=600&q=80", desc: "Dark cocoa dough with milk chocolate chunks." },
    { name: "Pistachio Shortbread", price: 180, cat: "cookies", img: "https://images.unsplash.com/photo-1557089706-68d02dbda277?auto=format&fit=crop&w=600&q=80", desc: "Buttery shortbread with premium pistachios." },
    { name: "Nutella Sea Salt", price: 160, cat: "cookies", img: "https://images.unsplash.com/photo-1559622314-f83c65644781?auto=format&fit=crop&w=600&q=80", desc: "Stuffed with Nutella and topped with sea salt." },
    { name: "Peanut Butter Blast", price: 130, cat: "cookies", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80", desc: "Creamy peanut butter baked to perfection." },
    { name: "Lemon Sugar Glaze", price: 100, cat: "cookies", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80", desc: "Refreshing lemon zest in a sugar crust." },
    { name: "White Choco Macadamia", price: 195, cat: "cookies", img: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=600&q=80", desc: "Crunchy nuts with smooth white chocolate." },
    { name: "Ginger Molasses", price: 115, cat: "cookies", img: "https://images.unsplash.com/photo-1557089706-68d02dbda277?auto=format&fit=crop&w=600&q=80", desc: "Warm spices and organic molasses." },
    { name: "Coffee Bean Crunch", price: 145, cat: "cookies", img: "https://images.unsplash.com/photo-1559622314-f83c65644781?auto=format&fit=crop&w=600&q=80", desc: "Infused with real ground espresso." },
    { name: "Matcha Softbake", price: 170, cat: "cookies", img: "https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=600&q=80", desc: "Fine Japanese Matcha green tea flavor." },
    { name: "Snickerdoodle", price: 110, cat: "cookies", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80", desc: "Soft cookie rolled in cinnamon sugar." },
    { name: "Coconut Macaroon", price: 135, cat: "cookies", img: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=600&q=80", desc: "Toasted coconut with a honey drizzle." },
    { name: "Pumpkin Spice Cookie", price: 140, cat: "cookies", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80", desc: "Seasonal favorite with nutmeg and clove." },

    // --- PASTRIES (15 Items) ---
    { name: "Classic Croissant", price: 150, cat: "pastries", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80", desc: "Authentic 24-layer buttery French pastry." },
    { name: "Pain au Chocolat", price: 180, cat: "pastries", img: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=600&q=80", desc: "Flaky pastry with dark chocolate batons." },
    { name: "Almond Frangipane", price: 210, cat: "pastries", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80", desc: "Twice-baked with sweet almond cream." },
    { name: "Cinnamon Swirl", price: 180, cat: "pastries", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80", desc: "Gooey cinnamon filling with vanilla icing." },
    { name: "Blueberry Muffin", price: 120, cat: "pastries", img: "https://images.unsplash.com/photo-1558303420-f814d8a590f5?auto=format&fit=crop&w=600&q=80", desc: "Bursting with fresh organic blueberries." },
    { name: "Apple Turnover", price: 165, cat: "pastries", img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=80", desc: "Cinnamon apples in a crispy puff shell." },
    { name: "Cheese Danish", price: 190, cat: "pastries", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80", desc: "Sweet cream cheese center pastry." },
    { name: "Strawberry Tart", price: 250, cat: "pastries", img: "https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&w=600&q=80", desc: "Fresh strawberries on vanilla custard." },
    { name: "Chocolate Eclair", price: 200, cat: "pastries", img: "https://images.unsplash.com/photo-1612203985729-7072695438d3?auto=format&fit=crop&w=600&q=80", desc: "Choux pastry filled with pastry cream." },
    { name: "Spinach Feta Puff", price: 185, cat: "pastries", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80", desc: "Savory puff pastry with Mediterranean filling." },
    { name: "Vanilla Scone", price: 130, cat: "pastries", img: "https://images.unsplash.com/photo-1558303420-f814d8a590f5?auto=format&fit=crop&w=600&q=80", desc: "English style scone with sugar pearls." },
    { name: "Pecan Sticky Bun", price: 220, cat: "pastries", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80", desc: "Caramelized pecans and honey glaze." },
    { name: "Banana Walnut Bread", price: 95, cat: "pastries", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80", desc: "Moist bread made with ripened bananas." },
    { name: "Raspberry Galette", price: 230, cat: "pastries", img: "https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&w=600&q=80", desc: "Rustic open-faced fruit tart." },
    { name: "Apricot Pocket", price: 175, cat: "pastries", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80", desc: "Sweet apricot preserve in flaky dough." },

    // --- CAKES (15 Items) ---
    { name: "Midnight Velvet", price: 950, cat: "cakes", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80", desc: "Deep dark chocolate with silk ganache." },
    { name: "Berry Cheesecake", price: 1200, cat: "cakes", img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80", desc: "New York style with fresh berries." },
    { name: "Birthday Funfetti", price: 850, cat: "cakes", img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&q=80", desc: "Vanilla sponge with colorful sprinkles." },
    { name: "Black Forest", price: 1100, cat: "cakes", img: "https://images.unsplash.com/photo-1571115177098-24ec42ed2bb4?auto=format&fit=crop&w=600&q=80", desc: "Cherry compote and whipped cream." },
    { name: "Red Velvet Cake", price: 1050, cat: "cakes", img: "https://images.unsplash.com/photo-1586788680434-30d324634bf6?auto=format&fit=crop&w=600&q=80", desc: "Classic with velvet cream cheese frost." },
    { name: "Mango Mousse", price: 1300, cat: "cakes", img: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=600&q=80", desc: "Light and airy Alphonso mango mousse." },
    { name: "Carrot Walnut Cake", price: 900, cat: "cakes", img: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?auto=format&fit=crop&w=600&q=80", desc: "Spiced cake with cream cheese layer." },
    { name: "Tiramisu Gateau", price: 1400, cat: "cakes", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80", desc: "Coffee soaked sponge with mascarpone." },
    { name: "Lemon Drizzle", price: 750, cat: "cakes", img: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=600&q=80", desc: "Zesty lemon loaf with light icing." },
    { name: "Hazelnut Praline", price: 1550, cat: "cakes", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80", desc: "Roasted hazelnut cream and chocolate." },
    { name: "Pineapple Bliss", price: 800, cat: "cakes", img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&q=80", desc: "Tropical pineapple upside-down cake." },
    { name: "Opera Cake", price: 1800, cat: "cakes", img: "https://images.unsplash.com/photo-1571115177098-24ec42ed2bb4?auto=format&fit=crop&w=600&q=80", desc: "Elegant French almond coffee layers." },
    { name: "Lotus Biscoff Cake", price: 1650, cat: "cakes", img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80", desc: "Speculoos spread and biscuit crunch." },
    { name: "Chocolate Truffle", price: 1150, cat: "cakes", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80", desc: "Rich 70% dark chocolate truffle cake." },
    { name: "Fruit Fantasy", price: 1250, cat: "cakes", img: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=600&q=80", desc: "Seasonal mixed fruits on vanilla sponge." }
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
