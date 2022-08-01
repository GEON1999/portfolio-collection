const contactBtn = document.querySelector(".home__contact");
const home = document.querySelector(".home__wrapper");

const homeHeight = home.getBoundingClientRect().height;

const clickContact = () => {
  const target = document.querySelector(".contact");
  target.scrollIntoView({ behavior: "smooth", block: "start" });
};

const scrollHome = () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
};

contactBtn.addEventListener("click", clickContact);
document.addEventListener("scroll", scrollHome);
