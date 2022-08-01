const body = document.querySelector("body");
const arrowBtn = document.querySelector(".arrow__btn");
const home = document.querySelector(".home__wrapper");

const homeHeight = home.getBoundingClientRect().height;

const scrollPage = () => {
  arrowBtn.style.opacity = window.scrollY / homeHeight;
};

const clickArrowBtn = () => {
  body.scrollIntoView({ behavior: "smooth", block: "start" });
};

document.addEventListener("scroll", scrollPage);
arrowBtn.addEventListener("click", clickArrowBtn);
