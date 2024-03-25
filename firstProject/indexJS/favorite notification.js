const modal = document.querySelector(".notification");

function favoriteNotificationAdder(event) {
  const target = event.target;

  if (modal.style.display == "block") return 0;

  if (target?.closest("button")?.classList.contains("favorite")) {
    modal.style.display = "block";
    modal.style.marginBottom = 50 + "px";

    setTimeout(() => {
      modal.style.display = "none";
    }, 2000);
  }
}

document.addEventListener("click", favoriteNotificationAdder);
