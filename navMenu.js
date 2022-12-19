const navButton = document.querySelector(".ham-menu-icon");
const navMenu = document.querySelector(".header__nav");


navButton.addEventListener("click", (event) => {

    navMenu.classList.toggle("show-menu");
    let classArray = Array.from(navMenu.classList);

    if (classArray.indexOf("show-menu") > 0) {
        navButton.style.position = "fixed";
        navButton.style.top = "20px";
        navButton.style.right = "20px";
    }else {
        navButton.style.position = "relative";
        navButton.style.top = "0px";
        navButton.style.right = "0px";
    }
})