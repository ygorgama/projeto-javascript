export const createHtml = () => {
  const localStorageInfo = JSON.parse(localStorage.getItem("dados"));

  const containerAtividades = document.getElementById("containerAtividades");
  const elementFather = document.createElement("div");

  const element = document.createElement("article");
  element.classList.add("activities__box", "d-flex", "");

  const elementChildSecond = document.createElement("div");
  elementChildSecond.classList.add("box__info");

  const secondElemenFirstChild = document.createElement("p");
  secondElemenFirstChild.classList.add("box__info--text");

  const secondElemenSecondChild = document.createElement("button");
  secondElemenSecondChild.innerHTML = "Apagar";
  secondElemenSecondChild.classList.add("box__btn", "btn");
  secondElemenSecondChild.id = "deletarItem";

  elementChildSecond.appendChild(secondElemenFirstChild);
  elementChildSecond.appendChild(secondElemenSecondChild);

  element.appendChild(elementChildFirst);

  containerAtividades.appendChild(element);

  function sameHour(value, dia) {
    let contador = 0;
    for (const iterator of localStorageInfo) {
      if (
        value.dia === dia &&
        iterator.dia === dia &&
        value.hora === iterator.hora
      ) {
        contador++;
      }
    }
    if (contador > 1) {
      console.log("Opa sou maior que 1");
    } else {
      containerAtividades.appendChild(elementFather);

      const elementChildFirst = document.createElement("div");
      elementChildFirst.classList.add("box__hour");

      const fisrtChildElement = document.createElement("p");
      fisrtChildElement.innerHTML = value.hora;

      elementChildFirst.appendChild(fisrtChildElement);
      console.log("N sou maior que 1 -_-");
    }
  }

  for (const value of localStorageInfo) {
    if (value.dia === "segunda") {
      // element.classList.add("activities__segunda");
      sameHour(value, "segunda");
    } else if (value.dia === "terca") {
      // element.classList.add("activities__terca");
      sameHour(value, "terca");
    } else if (value.dia === "quarta") {
      // element.classList.add("activities__quarta");
      sameHour(value, "quarta");
    } else if (value.dia === "quinta") {
      // element.classList.add("activities__quinta");
      sameHour(value, "quinta");
    } else if (value.dia === "sexta") {
      // element.classList.add("activities__sexta");
      sameHour(value, "sexta");
    } else if (value.dia === "sabado") {
      // element.classList.add("activities__sabado");
      sameHour(value, "sabado");
    } else {
      // element.classList.add("activities__domingo");
      sameHour(contador, value, "domingo");
    }
    elementFather.appendChild(element);

    console.log(value.dia);
  }
};
