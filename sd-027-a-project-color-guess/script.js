function createTitle() {
  const createTitle = document.createElement('h1');
  const getElement = document.querySelector('.title');

  createTitle.innerText = 'Adivinhe a cor!';
  createTitle.setAttribute('id', 'title');
  getElement.appendChild(createTitle);
}
let sortNumber;
let getSortColor;
let array = [];

function createRGB() {
  for (let index = 0; index < 6; index++) {
    let numberOne = Math.floor(Math.random() * 255);
    let numberTwo = Math.floor(Math.random() * 255);
    let numberThree = Math.floor(Math.random() * 255);
    array.push(`rgb(${numberOne}, ${numberTwo}, ${numberThree})`);
  }
}
function createPlacar(acertos) {
  const getElement = document.querySelector('.placar');
  const createElement = document.createElement('p');
  const createElementA = document.createElement('p');
  if (!acertos) {
    acertos = 0;
  }
  createElement.setAttribute('id', 'rgb-color');
  createElementA.innerText = `Placar: ${acertos}`;
  createElementA.setAttribute('id', 'score');
  getElement.appendChild(createElement);
  getElement.appendChild(createElementA);
}
function createSections(params) {
  const getElement = document.querySelector('body');
  const createElement = document.createElement('section');

  createElement.setAttribute('class', params);
  getElement.style.textAlign = 'center';
  getElement.appendChild(createElement);
}
function createColors(array) {
  const getElement = document.querySelector('.colors');
  const createUL = document.createElement('ul');
  sortNumber = Math.floor(Math.random() * 6);
  for (let i = 0; i < 6; i++) {
    const createLi = document.createElement('li');
    const element = createLi;

    if (i == sortNumber) {
      getSortColor = array[i];
      element.style.backgroundColor = array[i];
    } else {
      element.style.backgroundColor = array[i];
    }
    element.setAttribute('class', 'ball');
    element.style.width = '50px';
    element.style.height = '50px';
    element.style.border = '1px solid black';
    element.style.borderRadius = '50%';
    element.style.display = 'inline-block';
    element.style.margin = '20px 10px';
    createUL.appendChild(createLi);
  }
  const getColor = document.querySelector('#rgb-color');
  getColor.innerText = getSortColor;
  getElement.appendChild(createUL);
}
function createAnswer(params) {
  const getElement = document.querySelector('.notif');
  const createElement = document.createElement('p');
  createElement.setAttribute('id', 'answer');
  createElement.style.fontSize = 'larger';
  if (params == 'inicio') {
    createElement.innerText = 'Escolha uma cor!';
  } else if (params == 'Acertou') {
    createElement.innerText = 'Acertou! Novas Cores!';
  } else {
    createElement.innerText = 'Errou! Tente novamente!';
  }
  getElement.appendChild(createElement);
}
function createButtons(name) {
  const getElement = document.querySelector('.buttons');
  const createElement = document.createElement('button');

  if (name == 'resetar') {
    createElement.innerText = 'Resetar o jogo/cores';
    createElement.setAttribute('id', 'reset-game');
  } else if (name == 'dificuldade') {
    createElement.innerText = 'Mudar dificuldade';
  }
  createElement.style.margin = '0 20px';
  createElement.style.width = '150px';
  createElement.style.height = '30px';

  getElement.appendChild(createElement);
}

createRGB();
createSections('title');
createTitle();
createSections('placar');
createPlacar(0);
createSections('colors');
createColors(array);
createSections('notif');
createAnswer('inicio');
createSections('buttons');
createButtons('dificuldade');
createButtons('resetar');

let points = 0;
const getButtonR = document.querySelector('#reset-game');
getButtonR.addEventListener('click', function () {
  const getColor = document.querySelector('ul');
const getplacar = document.querySelector('#rgb-color')
const getnotif = document.querySelector('#answer')
  array = [];
  createRGB();
  sortNumber = Math.floor(Math.random() * 6);

  for (let i = 0; i < getColor.childNodes.length; i++) {
    let element = getColor.childNodes[i];
    if (i == sortNumber) {
      getSortColor = array[i];
      element.style.backgroundColor = array[i];
    } else {
      element.style.backgroundColor = array[i];
    }
  }
  getnotif.innerText = 'Escolha uma cor!'
  getplacar.innerText = getSortColor
});
const getColors = document.querySelector('ul');
getColors.addEventListener('click', function (event) {
  const getElement = event.target;

  const getPlacar = document.querySelector('#score');
  const getFrase = document.querySelector('#answer');
  if (getElement.localName == 'li') {
    if (getElement.style.backgroundColor == getSortColor) {
      points += 3;
      getPlacar.remove();
      getFrase.remove();
      createPlacar(points);
      createAnswer('Acertou');
    } else {
      points -= 1;
      getFrase.remove();
      createAnswer('errou');
    }
    console.log(getElement == getSortColor);
  }
});
