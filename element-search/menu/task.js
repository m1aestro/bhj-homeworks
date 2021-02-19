const menuMain = document.querySelector(".menu_main");
const menuItem = Array.from(menuMain.getElementsByClassName("menu__item"));

function clickMenuLink() {
    const menuSub = this.querySelector(".menu_sub");   
    
    if (!menuSub) {
        return;
    }

    const activeMenu = Array.from(document.getElementsByClassName("menu_active"));
    activeMenu.forEach(element => {
        if (element !== menuSub) { 
            element.className = element.className.split(" ").filter((element) => element !== "menu_active").join(" ")}
    });


    if (menuSub && !menuSub.className.includes("menu_active")) {
        menuSub.className += " menu_active";
        return false;
    }
}

menuItem.forEach(element => element.onclick = clickMenuLink);
