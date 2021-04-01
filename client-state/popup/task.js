let subscribe_modal = document.getElementById("subscribe-modal");
let modal__close = document.querySelector(".modal__close");

if (document.cookie.indexOf("show=true") == -1) {
    subscribe_modal.classList.add("modal_active");
}

modal__close.addEventListener("click", () => {
    subscribe_modal.classList.remove("modal_active");
    document.cookie = "show=true; path=/;";
});