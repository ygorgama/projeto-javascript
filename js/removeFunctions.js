export const removeItemId = (event) => {
  const dados = JSON.parse(localStorage.getItem("dados"));
  const id = parseInt(event.target.value);

  const buttonValue = localStorage.getItem("buttonValue");

  const dadosDia = dados.filter((obj) => {
    return buttonValue === obj.dia;
  });

  const novosDados = dadosDia.filter((element) => element.id !== id);
  console.log(novosDados);
  localStorage.setItem("dados", JSON.stringify(novosDados));
  location.reload();
};

export const removeAllItemDay = (event) => {
  const dados = JSON.parse(localStorage.getItem("dados"));
  const buttonValue = localStorage.getItem("buttonValue");

  const dadosDia = dados.filter((obj) => {
    return buttonValue !== obj.dia;
  });

  localStorage.setItem("dados", JSON.stringify(dadosDia));
  location.reload();
};
