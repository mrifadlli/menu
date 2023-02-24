
// // hamburger
// const hamburger = document.querySelector('#hamburger');
// const navMenu = document.querySelector('#nav-menu');

// hamburger.addEventListener('click', function () {
//     hamburger.classList.toggle('hamburger-active');
//     navMenu.classList.toggle('hidden');
// });


// // navbar
// const hamber = document.querySelector('#hamber')

// hamber.addEventListener('click', function() {
//     hamburger.classList.remove('hamburger-active');
//     navMenu.classList.add('hidden');
// });


// // fixedNavbar
// window.onscroll = function() {
//     const header = document.querySelector('header');
//     const fixedNav = header.offsetTop;

//     if (window.pageYOffset > fixedNav) {
//         header.classList.add('navbar-fixed');

//     } else {
//         header.classList.remove("navbar-fixed");    
//     }
// };

// Trial
// Gets the Mobile Nav icon by its ID
// let bars = document.getElementById('bars');

// // Gets the Mobile Nav container
// let mobileMenu = document.getElementById('mobileMenu');

// // Displays the Mobile Nav when clicked and changes the Nav Icon from three bars to an 'X'
// bars.addEventListener('click', function(){
//   mobileMenu.classList.toggle('show');
//   bars.classList.toggle('fa-times');
// });

const btnToogle = document.querySelector('.btnToggle');
const mobileMenu = document.querySelector('.mobileMenu');

btnToogle.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
});

const menuHead = document.querySelector('.menuHead');
const menuList = document.querySelector('.menuList');

menuHead.addEventListener('mouseover', function () {
    menuList.classList.toggle('hidden');
});