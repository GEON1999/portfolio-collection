const jsBtn = document.querySelector(".js__btn");
const reactBtn = document.querySelector(".react__btn");
const cssBtn = document.querySelector(".css__btn");
const allBtn = document.querySelector(".all__btn");
const projectItems = document.querySelectorAll(".projects__box");

const projectItemAppear = [
  { transform: "scale(0.5) translateY(-100px)" },
  { transform: "scale(1) translateY(0px)" },
];

const projectItemTiming = {
  duration: 300,
  iterations: 1,
};

const handleJsBtn = () => {
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
  projectItems.forEach((item) => {
    if (item.dataset.skills === "react") {
      item.style.display = "block";
      item.animate(projectItemAppear, projectItemTiming);
    } else {
      item.style.display = "none";
    }
  });
};

const handleCssBtn = () => {
  projectItems.forEach((item) => {
    if (item.dataset.skills === "css") {
      item.style.display = "block";
      item.animate(projectItemAppear, projectItemTiming);
    } else {
      item.style.display = "none";
    }
  });
};

const handleAllBtn = () => {
  projectItems.forEach((item) => {
    item.style.display = "block";
    item.animate(projectItemAppear, projectItemTiming);
  });
};

jsBtn.addEventListener("click", handleJsBtn);
reactBtn.addEventListener("click", handleReactBtn);
cssBtn.addEventListener("click", handleCssBtn);
allBtn.addEventListener("click", handleAllBtn);
