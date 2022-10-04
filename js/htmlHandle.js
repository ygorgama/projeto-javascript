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

  let horaAntiga = [];

  dadosDia.forEach((dados) => {
    if (dados.dia === buttonValue) {
      let isCardExist = false;
      if (horaAntiga.length !== 0) {
        for (const hora of horaAntiga) {
          if (hora === dados.hora) {
            isCardExist = true;
            break;
          }
        }
      }

      horaAntiga.push(dados.hora);

      const cardHour = document.createElement("div");
      cardHour.classList.add("box__hour");

      const cardHourText = document.createElement("p");
      cardHour.classList.add("box__date--text");
      cardHourText.innerHTML = dados.hora;

      cardHour.appendChild(cardHourText);

      const containerCard = document.createElement("article");

      containerCard.classList.add(
        "activities__box",
        "activities__" + buttonValue
      );

      const boxInfo = document.createElement("div");
      boxInfo.classList.add("box__info");

      const boxInfoText = document.createElement("p");
      boxInfoText.classList.add("box__info--text");
      boxInfoText.innerText = dados.atividade;

      const boxInfoTextButton = document.createElement("button");
      boxInfoTextButton.innerHTML = "Apagar";
      boxInfoTextButton.classList.add("box__btn", "btn", "btn__" + buttonValue);
      boxInfoTextButton.value = dados.id;

      boxInfo.appendChild(boxInfoText);
      boxInfo.appendChild(boxInfoTextButton);

      if (isCardExist === false) {
        containerCard.append(cardHour);
        containerAtividades.appendChild(containerCard);

        console.log("Colocado o card");
        containerCard.appendChild(boxInfo);
        containerCard.id = buttonValue + "_" + dados.hora;
      } else {
        let card = document.getElementById(buttonValue + "_" + dados.hora);
        card.appendChild(boxInfo);
        console.log("Não colocado card");
        isCardExist = false;
        card.classList.remove("activities__" + buttonValue);
        card.classList.add("activities__conflito");
      }

      console.log(dados);
    }
  });
};
