const hide = document.querySelector("#passwordHide");
const show = document.querySelector("#passwordShow");
const input = document.querySelector("#password");

function toggler(event) {
  const target = event.target;

  if (target === hide || target === show) {
    hide.classList.toggle("hide");
    show.classList.toggle("hide");
    if (target === hide) {
      input.type = "text";
    } else {
      input.type = "password";
    }
  }
}

document.addEventListener("click", toggler);
