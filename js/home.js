const contactBtn = document.querySelector(".home__contact");

const clickContact = () => {
  const target = document.querySelector(".contact");
  target.scrollIntoView({ behavior: "smooth", block: "start" });
};

const scrollHome = () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
};

contactBtn.addEventListener("click", clickContact);
document.addEventListener("scroll", scrollHome);
