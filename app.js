// items & info reviews...
const itemInfo = [
    {
        id: 1,
        imgM: 'images/mobile-image-hero-1.jpg',
        imgD: 'images/desktop-image-hero-1.jpg',
        title: 'Discover innovative ways to decorate',
        info: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        id: 2,
        imgM: 'images/mobile-image-hero-2.jpg',
        imgD: 'images/desktop-image-hero-2.jpg',
        title: 'We are available all across the globe',
        info: "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        id: 3,
        imgM: 'images/mobile-image-hero-3.jpg',
        imgD: 'images/desktop-image-hero-3.jpg',
        title: 'Manufactured with the best materials',
        info: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    },
];

// Get UI Variables...

// nav variables for mobile...
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const navContainer = document.querySelector('.nav-container');

const itemImageM = document.getElementById('item-img-m');
const itemImageD = document.getElementById('item-img-d');
const titleText = document.getElementById('title');
const infoText = document.getElementById('info');

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// ***********EVENT LISTENERS*************
openBtn.addEventListener('click', showLink);
closeBtn.addEventListener('click', hideLink);
nextBtn.addEventListener('click', nextItem);
prevBtn.addEventListener('click', prevItem);


// set starting item...
let currentItem = 0;

// Load Initial Item...
window.addEventListener('DOMContentLoaded', function () {
  showPerson();
});

// show person based on currentItem/item function...
function showPerson() {
  const item = itemInfo[currentItem];
    itemImageM.src = item['imgM'];
    itemImageD.srcset = item['imgD'];
    titleText.textContent = item['title'];
    infoText.textContent = item['info'];
};


// *************FUNCTIONS****************
// showLink function here...
function showLink() {
    navContainer.classList.add('menu-active');
}

// hideLink function here...
function hideLink() {
    navContainer.classList.remove('menu-active');
}

// show next item...
function nextItem() {
    currentItem++;
    if (currentItem > itemInfo.length - 1) {
        currentItem = 0
    }
    showPerson();
}

// prev next item...
function prevItem() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = itemInfo.length - 1;
    }
    showPerson();
}
