const items = document.querySelectorAll(".articles__main-item");
const leftArrow = document.querySelector("#leftArrow");
const rightArrow = document.querySelector("#rightArrow");
leftArrow.style.opacity = 0.5;
let pos;

items.forEach((elem) => {
  pos = elem.style.left;
  elem.style.left = 0 + "px";
});

function galleryMove(event) {
  const target = event.target;
  const width = +items[0].getBoundingClientRect().width;
  console.log(width);

  pos = +items[0].style.left.slice(0, items[0].style.left.length - 2);

  if (target === rightArrow && pos > -(width * 3 + 46)) {
    items.forEach((elem) => {
      elem.style.left = pos - width - 15 + "px";
    });
    rightArrow.style.opacity = 1;
    leftArrow.style.opacity = 1;
    console.log(pos);

    if (pos === -(width * 3 + 45)) {
      console.log("asd");
      rightArrow.style.opacity = 0.5;
    }
  } else if (target === leftArrow && pos < -1) {
    items.forEach((elem) => {
      elem.style.left = pos + width + 15 + "px";
    });
    leftArrow.style.opacity = 1;
    rightArrow.style.opacity = 1;

    if (pos === -width - 15) {
      leftArrow.style.opacity = 0.5;
    }
  }
}

document.addEventListener("click", galleryMove);
