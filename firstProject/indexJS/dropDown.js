const dropdown = document.querySelector(".purchase__right-dropdown");
const selected = document.querySelector(".purchase__right-selected");
const caret = document.querySelector(".purchase__right-caret");
const menu = document.querySelector(".purchase__right-menu");
const fill = document.querySelector("#purple_fill");
const defaultFill = fill.getBoundingClientRect().width;
const price = document.querySelector(".purchase__item-price-text");
const defaultPrice = document
  .querySelector(".purchase__item-price-text")
  .innerText.slice(1, -3);

function menuShower(event) {
  const target = event.target;

  if (target?.closest(".purchase__right-dropdown")) {
    menu.classList.toggle("purchase__right-menu-open");
    caret.classList.toggle("purchase__right-caret-rotate");
  }
}

function menuPicker(event) {
  const target = event.target;
  const active = document.querySelector(".purchase__right-active");

  if (target?.closest("li")) {
    active.classList.toggle("purchase__right-active");
    target.closest("li").classList.toggle("purchase__right-active");
    selected.innerText = target.innerText;
  }

  switch (selected.innerText) {
    case "Week":
      fill.style.width = defaultFill / 2 / 12 / 4 + "px";
      price.innerText = `$${Math.round(defaultPrice / 2 / 12 / 4)}.00`;
      break;
    case "Month":
      fill.style.width = defaultFill / 2 / 12 + "px";
      price.innerText = `$${Math.round(defaultPrice / 2 / 12)}.00`;
      break;
    case "6 Months":
      fill.style.width = defaultFill / 2 / 2 + "px";
      price.innerText = `$${Math.round(defaultPrice / 2 / 2)}.00`;
      break;
    case "Year":
      fill.style.width = defaultFill / 2 + "px";
      price.innerText = `$${Math.round(defaultPrice / 2)}.00`;
      break;
    case "2 Years":
      fill.style.width = defaultFill + "px";
      price.innerText = `$${Math.round(defaultPrice)}.00`;
      break;
  }
}

document.addEventListener("click", menuShower);
document.addEventListener("click", menuPicker);
