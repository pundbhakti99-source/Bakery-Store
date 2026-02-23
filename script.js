let cart = [];

let activeItem = null;

localStorage.setItem("cart", JSON.stringify(cart));
cart = JSON.parse(localStorage.getItem("cart")) || [];

// Get all elements with the class 'cat-item'
const catItems = document.querySelectorAll('.cat-item');

// Loop through the NodeList and add the event listener to each item
catItems.forEach(item => {
    item.addEventListener('click', () => {
        // Your event handling logic goes here
        // For example, you can still call the existing function:
        const category = item.getAttribute('onclick').match(/'([^']+)'/)[1];
        jumpToCategory(category);
    });
});
// 1. Initial State: Show Homepage, Hide Menu
window.onload = () => {
    // 1. Hide the menu section by default
    document.getElementById("menu").classList.add("hidden");
    
    // 2. Load the products into the grid (hidden for now)
    renderProducts(products);
    
    // 3. Update cart and user UI
    updateCartCount();
    renderUserNav(); 
};


// 2. The Toggle Controller
function showStorefront(isSearching) {
    const hero = document.querySelector(".hero");
    const menu = document.getElementById("menu");

    if (isSearching) {
        hero.classList.add("hidden");   // Hide Homepage
        menu.classList.remove("hidden"); // Show Products
    } else {
        hero.classList.remove("hidden"); // Show Homepage
        menu.classList.add("hidden");    // Hide Products
    }
}

// 3. Search Logic
function handleSearch() {
    const term = document.getElementById("searchInput").value.toLowerCase();
    
    if (term.length > 0) {
        showStorefront(true); // Switch view to products
        const matches = products.filter(p => 
            p.name.toLowerCase().includes(term) || 
            p.cat.toLowerCase().includes(term)
        );
        renderProducts(matches, term);
    } else {
        showStorefront(false); // Go back home if search is cleared
    }
}

// 4. Category Button Logic
function jumpToCategory(cat) {
    showStorefront(true); // Switch view
    filterCategory(cat);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 5. Clear Search Button
function openModal(name) {
    const p = products.find(item => item.name === name);
    if (!p) return;

    activeItem = p;

    // Fill the modal data
    document.getElementById("m-name").innerText = p.name;
    document.getElementById("m-img").src = p.img;
    document.getElementById("m-img").alt = p.name;
    document.getElementById("m-price").innerText = `₹${p.price}`;
    document.getElementById("m-buy-price").innerText = `₹${p.price}`;
    document.getElementById("m-desc").innerText = p.desc;

    // --- MOBILE UX FIXES START ---
    
    // 1. Show the modal
    const modal = document.getElementById("productModal");
    modal.style.display = "block";

    // 2. Lock the body scroll (Prevents the "Desktop Zoom/Shift" feel)
    document.body.style.overflow = "hidden";

    // 3. Reset Modal scroll position to the top
    modal.scrollTop = 0;

    // --- MOBILE UX FIXES END ---

    // Render Recommendations
    const recGrid = document.getElementById("recGrid");
    recGrid.scrollLeft = 0; 
    const suggestions = products
        .filter(item => item.cat === p.cat && item.name !== p.name)
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);

    recGrid.innerHTML = suggestions.map(s => `
        <div class="rec-item" onclick="openModal('${s.name.replace(/'/g, "\\'")}')">
            <img src="${s.img}" alt="${s.name}">
            <p>${s.name}</p>
        </div>
    `).join('');
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
    
    // Release the body scroll lock
    document.body.style.overflow = "auto";
}


function clearSearch() {
    document.getElementById("searchInput").value = '';
    showStorefront(false); // Return to Homepage
    window.scrollTo({top: 0, behavior:'smooth' }); //smooth scroll to top
}

let searchTimeout = null;

function filterCategory(cat, event) {

    document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));

    if(event) event.target.classList.add('active');

    else document.getElementById(`btn-${cat}`).classList.add('active');



    const filtered = (cat === 'all') ? products : products.filter(p => p.cat === cat);

    renderProducts(filtered);

}
// 3. Modal Logic



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

// Toggle Sidebar visibility

function toggleCart() {

    const sidebar = document.getElementById("cartSidebar");

    const overlay = document.getElementById("cartOverlay");

    sidebar.classList.toggle("open");

    overlay.style.display = sidebar.classList.contains("open") ? "block" : "none";

    renderCart();

}



function addToCart(isBuyNow) {
    const priceText = document.getElementById("m-price").innerText.replace('₹', '');
    const priceNum = parseInt(priceText);
    const weight = document.querySelector('.w-btn.active').innerText;
    
    const entry = {
        name: `${activeItem.name} (${weight})`,
        price: priceNum,
        img: activeItem.img
    };

    cart.push(entry);
    updateCartCount();

    if(isBuyNow) {
        toggleCart(); // Opens sidebar immediately
    } else {
        closeModal();
        toggleCart(); // Also open sidebar here so user sees the success!
    }
}



function updateCartCount() {

    document.getElementById("cartCount").innerText = cart.length;

}



function renderCart() {

    const list = document.getElementById("cartItemsList");

    const totalEl = document.getElementById("cartTotal");

    let total = 0;



    if (cart.length === 0) {

        list.innerHTML = "<p style='text-align:center; color:#888;'>Your basket is empty.</p>";

        totalEl.innerText = "₹0";

        return;

    }



    list.innerHTML = cart.map((item, index) => {

        total += item.price;

        return `

            <div class="cart-item">

                <div>

                    <strong>${item.name}</strong>

                    <p>₹${item.price}</p>

                </div>

                <button onclick="removeItem(${index})" style="background:none; border:none; color:red; cursor:pointer;">Remove</button>

            </div>

        `;

    }).join('');



    totalEl.innerText = `₹${total}`;

}



function removeItem(index) {

    cart.splice(index, 1);

    updateCartCount();

    renderCart();

}



// Replace your proceedToCheckout with this:

function proceedToCheckout() {

    if(cart.length === 0) return alert("Your basket is empty!");



    // Close cart and show success

    const sidebar = document.getElementById("cartSidebar");

    const overlay = document.getElementById("cartOverlay");

    sidebar.classList.remove("open");

    overlay.style.display = "none";

    

    document.getElementById("successOverlay").style.display = "flex";



    // Clear data

    cart = [];

    updateCartCount();

}



function closeSuccess() {

    document.getElementById("successOverlay").style.display = "none";

    window.scrollTo({ top: 0, behavior: 'smooth' });

}

let debounceTimeout;

// Ensure Menu section and products load correctly

function renderProducts(items, searchTerm = "") {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = ""; // Clear existing grid content

    if (items.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; padding: 40px; color: #888; text-align: center;">
                No bakes found matching "${searchTerm}"
            </div>`;
        return;
    }

    grid.innerHTML = items.map(p => {
        // Generate a random stable rating for the high-end look
        const rate = (4.5 + Math.random() * 0.5).toFixed(1);
        
        // Use a safe string for the onclick event to handle names with apostrophes
        const safeName = p.name.replace(/'/g, "\\'");

        return `
            <div class="p-card" onclick="document.getElementById('searchInput').blur(); openModal('${safeName}')">
                <img src="${p.img}" alt="${p.name}" loading="lazy">
                <div class="rating">★★★★★ <span>(${rate})</span></div>
                <h3>${highlightText(p.name, searchTerm)}</h3>
                <p class="p-price">₹${p.price}</p>
            </div>
        `;
    }).join('');
}


function highlightText(text, term) {
    if (!term.trim()) return text;
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, `<span style="background: #fdf2a4;">$1</span>`);
}

function highlightText(text, term) {
  if (!term) return text;
  const regex = new RegExp(`(${term})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}
let isSignUpMode = false;

function openAuth() {
    document.getElementById("authModal").style.display = "flex";
}

function closeAuth() {
    document.getElementById("authModal").style.display = "none";
}

function toggleAuth(mode) {
    isSignUpMode = (mode === 'signup');
    document.getElementById("tab-login").classList.toggle("active", !isSignUpMode);
    document.getElementById("tab-signup").classList.toggle("active", isSignUpMode);
    document.getElementById("signupFields").classList.toggle("hidden", !isSignUpMode);
    document.getElementById("authBtnText").innerText = isSignUpMode ? "Create Account" : "Sign In";
}

async function handleAuthSubmit(event) {
    event.preventDefault();
    const btnText = document.getElementById("authBtnText");
    const loader = document.getElementById("authLoader");
    
    // UI Loading State
    btnText.classList.add("hidden");
    loader.classList.remove("hidden");

    const email = document.getElementById("authEmail").value;
    const pass = document.getElementById("authPass").value;
    const name = document.getElementById("authName").value;

    // Simulate Server Request (1.5s delay)
    await new Promise(res => setTimeout(res, 1500));

    if (isSignUpMode) {
        const newUser = { name, email, pass };
        localStorage.setItem(email, JSON.stringify(newUser));
        loginUser(newUser);
    } else {
        const user = JSON.parse(localStorage.getItem(email));
        if (user && user.pass === pass) {
            loginUser(user);
        } else {
            alert("Invalid email or password. Hint: Sign up first!");
        }
    }

    btnText.classList.remove("hidden");
    loader.classList.add("hidden");
}

function loginUser(user) {
    localStorage.setItem("activeSession", JSON.stringify(user));
    closeAuth();
    renderUserNav();
}

function renderUserNav() {
    const session = JSON.parse(localStorage.getItem("activeSession"));
    const container = document.getElementById("userAuthSection");

    if (session) {
        const firstName = session.name.split(' ')[0];
        // Uses a free UI avatar service for the high-end look
        const avatarUrl = `https://ui-avatars.com/api/?name=${firstName}&background=82937E&color=fff`;
        
        container.innerHTML = `
            <div class="user-profile" onclick="handleLogout()">
                <img src="${avatarUrl}" style="width:24px; border-radius:50%;">
                <span style="font-size: 0.85rem;">Hi, ${firstName}</span>
            </div>
        `;
    } else {
        container.innerHTML = `<a href="javascript:void(0)" onclick="openAuth()">Sign In</a>`;
    }
}

function handleLogout() {
    if(confirm("Would you like to sign out?")) {
        localStorage.removeItem("activeSession");
        renderUserNav();
    }
}

let selectedPayment = 'UPI'; // Default
function setPayment(method, event) {
    selectedPayment = method;
    
    // Toggle Button Active Class
    document.querySelectorAll('.p-method').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Show/Hide UPI Details
    const upiDiv = document.getElementById("upiDetail");
    if (method === 'UPI') {
        upiDiv.style.display = "block";
    } else {
        upiDiv.style.display = "none";
    }
}


function proceedToCheckout() {
    const name = document.getElementById("checkoutName").value;
    const address = document.getElementById("checkoutAddress").value;

    if (cart.length === 0) return alert("Your basket is empty!");
    if (!name || !address) return alert("Please fill in delivery details.");

    // 1. Get the button and start the "Processing" state
    const btn = document.querySelector('.checkout-btn');
    btn.innerText = "Processing Payment...";
    btn.disabled = true;

    // 2. Wait 1.5 seconds to simulate a bank connection
    setTimeout(() => {
        // 3. Call the helper for the "Verified" animation
        simulatePaymentSuccess(); 
        
        // 4. Reset form and cart data
        cart = [];
        document.getElementById("checkoutName").value = "";
        document.getElementById("checkoutAddress").value = "";
        updateCartCount();
        btn.disabled = false; // Re-enable for next time
    }, 1500);
}

// Add the helper function anywhere at the bottom of script.js
function simulatePaymentSuccess() {
    const btn = document.querySelector('.checkout-btn');
    btn.innerHTML = "Payment Verified ✓";
    btn.style.background = "#4CAF50"; // Turn green for success
    
    setTimeout(() => {
        // Now trigger the final success overlay
        toggleCart();
        document.getElementById("successOverlay").style.display = "flex";
        
        // Reset button for next time
        btn.innerHTML = "Confirm Order";
        btn.style.background = "#82937E";
    }, 1000);
}
