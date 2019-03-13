//Select UI Items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

const navItems = document.querySelectorAll(".nav-item");

//Initial state of menu

var showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");

    navItems.forEach(item => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");

    navItems.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}

//Changing background image

var backgrounds = new Array(
  "../img/background.jpg",
  "../img/background2.jpg",
  "../img/background3.jpg"
);

var slider = setInterval(function() {
  document
    .getElementsByClassName("bg-img")[0]
    .setAttribute("style", 'background-image: url("' + backgrounds[0] + '")');
  backgrounds.splice(backgrounds.length, 0, backgrounds[0]);
  backgrounds.splice(0, 1);
}, 10000);
