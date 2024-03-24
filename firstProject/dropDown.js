const dropdown = document.querySelector(".purchase__right-dropdown");
const selected = document.querySelector(".purchase__right-selected");
const caret = document.querySelector(".purchase__right-caret");
const menu = document.querySelector(".purchase__right-menu");
const options = document.querySelectorAll(".purchase__right-menu li");

function menuShower(event) {
  const target = event.target;

  if (target?.closest(".purchase__right-dropdown")) {
    menu.classList.toggle("purchase__right-menu-open");
    caret.classList.toggle("purchase__right-caret-rotate");
  }
}

function menuPicker(event) {
  const active = document.querySelector(".purchase__right-active");
  const target = event.target;

  if (target?.closest("li")) {
    active.classList.toggle("purchase__right-active");
    target.closest("li").classList.toggle("purchase__right-active");
    selected.innerText = target.innerText;
  }
}

document.addEventListener("click", menuShower);
document.addEventListener("click", menuPicker);
