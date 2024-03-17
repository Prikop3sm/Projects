const modal = document.createElement("div");
const body = document.getElementsByTagName("body")[0];

function notificationAdder(event) {
  const target = event.target;
  if (target?.closest("button")?.classList.contains("favorite")) {
    console.log("asd");
  }
}

document.addEventListener("click", notificationAdder);
modal.classList.add("notification");

body.append(modal);
