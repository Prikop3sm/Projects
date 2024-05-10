const slider = document.querySelector(".slider__scroll");
const sliderWidth = slider.offsetWidth;
const form = document.querySelector(".slider__form");
const formWidth = form.offsetWidth;
const items = document.querySelectorAll(".customer__content-item");
let isMouseDown = false;

function flag(event) {
  if (!event?.target?.classList.contains("slider__scroll")) return;
  isMouseDown = true;

  document.addEventListener("pointermove", sliderMover);
}

function noFlag() {
  isMouseDown = false;
  document.removeEventListener("pointermove", sliderMover);
}

function sliderMover(event) {
  if (!isMouseDown) return;
  event.preventDefault();

  let sliderLeft =
    event.clientX - form.getBoundingClientRect().left - sliderWidth / 2;

  if (sliderLeft < 0) {
    sliderLeft = 0;
  } else if (sliderLeft > formWidth - sliderWidth) {
    sliderLeft = formWidth - sliderWidth;
  }

  slider.style.left = sliderLeft + "px";

  items.forEach((item) => {
    item.style.right = sliderLeft * (items[0].offsetWidth / 95) + "px";
  });
}

document.addEventListener("pointerdown", flag);
document.addEventListener("pointerup", noFlag);
