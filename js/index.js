const date = new Date();

const options = {
    year: 'numeric', month: 'long', day: 'numeric'
}

const horaAtual = date.getHours();
const minutoAtual = date.getMinutes();

const dataAtual = date.toLocaleDateString('pt-br', options);

const fullTime = document.getElementById('fullTimeHeader');
fullTime.innerHTML = dataAtual;

const hoursMinutes = document.getElementById('horaHeader');
hoursMinutes.innerHTML = horaAtual + ":" + minutoAtual;

function createCard(atividade, dias, horas) {
    const containerAtividades = document.getElementById('containerAtividades');
    const element = document.createElement("article");
    element.classList.add('activities__box', 'd-flex')

    if(dias === 'segunda'){
        element.classList.add('activities__segunda')
    }         
    else if(atividade.dia === 'terca'){
        element.classList.add('activities__terca')

    }
    else if(dias === 'quarta'){
        element.classList.add('activities__quarta')

    }
    else if(dias === 'quinta'){
        element.classList.add('activities__quinta')

    }
    else if(dias === 'sexta'){
        element.classList.add('activities__sexta')

    }
    else if(dias === 'sabado'){
        element.classList.add('activities__sabado')

    }
    else if(dias=== 'domingo'){
        element.classList.add('activities__domingo')       
    }

    const elementChildFirst = document.createElement('div')
    elementChildFirst.classList.add('box__hour');

    const fisrtChildElement = document.createElement('p')
    fisrtChildElement.innerHTML = horas
    elementChildFirst.appendChild(fisrtChildElement)

    element.appendChild(elementChildFirst)

    const elementChildSecond = document.createElement('div')
    elementChildSecond.classList.add('box__info');

    const secondElemenFirstChild = document.createElement('p')
    secondElemenFirstChild.innerHTML = atividade
    secondElemenFirstChild.classList.add('box__info--text')
    const secondElemenSecondChild = document.createElement('button')
    secondElemenSecondChild.innerHTML = "Apagar"
    secondElemenSecondChild.classList.add('box__btn',  'btn')
    secondElemenSecondChild.id = "deletarItem";

    elementChildSecond.appendChild(secondElemenFirstChild);
    elementChildSecond.appendChild(secondElemenSecondChild);

    element.appendChild(elementChildSecond)
    
    containerAtividades.appendChild(element)


}

function submitHandler(event) {
    event.preventDefault();    
    let atividade = document.getElementById('atividade');
    let dias = document.getElementById('dias');
    let horas = document.getElementById('horas');
    
    createCard(atividade.value, dias.value, horas.value)

    console.log(atividade.value);
    console.log(dias.value);
    console.log(horas.value);

    atividade = '';
    
}

let addButton = document.getElementById('addButton');
addButton.addEventListener('click', submitHandler)