const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav__menu");
const btn = document.querySelectorAll(".btn");

const scrollNav = () => {
  if (window.scrollY > 755) {
    nav.classList.add("nav--colorChange");
  } else {
    nav.classList.remove("nav--colorChange");
  }
};

const clickBtn = (e) => {
  btn.forEach((btn) => {
    btn.classList.remove("btn-ative");
  });
  e.target.classList.add("btn-ative");
  const eventTarget = `.${e.target.innerText.toLowerCase()}`;
  const moveTo = document.querySelector(eventTarget);
  moveTo.scrollIntoView({ behavior: "smooth", block: "start" });
};

document.addEventListener("scroll", scrollNav);
navMenu.addEventListener("click", clickBtn);
