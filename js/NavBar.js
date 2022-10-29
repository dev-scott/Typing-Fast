
const navToggler = document.querySelector(".btn_toggle");
navToggler.addEventListener("click", navToggle);

function navToggle() {
    console.log("click");
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".contain_nav");
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
        nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else {
        nav.removeAttribute("style");
    }
}

