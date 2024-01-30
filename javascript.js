// SHOW MENU
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu");
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu");
    })
}

// REMOVE MENU ON CLICK
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener('click', linkAction));
