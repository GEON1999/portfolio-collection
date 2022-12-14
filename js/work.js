const jsBtn = document.querySelector(".js__btn");
const reactBtn = document.querySelector(".react__btn");
const allBtn = document.querySelector(".all__btn");
const projectItems = document.querySelectorAll(".projects__box");
const menuBtn = document.querySelectorAll(".menu__item");

const projectItemAppear = [
  { transform: "scale(0.5) translateY(-100px)" },
  { transform: "scale(1) translateY(0px)" },
];

const projectItemTiming = {
  duration: 300,
  iterations: 1,
};

const handleJsBtn = () => {
  menuBtn.forEach((btn, index) => {
    btn.classList.remove("menu__ative");
    if (index == 1) {
      btn.classList.add("menu__ative");
    }
  });

  projectItems.forEach((item) => {
    if (item.dataset.skills === "js") {
      item.style.display = "block";
      item.animate(projectItemAppear, projectItemTiming);
    } else {
      item.style.display = "none";
    }
  });
};
const handleReactBtn = () => {
  menuBtn.forEach((btn, index) => {
    btn.classList.remove("menu__ative");
    if (index == 2) {
      btn.classList.add("menu__ative");
    }
  });
  projectItems.forEach((item) => {
    if (item.dataset.skills === "react&next") {
      item.style.display = "block";
      item.animate(projectItemAppear, projectItemTiming);
    } else {
      item.style.display = "none";
    }
  });
};

const handleAllBtn = () => {
  menuBtn.forEach((btn, index) => {
    btn.classList.remove("menu__ative");
    if (index == 0) {
      btn.classList.add("menu__ative");
    }
  });
  projectItems.forEach((item) => {
    item.style.display = "block";
    item.animate(projectItemAppear, projectItemTiming);
  });
};

jsBtn.addEventListener("click", handleJsBtn);
reactBtn.addEventListener("click", handleReactBtn);
allBtn.addEventListener("click", handleAllBtn);
