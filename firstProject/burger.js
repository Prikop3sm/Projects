const burger = document.querySelector(".header__burger");
const header = document.querySelector(".header");

function burgerOpener(event) {
  const target = event.target;

  if (target.closest("button") !== burger) return;

  header.classList.toggle("open");
}

document.addEventListener("click", burgerOpener);
