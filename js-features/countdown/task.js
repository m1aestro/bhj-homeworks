let second = 59;

function countdown() {
    const counter = document.getElementById("timer");

    counter.textContent -= 1;

    if (counter.textContent == 0) {
       return alert('Вы победили в конкурсе!');       
    }

    setTimeout(countdown, 1000);
}

countdown();