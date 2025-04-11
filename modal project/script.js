const closeBtn = document.querySelector(".close-btn");
const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");

modalBtn.addEventListener("click", function (e) {
  modalOverlay.classList.toggle("open-modal");
});

closeBtn.addEventListener("click", function (e) {
  modalOverlay.classList.toggle("open-modal");
});
