const loginB = document.getElementById('button-login');
loginB.innerText = 'Entrar';
loginB.addEventListener('click', () => {
  const getValueEmail = document.getElementById('email-login').value;
  const getValuePass = document.getElementById('password-login').value;

  if (getValueEmail !== 'tryber@teste.com' && getValuePass !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

const getInputCheck = document.querySelector('#agreement');
const getSubmitButton = document.querySelector('#submit-btn');
const getForm = document.getElementById('evaluation-form');
const getTextArea = document.getElementById('textarea');
const getNInput = document.querySelector('#input-name');
const getLnInput = document.querySelector('#input-lastname');
const getEInput = document.querySelector('#input-email');
const getHInput = document.querySelector('#house');

getInputCheck.addEventListener('change', () => {
  getSubmitButton.disabled = !getInputCheck.checked;
});

function buscaFamily() {
  const getFInput = document.getElementsByName('family');

  for (let i = 0; i < getFInput.length; i += 1) {
    if (getFInput[i].checked === true) {
      return getFInput[i].value;
    }
  }
}

function buscaMaterias() {
  const getMInput = document.getElementsByClassName('subject');
  let phrase = '';
  for (let i = 0; i < getMInput.length; i += 1) {
    if (getMInput[i].checked === true) {
      phrase += `${getMInput[i].value}, `;
    }
  }
  phrase = phrase.substring(0, phrase.length);
  return phrase;
}

function buscaAval() {
  const getAInput = document.getElementsByName('rate');

  for (let i = 3; i < getAInput.length; i += 1) {
    if (getAInput[i].checked) {
      return getAInput[i].value;
    }
  }
}

const createDiv = document.createElement('div');
createDiv.setAttribute('id', 'form-data');

let aval;
let materias;
let familia;
let resultName;
let resultEmail;
let resultHouse;

function teste() {
  aval = buscaAval();
  materias = buscaMaterias();
  familia = buscaFamily();
  resultName = `${getNInput.value} ${getLnInput.value}`;
  resultEmail = `${getEInput.value}`;
  resultHouse = `${getHInput.value}`;
}
const createElement = document.createElement('p');
const createElementU = document.createElement('p');
const createElementD = document.createElement('p');
const createElementT = document.createElement('p');
const createElementQ = document.createElement('p');
const createElementC = document.createElement('p');
const createElementS = document.createElement('p');

getSubmitButton.addEventListener('click', () => {
  teste();
  getForm.innerText = '';
  createElement.innerText = `Nome: ${resultName}`;
  createElementU.innerText = `Email: ${resultEmail}`;
  createElementD.innerText = `Casa: ${resultHouse}`;
  createElementT.innerText = `Família: ${familia}`;
  createElementQ.innerText = `Matérias: ${materias}`;
  createElementC.innerText = `Avaliação: ${aval}`;
  createElementS.innerText = `Observações: ${getTextArea.value}`;
  createDiv.appendChild(createElement);
  createDiv.appendChild(createElementU);
  createDiv.appendChild(createElementD);
  createDiv.appendChild(createElementT);
  createDiv.appendChild(createElementQ);
  createDiv.appendChild(createElementC);
  createDiv.appendChild(createElementS);
  getForm.appendChild(createDiv);
  getForm.style.display = 'none';
});

getTextArea.addEventListener('keyup', (event) => {
  const getCount = document.querySelector('#counter');
  const getValue = event.target.textLength;
  getCount.innerText = 500 - parseInt(getValue, 10);
});
