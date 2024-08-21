/* Navbar Logic */
const navMenu = document.querySelector(".navbar-menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const iconMenu = document.querySelector(".icon-menu");
const iconClose = document.querySelector(".icon-close");

hamburgerMenu.addEventListener("click", displayMenu);
navMenu.addEventListener("click", displayMenu);

function displayMenu() {
  if (navMenu.classList.contains("display-menu")) {
    navMenu.classList.remove("display-menu");
    iconMenu.style.display = "inline";
    iconClose.style.display = "none";
  } else {
    navMenu.classList.add("display-menu");
    iconMenu.style.display = "none";
    iconClose.style.display = "inline";
  }
}
