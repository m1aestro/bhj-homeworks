const modalMain = document.getElementById("modal_main");
modalMain.classList.add("modal_active");
const modalSuccess = document.getElementById("modal_success");
const closeModal = Array.from(document.getElementsByClassName("modal__close"));
const success = Array.from(modalMain.getElementsByClassName("show-success"));

function close() {
  this.closest(".modal_active").classList.remove("modal_active");
}

function show_sucess() {
  modalMain.classList.remove("modal_active");
  modalSuccess.classList.add("modal_active");
}

closeModal.forEach(element => element.onclick = close);
success.forEach(element => element.onclick = show_sucess);