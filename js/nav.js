const nav = document.querySelector(".nav");

document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 755) {
    nav.classList.add("nav--colorChange");
  } else {
    nav.classList.remove("nav--colorChange");
  }
});
