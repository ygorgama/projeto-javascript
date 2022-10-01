export const createHtml = () => {
  const dados = JSON.parse(localStorage.getItem("dados"));
  const buttonValue = localStorage.getItem("buttonValue");
  const dadosDia = dados.filter((obj) => {
    return buttonValue === obj.dia;
  });

  console.log(dadosDia);

  const containerAtividade = document.querySelector("#containerAtividades");
  const containerCards = document.createElement("div");

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

  console.log(dados);
  console.log(buttonValue);
};
