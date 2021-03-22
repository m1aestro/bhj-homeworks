let activeRotator = document.querySelector(".rotator__case_active");
const firstChildRotator = document.querySelector(".rotator").firstElementChild;
const lastChildRotator = document.querySelector(".rotator").lastElementChild;

function changeRotor() {
    activeRotator.classList.remove("rotator__case_active");

    if (activeRotator === lastChildRotator) {
        activeRotator = firstChildRotator;
    } else {
        activeRotator = activeRotator.nextElementSibling;
    }
    
    activeRotator.classList.add("rotator__case_active");
}

setInterval(changeRotor, 1000);