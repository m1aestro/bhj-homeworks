let chatWidgetSide = document.querySelector(".chat-widget__side");
let chatWidget = document.querySelector(".chat-widget");
let chatWidgetInput = document.getElementById("chat-widget__input");
let chatWidgetMessages = document.getElementById("chat-widget__messages");

let answersRobotList = [
    "Добрый день! До свидания!",
    "Мы ничего не будем вам продавать",
    "К сожалению, все операторы заняты. Не пишите нам больше",
    "Вы где?",
    "Где ваша совесть?",
    "Вы не купили ниодного товара, чтобы так с нами разговаривать!"
];

chatWidgetSide.addEventListener("click", function () {
  chatWidget.classList.toggle("chat-widget_active");
});

function getCurrentTime () {
  let time = new Date().toLocaleTimeString().split(":");
  return time[0] + ':' + time[1];
}

chatWidgetInput.onkeypress = function (e) {
  if (!e) {
    e = window.event;
  }

  let keyCode = e.keyCode || e.which;

  if (keyCode == '13' && chatWidgetInput.value != "") {
    chatWidgetMessages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${getCurrentTime()}</div>
        <div class="message__text">${chatWidgetInput.value}</div>
    </div>`;
    chatWidgetMessages.innerHTML += `
      <div class="message">
        <div class="message__time">${getCurrentTime()}</div>
        <div class="message__text">${answersRobotList[Math.floor(Math.random() * answersRobotList.length)]}</div>
      </div>`;

    chatWidgetInput.value = "";
  }
}