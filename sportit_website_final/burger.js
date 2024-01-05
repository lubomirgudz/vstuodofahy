
// JavaScript for Burger Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
    var burgerMenu = document.querySelector('.burger-menu');
    var mobileNav = document.querySelector('.mobile-nav');

    burgerMenu.addEventListener('click', function () {
        mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
    });
});
