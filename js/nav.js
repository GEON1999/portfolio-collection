const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav__menu");
const navLogo = document.querySelector(".nav__logo");
const mobileBtn = document.querySelector(".mobile__menu__btn__icon");
const mobileMenu = document.querySelector(".nav__menu");

const scrollNav = () => {
  if (window.scrollY > 750) {
    nav.classList.add("nav--colorChange");
  } else {
    nav.classList.remove("nav--colorChange");
  }
};

const clickBtn = (e) => {
  const eventTarget = `.${e.target.innerText.toLowerCase()}`;
  const moveTo = document.querySelector(eventTarget);
  moveTo.scrollIntoView({ behavior: "smooth", block: "start" });
  mobileMenu.classList.remove("nav__menu--open");
};

const handleNavLogo = () => {
  body.scrollIntoView({ behavior: "smooth", block: "start" });
};

const handelMobileBtn = () => {
  mobileMenu.classList.toggle("nav__menu--open");
};

document.addEventListener("scroll", scrollNav);
navMenu.addEventListener("click", clickBtn);
navLogo.addEventListener("click", handleNavLogo);
mobileBtn.addEventListener("click", handelMobileBtn);
