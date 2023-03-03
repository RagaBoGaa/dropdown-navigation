// ========= Setup elements
const arrowOne = document.querySelector(".arrow1");
const arrowTwo = document.querySelector(".arrow2");
const secondList = document.querySelector(".second-list");
const thirdList = document.querySelector(".third-list");
const firstLi = document.querySelector(".first-li");
const secondLi = document.querySelector(".second-li");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

// ========= Events
menu.addEventListener("click", () => {
  menu.classList.toggle("close");
  navbar.classList.toggle("active");
  menu.classList.contains("close")
    ? (menu.src = "images/icon-close-menu.svg")
    : (menu.src = "images/icon-menu.svg");
});

firstLi.addEventListener("click", () => {
  show(arrowOne, secondList);
});

secondLi.addEventListener("click", () => {
  show(arrowTwo, thirdList);
});

// ========= Functions
function show(e, li) {
  e.classList.toggle("up");
  li.style = "display:block";
  if (e.classList.contains("up")) {
    e.src = "images/icon-arrow-up.svg";
  } else {
    e.src = "images/icon-arrow-down.svg";
    li.style = "display:none";
  }
}
