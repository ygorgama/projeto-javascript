export const dateHandler = () => {
  const date = new Date();

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const horaAtual = date.getHours();
  const minutoAtual = date.getMinutes();

  const dataAtual = date.toLocaleDateString("pt-br", options);

  const fullTime = document.getElementById("fullTimeHeader");
  fullTime.innerHTML = dataAtual;

  const hoursMinutes = document.getElementById("horaHeader");
  hoursMinutes.innerHTML = horaAtual + ":" + minutoAtual;
};
