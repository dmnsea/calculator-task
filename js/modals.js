import { Storage } from "./storage.js";

function showModalDialog(header, body, action = null){
  let main = document.querySelector("main");

  let modalBg = document.createElement("section");
  modalBg.classList.add("modal-bg");

  let modalDialog = document.createElement("article");
  modalDialog.classList.add("modal-dialog", Storage.restoreTheme());

  let btnClose = document.createElement("button");
  btnClose.innerText = "Close";
  btnClose.addEventListener("click", closeModal);

  modalDialog.append(header, body);
  if(action != null){
    modalDialog.appendChild(action);
  }
  modalDialog.appendChild(btnClose);
  
  modalBg.appendChild(modalDialog);
  main.appendChild(modalBg);

  setTimeout(() => modalBg.classList.add("visible"), 100);
}

function closeModal(){
  let modal = document.querySelector(".modal-bg");
  modal.classList.remove("visible");
  setTimeout(() => modal.remove(), 100);
}

function showModalAbout(){
  let header = document.createElement("h2");
  header.innerText = "About Simple Calc";

  let body = document.createElement("p");
  body.innerText = `
Необходимо разработать обычный математический калькулятор, для вычисления базовых математических операций и операций со степенями

При создании приложения необходимо применять такие технологии, как HTML, CSS, JavaScript и Git.

HTML — от вас требуется умение правильно организовать структуру HTML, использовать подходящие HTML-теги в зависимости от выполняемого функционала, а также знание атрибутов.

CSS — ожидается, что стиль калькулятора не будет простым и стандартным. Вы должны применять различные свойства, которые улучшают пользовательский интерфейс и делают ваш калькулятор более привлекательным. Вам следует использовать такие инструменты, как flexbox или CSS grid для позиционирования, а также реализовать базовые анимационные элементы через псевдоклассы, например, hover. Мы ожидаем, что вы сможете также адаптировать интерфейс для мобильных устройств.

JavaScript — требуется разработать систему стека или очереди, которая будет обрабатывать операторы и операнды с учетом их приоритетов. Следует внедрить возможность сохранения последних введенных данных в localstorage, чтобы после обновления страницы сохранялись введенные пользователем значения, которые еще не были вычислены. Также нужно создать функции для выполнения математических операций, а также обеспечить функционал для расчета результата, удаления последних введенных операторов или операндов, и возможности полностью очистить все введенные данные.
  `.trim();

  showModalDialog(header, body);
}

function showModalHistory(){
  let header = document.createElement("h2");
  header.innerText = "History (10 last)";

  let body = document.createElement("p");
  let btnClearHistory = document.createElement("button");
  btnClearHistory.innerText = "Clear history";

  btnClearHistory.addEventListener("click", () => {
    Storage.clearHistory();
    closeModal();
  })

  let history = Storage.retrieveHistory();
  if(history.length > 0){
    history = history.map(entry => {
      let el = document.createElement("div");
      el.innerHTML = `
  <b>Expression</b>:<br>
  ${entry.expression}<br>
  <b>Result</b>:<br>
  ${entry.result}
      `.trim();

      el.classList.add("history-item", Storage.restoreTheme());
      return el.outerHTML;
    });

    body.innerHTML = history.join("<hr>");
    showModalDialog(header, body, btnClearHistory);
  }else{
    body.innerHTML = "History is empty";
    showModalDialog(header, body);
  }
}

export function enableModalDialogs(){
  let btnAbout = document.querySelector("#info");
  btnAbout.addEventListener("click", showModalAbout);

  let btnHistory = document.querySelector("#btn-history");
  btnHistory.addEventListener("click", showModalHistory);
}

