function toggleMenu() {
    var menu = document.querySelector('.dropdown-menu');
    var body = document.querySelector('body');
    var bodyAll = document.querySelector('.body-all');

    menu.classList.toggle('show');
    bodyAll.classList.toggle('blur-background');
    closeAllSubMenus();

    if (menu.classList.contains('show')) {
        body.classList.add('no-scroll');
    } else {
        body.classList.remove('no-scroll');
    }
}
function openSubMenu(subMenuId) {
    document.getElementById('main-menu').style.display = 'none';

    document.getElementById(subMenuId).style.display = 'block';

    document.getElementById('menu-title').innerHTML = '<i id="back-arrow" class="fas fa-chevron-right" onclick="closeSubMenu()"></i> الرجوع';
}
function closeSubMenu() {
    closeAllSubMenus();

    document.getElementById('main-menu').style.display = 'block';

    document.getElementById('menu-title').innerHTML = 'القائمة الرئيسية';
}

function closeAllSubMenus() {
    var subMenus = document.querySelectorAll('.dropdown-menu ul');
    subMenus.forEach(function(subMenu) {
        subMenu.style.display = 'none';
    });

    document.getElementById('main-menu').style.display = 'block';

    var menuTitle = document.getElementById('menu-title');
    menuTitle.textContent = 'القائمة الرئيسية';

    var backArrow = document.getElementById('back-arrow');
    if (backArrow) {
        backArrow.style.display = 'none';
    }
}

// add to favortion button toggle
const toggleBtn = document.querySelectorAll("[data-toggle-btn]");
// Toggle button state and save to localStorage
toggleBtn.forEach((btn, index) => {
    // Check localStorage to set initial state
    const savedState = localStorage.getItem(`btnState-${index}`);
    if (savedState === 'fa-solid') {
        btn.classList.remove('fa-regular');
        btn.classList.add('fa-solid');
    } else {
        btn.classList.remove('fa-solid');
        btn.classList.add('fa-regular');
    }
    // Toggle and save state on click
    btn.addEventListener("click", () => {
        if (btn.classList.contains('fa-regular')) {
            btn.classList.replace('fa-regular', 'fa-solid');
            localStorage.setItem(`btnState-${index}`, 'fa-solid');
        } else {
            btn.classList.replace('fa-solid', 'fa-regular');
            localStorage.setItem(`btnState-${index}`, 'fa-regular');
        }
        
        const notificationSoundTwo = document.getElementById('notification-sound-two');
        notificationSoundTwo.play();
    });
});



const bagshopping =document.querySelector(".fa-bag-shopping");
document.addEventListener('DOMContentLoaded', function() {
    const cartCountElement = document.getElementById('cart-count');
    const savedCount = localStorage.getItem('cartCount');
    if (savedCount) {
        cartCountElement.textContent = savedCount;
    } else {
        cartCountElement.textContent = '0'; // تأكيد أن العدد يبدأ من الصفر إذا لم يكن هناك قيمة محفوظة
    }
    // إضافة حدث عند الضغط على زر الإضافة للسلة
    document.querySelectorAll('.add-to-cart-js').forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            // تحديث عدد السلة
            const currentCount = parseInt(cartCountElement.textContent);
            const newCount = currentCount + 1;
            cartCountElement.textContent = newCount;

            // حفظ العدد في localStorage
            localStorage.setItem('cartCount', newCount);

            // تشغيل صوت الإشعار
            const notificationSound = document.getElementById('notification-sound');
            notificationSound.play();
        });
        bagshopping.addEventListener("click", () => {
            localStorage.removeItem('cartCount');
            cartCountElement.textContent = '0';
        })
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('no-scroll');
});
window.addEventListener("load", function() {
    const loader = document.querySelector(".spinner-contuner");
    const body = document.querySelector("body");
    
    loader.classList.add('hidden');
    body.classList.remove('no-scroll');
});
const chatWidget = document.getElementById('chatWidget');
const whatsappBtn = document.querySelector('.whatsapp-btn');
const closeChat = document.getElementById('closeChat');

// Show the chat widget when WhatsApp button is clicked
whatsappBtn.addEventListener('click', () => {
    chatWidget.style.display = 'block';
});
// Hide the chat widget when the close button is clicked
closeChat.addEventListener('click', () => {
    chatWidget.style.display = 'none';
});


const notifications = document.querySelector('.notifications'); 
const successButtons = document.querySelectorAll('.success'); 

function createtoast(type, icon, title, text) {
    const newToast = document.createElement('div');
    newToast.innerHTML = `
        <div class="toast ${type}">
            <i class="${icon}"></i>
            <div class="content">
                <div class="title">${title}</div>
                <span>${text}</span>
            </div>
            <i class="fa-solid fa-xmark" onclick="this.parentElement.remove()"></i>
        </div>`;
    notifications.appendChild(newToast);
    newToast.timeout = setTimeout(
        () => newToast.remove(), 5000
    );
}

successButtons.forEach(button => {
    button.addEventListener('click', function() {
        const type = 'success';
        const icon = 'fa-solid fa-circle-check';
        const title = '';
        const text = 'تم إضافة المنتج في السلة';
        createtoast(type, icon, title, text);
    });
});


const quantitySpan = document.getElementById('quantity');
const minusBtn = document.getElementById('minusBtn');
const plusBtn = document.getElementById('plusBtn');

minusBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantitySpan.textContent);
    if (currentValue > 0) {
        quantitySpan.textContent = currentValue - 1;
    }
});

plusBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantitySpan.textContent);
    if (currentValue < 50) {
        quantitySpan.textContent = currentValue + 1;
    }
});
