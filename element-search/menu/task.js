const menuMain = document.querySelector(".menu_main");
const menuItem = Array.from(menuMain.getElementsByClassName("menu__item"));
const menu__link = document.querySelectorAll(".menu__link");

menu__link.forEach(function(item) {
    let menu_sub = item.parentElement.querySelector(".menu_sub");
    if (menu_sub) {
        item.onclick = function() {
            return false;
        }
    }
});

menuItem.forEach(function(item) {
    item.addEventListener("click", function() {
        let menu_sub = this.querySelector(".menu_sub");
        if (menu_sub) {
            menu_sub.classList.toggle("menu_active");
        }
    
        const activeMenu = Array.from(document.getElementsByClassName("menu_active"));
        activeMenu.forEach(element => {
            if (element !== menu_sub) { 
                element.className = element.className.split(" ").filter((element) => element !== "menu_active").join(" ")}
        });
    });
});