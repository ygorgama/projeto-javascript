import { createHtml } from "./htmlHandle.js";
import { dateHandler } from "./dateHandler.js";
import { removeItemId, removeAllItemDay } from "./removeFunctions.js";

function clearLocalStorage() {
  localStorage.clear();
}
let removeLocalStorageBtn = document.getElementById("btnRemoveLocal");

function cardShow() {
  const buttonsShow = document.getElementsByClassName("chose__btn");
  for (let i = 0; i < buttonsShow.length; i++) {
    const element = buttonsShow[i];
    element.addEventListener("click", (event) => {
      location.reload();
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

const dados = JSON.parse(localStorage.getItem("dados"));

const localStorageHandler = (atividade, dias, horas) => {
  let newId = 0;
  if (dados != null) {
    for (const iterator of dados) {
      if (iterator.id === newId) {
        newId++;
      }
    }
  }

  const objetos = {
    atividade: atividade,
    dia: dias,
    hora: horas,
    id: newId,
  };

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

  if (atividade.value === "" || atividade.value === null) {
    alert("Coloque valores válidos");
    return;
  }

  //   const createdElement = createCard(atividade.value, dias.value, horas.value);

  //   console.log(createdElement);
  localStorageHandler(atividade.value, dias.value, horas.value);

  atividade.value = "";
  location.reload();
}

let buttonValue = localStorage.getItem("buttonValue");
console.log(buttonValue);

let buttonRemove = document.getElementsByClassName("btn__" + buttonValue);
for (let i = 0; i < buttonRemove.length; i++) {
  const element = buttonRemove[i];
  const elementValue = element.value;
  element.addEventListener("click", removeItemId);
}

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", submitHandler);
removeLocalStorageBtn.addEventListener("click", clearLocalStorage);

let removeAllMonthELements = document.getElementById("removeAllMonth");

removeAllMonthELements.addEventListener("click", removeAllItemDay);
