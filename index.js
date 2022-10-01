const btnsOpen = document.querySelectorAll(".btn");
const modalContainer = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".close-btn");
const modalText = document.querySelector(".modal-text");

btnsOpen.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalContainer.style.display = "block";

    const parent = btn.parentElement;
    const text = parent.querySelector(".button-text");
    modalText.innerText = text.innerText;
  });
});

closeBtn.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalContainer.style.display = "none";
  }
});
