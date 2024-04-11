const pluses = document.querySelectorAll("#plus");
const texts = document.querySelectorAll(".questions__list-hiddentext");

function dropdown(event) {
  const target = event.target;

  switch (target) {
    case pluses[0]:
      texts[0].classList.toggle("dropdownOpen");
      break;
    case pluses[1]:
      texts[1].classList.toggle("dropdownOpen");
      break;
    case pluses[2]:
      texts[2].classList.toggle("dropdownOpen");
      break;
    case pluses[3]:
      texts[3].classList.toggle("dropdownOpen");
      break;
    case pluses[4]:
      texts[4].classList.toggle("dropdownOpen");
      break;
  }
}

document.addEventListener("click", dropdown);
