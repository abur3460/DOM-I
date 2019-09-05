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

// nav
// class selector
const navClass = document.querySelectorAll('nav')
// anchor selector
const navText = document.querySelectorAll('a');

// change all nav text to green
for (let i = 0; i < navText.length; i++) {
  navText[i].style.color = "green";
  // item content iterated
  navText[i].textContent = siteContent['nav'][`nav-item-${i + 1}`]
}

// cta
// class selector
const ctaClass = document.querySelectorAll('.cta')

  // h1
  const ctaH1 = document.querySelector('h1');
  ctaH1.textContent = siteContent['cta']['h1'];

  // button
  const ctaButton = document.querySelector('button');
  ctaButton.textContent = siteContent['cta']['button'];

  // img
  const ctaImg = document.querySelector("#cta-img");
  ctaImg.src= siteContent["cta"]["img-src"];

// main-content 
// class selector
const mainClass = document.querySelectorAll('.main-content')
// heading selector
const mainHeading = document.querySelectorAll('.main-content h4');
// content selector
const mainParagraphs= document.querySelectorAll('.main-content p');
// image selector
const middleImg = document.querySelector('#middle-img');

for(let i = 0; i < mainParagraphs.length; i++){
  let section = '';
  switch(i){
    case 0: section = 'features'
    case 1: section = 'about'
    case 2: section = 'services'
    case 3: section = 'product'
    case 4: section = 'vision'
  }
  mainHeading[i].textContent = siteContent["main-content"][`${section}-h4`]
  mainParagraphs[i].textContent = siteContent["main-content"][`${section}-content`]

  // img
  middleImg.src = siteContent["main-content"]["middle-img-src"];
}

// contact
// class selector
const contactClass = document.querySelectorAll('.contact')

// heading selector
const contactH1 = document.querySelector('.contact h4');
// content selector
const contactParagraphs = document.querySelectorAll('.contact p')

  // heading
  contactH1.textContent = siteContent['contact']['contact-h4'];

  // content
  contactParagraphs[0].textContent = siteContent['contact']['address']
  contactParagraphs[1].textContent = siteContent['contact']['phone']
  contactParagraphs[2].textContent = siteContent['contact']['email']

// footer
// content selector
const footerParagraphs = document.querySelector('footer p')

// content
footerParagraphs.textContent = siteContent['footer']['copyright']

// new nav items
const navBar = document.querySelector ('nav');

const firstAnchor = document.createElement('a');
firstAnchor.setAttribute("href", "#");
firstAnchor.textContent = 'to the front..';
firstAnchor.style.color = 'green';
console.log(firstAnchor)

const lastAnchor = document.createElement('a');
lastAnchor.setAttribute("href", "#");
lastAnchor.textContent = 'and the back.';
lastAnchor.style.color = 'green';
console.log(lastAnchor)

// append new items
navBar.prepend(firstAnchor);
navBar.append(lastAnchor);
