import { createHtml } from "./htmlHandle.js";
import { dateHandler } from "./dateHandler.js";

function clearLocalStorage() {
  localStorage.clear();
}
let removeLocalStorageBtn = document.getElementById("btnRemoveLocal");

function cardShow() {
  const buttonsShow = document.getElementsByClassName("chose__btn");
  for (let i = 0; i < buttonsShow.length; i++) {
    const element = buttonsShow[i];
    element.addEventListener("click", (event) => {
      for (let i = 0; i < buttonsShow.length; i++) {
        buttonsShow[i].classList.remove("fixed");
      }
      element.classList.add("fixed");
      const buttonValue = element.value;
      localStorage.setItem("buttonValue", buttonValue);
    });
  }
}
cardShow();
createHtml();
dateHandler();

let localStorageDate = [];

const localStorageHandler = (atividade, dias, horas) => {
  const objetos = {
    atividade: atividade,
    dia: dias,
    hora: horas,
    id: `${horas}_${dias}`,
  };

  const dados = JSON.parse(localStorage.getItem("dados"));

  if (dados != null) {
    localStorageDate = dados;
    console.log(localStorageDate);
    localStorageDate.push(objetos);
  } else {
    localStorageDate.push(objetos);
  }
  localStorage.setItem("dados", JSON.stringify(localStorageDate));
};

function submitHandler(event) {
  event.preventDefault();
  let atividade = document.getElementById("atividade");
  let dias = document.getElementById("dias");
  let horas = document.getElementById("horas");

  //   const createdElement = createCard(atividade.value, dias.value, horas.value);

  //   console.log(createdElement);
  localStorageHandler(atividade.value, dias.value, horas.value);

  atividade.value = "";
}

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", submitHandler);
removeLocalStorageBtn.addEventListener('click', clearLocalStorage)
