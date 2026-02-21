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

let searchTimeout = null;

function handleSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const term = document.getElementById("searchInput").value.toLowerCase();

        // Show the menu
        document.getElementById("menu").style.display = "block";

        // Remove 'active' highlight from category buttons
        document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
        document.getElementById('btn-all').classList.add('active');

        // Filter products based on search term
        const matches = products.filter(p => 
            p.name.toLowerCase().includes(term) || 
            p.cat.toLowerCase().includes(term)
        );

        // Render filtered products
        renderProducts(matches);

        // Optional: highlight matched text in product names
        highlightText(term);
    }, 300); // debounce delay
}

// 2. Filter & Render

function filterCategory(cat, event) {

    document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));

    if(event) event.target.classList.add('active');

    else document.getElementById(`btn-${cat}`).classList.add('active');



    const filtered = (cat === 'all') ? products : products.filter(p => p.cat === cat);

    renderProducts(filtered);

}
// 3. Modal Logic

function openModal(name) {

    const p = products.find(item => item.name === name);
    document.getElementById("m-name").innerText = p.name;
document.getElementById("m-img").src = p.img;
document.getElementById("m-img").alt = p.name;
document.getElementById("m-price").innerText = `₹${p.price}`;
document.getElementById("m-buy-price").innerText = `₹${p.price}`;
document.getElementById("m-desc").innerText = p.desc;

    if(!p) return;

    activeItem = p;



    // ... your existing text updates (name, img, price, etc.) ...



    // Reset Recommendation Scroll to start

    const recGrid = document.getElementById("recGrid");

    recGrid.scrollLeft = 0; 



    // Filter and Render Recommendations (Updated for swipe)

    const suggestions = products

        .filter(item => item.cat === p.cat && item.name !== p.name)

        .sort(() => 0.5 - Math.random())

        .slice(0, 5); // Increased to 5 to make the scroll visible



    recGrid.innerHTML = suggestions.map(s => `

        <div class="rec-item" onclick="openModal('${s.name.replace(/'/g, "\\'")}')">

            <img src="${s.img}" alt="${s.name}">

            <p>${s.name}</p>

        </div>

    `).join('');



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

        toggleCart();

    } else {

        alert("Added to basket!");

        closeModal();

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



function renderProducts(items) {

    const grid = document.getElementById("productGrid");

    grid.innerHTML = items.map(p => {

        const rate = (Math.random() * (5 - 4.5) + 4.5).toFixed(1);

        return `

            <div class="p-card" onclick="openModal('${p.name.replace(/'/g, "\\'")}')">

                <img src="${p.img}" alt="${p.name}">

                <div class="rating">★★★★★ <span>(${rate})</span></div>

                <h3>${p.name}</h3>

                <p class="p-price">₹${p.price}</p>

            </div>

        `;

    }).join('');

}

let debounceTimeout;

function handleSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const term = document.getElementById("searchInput").value.toLowerCase();

        // Show the menu
        document.getElementById("menu").style.display = "block";

        // Hide main content (homepage)
        const mainContent = document.getElementById('mainContent');
        if (mainContent) {
            mainContent.style.display = 'none';
        }

        // Remove 'active' highlight from category buttons
        document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
        document.getElementById('btn-all').classList.add('active');

        // Filter products based on search term
        const matches = products.filter(p => 
            p.name.toLowerCase().includes(term) || 
            p.cat.toLowerCase().includes(term)
        );

        // Render only the filtered products
        renderProducts(matches);

        // Highlight matched text
        highlightText(term);
    }, 300); // debounce delay
}
function clearSearch() {
    document.getElementById("searchInput").value = '';
    // Show the homepage or main content again
    const mainContent = document.getElementById('mainContent');
    if (mainContent) {
        mainContent.style.display = 'block';
    }
    // Show all products or default view
    renderProducts(products);
}
function highlightText(text, term) {
  if (!term) return text;
  const regex = new RegExp(`(${term})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

function renderProducts(items, searchTerm = "") {
  const grid = document.getElementById("productGrid");
  if (items.length === 0) {
    grid.innerHTML = `<p style="text-align:center; color:#888;">No results found.</p>`;
    return;
  }
  grid.innerHTML = items.map(p => {
    const rate = (Math.random() * (5 - 4.5) + 4.5).toFixed(1);
    return `
      <div class="p-card" onclick="openModal('${p.name.replace(/'/g, "\\'")}')">
        <img src="${p.img}" alt="${p.name}">
        <div class="rating">★★★★★ <span>(${rate})</span></div>
        <h3>${highlightText(p.name, searchTerm)}</h3>
        <p class="p-price">₹${p.price}</p>
      </div>
    `;
  }).join('');
}
