export const createHtml = () => {
  const dados = JSON.parse(localStorage.getItem("dados"));
  if (dados === null) {
    console.log("Não há itens na localStorage");
    return;
  }

  const buttonValue = localStorage.getItem("buttonValue");
  const containerAtividades = document.getElementById("containerAtividades");

  const dadosDia = dados.filter((obj) => {
    return buttonValue === obj.dia;
  });

  let horaAtual;

  dadosDia.forEach((dados) => {
    if (dados.dia === buttonValue) {
      let isCardExist = false;
      if (horaAtual != null && horaAtual === dados.hora) {
        isCardExist = true;
      }
  
      horaAtual = dados.hora;
  
      const cardHour = document.createElement("div");
      cardHour.classList.add("box__hour");
  
      const cardHourText = document.createElement("p");
      cardHour.classList.add("box__date--text");
      cardHourText.innerHTML = dados.hora;
  
      cardHour.appendChild(cardHourText);
  
      const containerCard = document.createElement("article");
  
      containerCard.classList.add(
        "activities__box",
        "d-flex",
        "activities__" + buttonValue
      );
  
      // for (const iterator of dados) {
      //   for (const dad in object) {
      //     if (Object.hasOwnProperty.call(object, dad)) {
      //       const element = object[dad];
      //       object;
      //     }
      //   }
      // }
  
      if (isCardExist === false) {
        containerCard.append(cardHour);
        containerAtividades.appendChild(containerCard);
  
        console.log("Colocado o card");
      } else {
        console.log("Não colocado card");
        isCardExist = false;
      }
  
      console.log(dados);
    }
  });

  // for (const iterator of dados) {
  //   for (const index of dados) {
  //     if (iterator.dia === buttonValue && iterator.hora !== index.hora) {
  //       containerAtividade.appendChild(containerCards);
  //       console.log(containerCards);
  //     } else {
  //       console.log("Opa existe essa hora nesse dia");
  //     }
  //   }
  // }

  // for (const iterator of dados) {
  //   if (iterator.dia === buttonValue) {
  //     containerCards.id = buttonValue + "_" + iterator.hora;
  //   }
  // }
};
