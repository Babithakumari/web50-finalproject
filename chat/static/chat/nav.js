document.addEventListener('DOMContentLoaded',function(){

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.addEventListener("click", closeMenu));






function mobileMenu() {
    console.log("nkaaaaaaaaaaaaaaa")
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    console.log(navMenu)
    console.log("innnnnnnnnnnnnnnnn")

}





function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
})
