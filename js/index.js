const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navigation
let nav1 = document.querySelector
('nav > a:nth-child(1)');
nav1.textContent = siteContent.nav
['nav-item-1']

let nav2 = document.querySelector
('nav > a:nth-child(2)');
nav2.textContent = siteContent.nav
['nav-item-2']

let nav3 = document.querySelector
('nav > a:nth-child(3)');
nav3.textContent = siteContent.nav
['nav-item-3']

let nav4 = document.querySelector
('nav > a:nth-child(4)');
nav4.textContent = siteContent.nav
['nav-item-4']

let nav5 = document.querySelector
('nav > a:nth-child(5)');
nav5.textContent = siteContent.nav
['nav-item-5']

let nav6 = document.querySelector
('nav > a:nth-child(6)');
nav6.textContent = siteContent.nav
['nav-item-6']

//CTA
let title = document.querySelector('h1');
title.textContent = 'DOM IS AWESOME'
let button = document.querySelector('button');
button.textContent = 'Get Started'
let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src' ,siteContent['cta']['img-src'])

//Main Content
let features = document.querySelector('.top-content .text-content:nth-child(1) h4');
features.textContent = siteContent['main-content']['features-h4'];

let featuresContent = document.querySelector('.top-content .text-content:nth-child(1) p');
featuresContent.textContent = siteContent['main-content']['features-content'];

let about = document.querySelector('.top-content .text-content:nth-child(2) h4');
about.textContent = siteContent['main-content']['about-h4'];

let aboutContent = document.querySelector('.top-content .text-content:nth-child(2) p');
aboutContent.textContent = siteContent['main-content']['about-content'];

let middleImage = document.querySelector('.middle-img')
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src'])

let services = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
services.textContent = siteContent['main-content']['services-h4'];

let servicesContent = document.querySelector('.bottom-content .text-content:nth-child(1) p');
servicesContent.textContent = siteContent['main-content']['services-content'];

let product = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
product.textContent = siteContent['main-content']['product-h4'];

let productContent = document.querySelector('.bottom-content .text-content:nth-child(2) p');
productContent.textContent = siteContent['main-content']['product-content'];

let vision = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
vision.textContent = siteContent['main-content']['vision-h4'];

let visionContent = document.querySelector('.bottom-content .text-content:nth-child(3) p');
visionContent.textContent = siteContent['main-content']['vision-content'];

//Contact
let contact = document.querySelector('.contact h4');
contact.textContent = siteContent['contact']['contact-h4']

let contactContent = document.querySelectorAll('.contact p');
contactContent[0].textContent = siteContent['contact']['address'];
contactContent[1].textContent = siteContent['contact']['phone'];
contactContent[2].textContent = siteContent['contact']['email'];

//Footer
let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];

//Nav Color
let navColor = document.querySelectorAll('nav a');
navColor[0].style.color = 'green';
navColor[1].style.color = 'green';
navColor[2].style.color = 'green';
navColor[3].style.color = 'green';
navColor[4].style.color = 'green';
navColor[5].style.color = 'green';

//Nav Additions
let navBar = document.querySelector('nav');
let newNav = document.createElement('a');
newNav.textContent = "New Nav";
newNav.setAttribute('href', '#')
newNav.style.color = 'green';
navBar.prepend(newNav);

let newNav2 = document.createElement('a');
newNav2.textContent = 'New Nav 2';
newNav2.setAttribute('href', '#');
newNav2.style.color = 'green';
navBar.appendChild(newNav2);