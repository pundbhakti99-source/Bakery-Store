
// Use ONE consistent key name
const CART_KEY = "golden_whisk_cart";

// Load from storage immediately
let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

let discountPercent = 0; // Initialize at 0%
let activeItem = null;

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
    renderCart();

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







function checkPin() {
    const pin = document.getElementById("pinInput").value;
    const status = document.getElementById("pinStatus");
    
    // Example: Only deliver to certain areas (e.g., starting with 422)
    if(pin.length === 6 && pin.startsWith("422")) {
        status.innerText = "✓ Fresh delivery available to your area!";
        status.style.color = "#82937E";
    } else if (pin.length === 6) {
        status.innerText = "× Sorry, we don't deliver here yet.";
        status.style.color = "#ff3232";
    } else {
        status.innerText = "Please enter a 6-digit pincode.";
        status.style.color = "orange";
    }
}



function removeItem(index) {



    cart.splice(index, 1);



    updateCartCount();



    renderCart();



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

    document.querySelectorAll('.p-method').forEach(btn => btn.classList.remove('active'));

    event.target.classList.add('active');



    // Toggle visibility of specific payment details

    // Ensure these IDs (upiDetail, cardDetail) match your HTML exactly

    document.getElementById("upiDetail").style.display = (method === 'UPI') ? "block" : "none";

    document.getElementById("cardDetail").style.display = (method === 'Card') ? "block" : "none";

}


function saveCart() {
    localStorage.setItem(CART_KEY , JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountEl = document.getElementById("cartCount");
    
    cartCountEl.innerText = count;

    // Add the animation class
    cartCountEl.classList.remove("cart-animate"); // Reset if already there
    void cartCountEl.offsetWidth;                // Trigger reflow
    cartCountEl.classList.add("cart-animate");
    
    // Optional: Remove it after animation finishes to keep the DOM clean
    setTimeout(() => cartCountEl.classList.remove("cart-animate"), 400);
}


/**
 * 2. CART ACTIONS
 */
function addToCart(isBuyNow) {
    const priceText = document.getElementById("m-price").innerText.replace('₹', '');
    const priceNum = parseInt(priceText);
    const weight = document.querySelector('.w-btn.active').innerText;
    const itemName = `${activeItem.name} (${weight})`;

    const existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: Date.now(), // Unique ID for tracking
            name: itemName,
            price: priceNum,
            quantity: 1,
            img: activeItem.img
        });
    }

    saveCart();
    
    if(isBuyNow) {
        if(!document.getElementById("cartSidebar").classList.contains("open")) toggleCart();
    } else {
        closeModal();
        // Optional: Add a "Added!" toast notification here
    }
}

function changeQty(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    renderCart();
}

/**
 * 3. RENDER CART & CALCULATE TOTALS
 */
function renderCart() {
    const list = document.getElementById("cartItemsList");
    const totalEl = document.getElementById("cartTotal");
    let total = 0;

    if (cart.length === 0) {
        list.innerHTML = `<div class="empty-msg" style="text-align:center; padding:40px;">
                            <p>Your basket is empty.</p>
                          </div>`;
        totalEl.innerText = "₹0";
        document.getElementById("paypal-button-container").innerHTML = ""; // Clear buttons if empty
        return;
    }

    list.innerHTML = cart.map((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `
            <div class="cart-item">
                <img src="${item.img}" style="width:60px; height:60px; border-radius:8px; object-fit:cover;">
                <div style="flex:1; margin-left:15px;">
                    <h4 style="font-size:0.9rem;">${item.name}</h4>
                    <p style="font-size:0.8rem; color:#82937E; font-weight:bold;">₹${item.price}</p>
                </div>
                <div class="qty-controls" style="display:flex; align-items:center; gap:10px;">
                    <button onclick="changeQty(${index}, -1)" style="border:1px solid #ddd; background:none; width:25px; cursor:pointer;">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQty(${index}, 1)" style="border:1px solid #ddd; background:none; width:25px; cursor:pointer;">+</button>
                </div>
            </div>
        `;
    }).join('');

    totalEl.innerText = `₹${total}`;
    
    // Initialize PayPal whenever cart renders (and has items)
    initPayPalButton(total);
}

/**
 * 4. PAYPAL INTEGRATION
 */
function initPayPalButton(totalAmount) {
    // Clear previous button to prevent duplicates
    document.getElementById("paypal-button-container").innerHTML = "";

    paypal.Buttons({
        style: {
            layout: 'vertical',
            color:  'gold',
            shape:  'rect',
            label:  'checkout'
        },
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        currency_code: 'INR', // Ensure this matches your SDK currency
                        value: totalAmount.toString() // FIX: Use totalAmount, not usdAmount
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                // This triggers your receipt logic
                handleOrderSuccess(details);
            });
        },
        onError: function(err) {
            alert("Payment Gateway Error: Please check your Sandbox Client ID.");
            console.error('PayPal Error:', err);
        }
    }).render('#paypal-button-container');
}

function showDeliveryForm() {
    if (cart.length === 0) {
        alert("Your basket is empty!");
        return;
    }
    // Hide product list and main button
    document.getElementById("cartItemsList").style.display = "none";
    document.getElementById("proceedToDeliveryBtn").style.display = "none";
    
    // Show delivery form
    document.getElementById("checkoutSection").style.display = "block";
   document.querySelector('.cart-body').scrollTop = 0;
}

function hideDeliveryForm() {
    // Show product list and main button
    document.getElementById("cartItemsList").style.display = "block";
    document.getElementById("proceedToDeliveryBtn").style.display = "block";
    
    // Hide delivery form
    document.getElementById("checkoutSection").style.display = "none";
}
function toggleCart() {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");
    const isOpen = sidebar.classList.toggle("open");

    overlay.style.display = isOpen ? "block" : "none";

    // Logic: Always reset to the Basket view when opening
    if (isOpen) {
        hideDeliveryForm(); 
        renderCart();
    }
}

function proceedToCheckout() {
    // 1. Grab values
    const name = document.getElementById("checkoutName").value.trim();
    const phone = document.getElementById("checkoutPhone").value.trim();
    const address = document.getElementById("checkoutAddress").value.trim();
    const pin = document.getElementById("checkoutPin").value.trim();

    // 2. Comprehensive Validation
    if (cart.length === 0) { 
        return alert("Your basket is empty!"); 
    }
    if (name.length < 3 || !/^\d{10}$/.test(phone) || address.length < 10 || !/^\d{6}$/.test(pin)) {
        return alert("Please check your delivery details (Name, 10-digit Phone, Address, and 6-digit Pincode).");
    }

    // 3. UI Feedback (Show the "Processing" state)
    const btn = document.querySelector('.checkout-btn');
    const originalText = btn.innerText;
    btn.innerText = "Verifying Details...";
    btn.disabled = true;
    btn.style.opacity = "0.7";

    // 4. Prepare Order Data
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemsString = cart.map(item => `${item.name} (x${item.quantity})`).join(', ');
    const orderID = `GW-${Math.floor(1000 + Math.random() * 9000)}`;

    // 5. Save locally for the receipt page (before we leave the site)
    const orderForReceipt = {
        Order_ID: orderID,
        Customer_Name: name,
        Grand_Total: `₹${totalAmount}`,
        Delivery_Address: `${address} - ${pin}`,
        Payment_Method: selectedPayment,
        Items: itemsString 
    };
    localStorage.setItem('last_processed_order', JSON.stringify(orderForReceipt));

    // 6. Create the hidden form for reCAPTCHA compatibility
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formspree.io/f/xaqpgaaq';

    const fields = {
        Order_ID: orderID,
        Customer_Name: name,
        Phone: phone,
        Address: `${address} - ${pin}`,
        Order_Items: itemsString,
        Total_Amount: `₹${totalAmount}`,
        Payment_Method: selectedPayment,
        // Replace with your actual live GitHub URL if it differs
        _next: 'https://pundbhakti99-source.github.io/confirmation.html' 
    };

    for (const key in fields) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = fields[key];
        form.appendChild(input);
    }

    // 7. Brief delay for "Premium feel" then submit
    setTimeout(() => {
        btn.innerText = "Redirecting to Secure Checkout...";
        
        // Finalize state
        cart = [];
        saveCart();
        
        // Submit the form
        document.body.appendChild(form);
        form.submit();
    }, 1200);
}


function simulatePayment() {
    const btn = document.getElementById('mock-paypal-button');
    const originalText = btn.innerHTML;
    btn.innerHTML = "Processing Payment..";
    btn.style.opacity = "0.7";
    btn.style.pointerEvents = "none";

    setTimeout(() => {
        selectedPayment = 'PayPal / Debit Card'; // Sets the method for the receipt
        proceedToCheckout(); // Calls your existing checkout function
        
        // Reset button for next time
        btn.innerHTML = originalText;
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
    }, 1500); 
}
function copyPromo(code) {
    navigator.clipboard.writeText(code);
    alert("Promo code " + code + " copied to clipboard! 🧁");
}
        

function applyDiscount() {
    const code = document.getElementById("promoInput").value.trim().toUpperCase();
    const message = document.getElementById("promoMessage");

    if (code === "GOLDEN20") {
        discountPercent = 0.20; // 20% discount
        message.style.color = "green";
        message.innerText = "Success! 20% discount applied. 🧁";
        updateCartCount();
        renderCart();
    } else {
        discountPercent = 0;
        message.style.color = "red";
        message.innerText = "Invalid code. Please try again.";
       updateCartCount();
        renderCart();
    }
}

