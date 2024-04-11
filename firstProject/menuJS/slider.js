const form = document.querySelector(".weekend__form");
const formWidth = form.getBoundingClientRect().width;
let formLeft = form.getBoundingClientRect().left;

const slider = document.querySelector("#slider");
const sliderWidth = slider.getBoundingClientRect().width;

const options = document.querySelectorAll(".weekend__price-options > li");
const points = [];

function flag(event) {
  if (!event?.target?.closest("#slider")) return;

  document.addEventListener("pointermove", sliderMover);
}

function noFlag() {
  document.removeEventListener("pointermove", sliderMover);
}

function sliderMover(event) {
  event.preventDefault();

  if (event.clientX < points[0] + (points[1] - points[0]) / 2) {
    slider.style.left = points[0] - formLeft + "px";
    console.log(event.clientX, points[0], (points[1] - points[0]) / 2);
  } else if (
    event.clientX > points[0] + (points[1] - points[0]) / 2 &&
    event.clientX < points[1] + (points[2] - points[1]) / 2
  ) {
    slider.style.left = points[1] - formLeft + "px";
  } else if (
    event.clientX > points[1] + (points[2] - points[1]) / 2 &&
    event.clientX < points[2] + (points[3] - points[2]) / 2
  ) {
    slider.style.left = points[2] - formLeft + "px";
  } else if (
    event.clientX > points[2] + (points[3] - points[2]) / 2 &&
    event.clientX < points[3] + (points[4] - points[3]) / 2
  ) {
    slider.style.left = points[3] - formLeft + "px";
  } else if (
    event.clientX > points[3] + (points[4] - points[3]) / 2 &&
    event.clientX < points[4] + (points[5] - points[4]) / 2
  ) {
    slider.style.left = points[4] - formLeft + "px";
  } else if (event.clientX > points[4] + (points[5] - points[4]) / 2) {
    slider.style.left = points[5] - formLeft + "px";
  }
}

options.forEach((elem) => {
  points.push(
    Math.round(elem.getBoundingClientRect().left) +
      Math.round(elem.getBoundingClientRect().width / 2)
  );
});
slider.style.left = points[0] - formLeft + "px";

document.addEventListener("pointerdown", flag);
document.addEventListener("pointerup", noFlag);