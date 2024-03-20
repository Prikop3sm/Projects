const slider = document.querySelector(".slider__scroll");
const sliderWidth = slider.getBoundingClientRect().width;
const form = document.querySelector(".slider__form");
const formWidth = form.getBoundingClientRect().width;
const items = document.querySelectorAll(".customer__content-item");

function flag(event) {
  if (!event?.target?.classList.contains("slider__scroll")) return;

  document.addEventListener("pointermove", sliderMover);
}

function noFlag(event) {
  document.removeEventListener("pointermove", sliderMover);
}

function sliderMover(event) {
  const target = event.target;
  event.preventDefault();

  event.clientX - formWidth + sliderWidth / 2 < 0
    ? (slider.style.left = 0 + "px")
    : event.clientX - formWidth + sliderWidth / 2 > 699 - sliderWidth
    ? (slider.style.left = 699 - sliderWidth + "px")
    : (slider.style.left = event.clientX - formWidth + sliderWidth / 2 + "px");

  items.forEach((item) => {
    item.style.right = slider.style.left.slice(0, -2) * 5.6 + "px";
  });
}

document.addEventListener("pointerdown", flag);
document.addEventListener("pointerup", noFlag);
