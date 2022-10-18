function criaSection(idName) {
  const getElement = document.querySelector('body');
  const createElement = document.createElement('section');
  createElement.setAttribute('id', idName);
  createElement.style.textAlign = 'center';
  createElement.style.margin = '30px';
  getElement.appendChild(createElement);
}
function titulo() {
  const getElement = document.querySelector('body');
  const createElement = document.createElement('h1');
  createElement.setAttribute('id', 'title');
  createElement.innerText = 'Paleta de Cores';
  createElement.style.textAlign = 'center';
  getElement.appendChild(createElement);
}
function paletaDeCores() {
  const getElement = document.querySelector('#header');
  const createElement = document.createElement('ul');
  createElement.style.paddingInline = 0;
  createElement.style.margin = 'auto';
  createElement.style.marginBlock = 0;
  createElement.style.width = '263px';
  createElement.style.height = '62px';
  createElement.setAttribute('id', 'color-palette');
  getElement.appendChild(createElement);
}
function cores(value) {
  let getElement = document.querySelector('#color-palette');
  const getLocalStorageColor = localStorage.getItem('colorPalette');
  if (getLocalStorageColor == null) {
    criaCores();
  }
  let arrayColor = JSON.parse(localStorage.getItem('colorPalette'));
  if (value < 4) {
    value = 4;
  }
  for (let index = 0; index < value; index += 1) {
    let createElement = document.createElement('li');
    createElement.style.width = '60px';
    createElement.style.height = '60px';
    createElement.style.border = '1px solid black';
    createElement.style.display = 'inline-block';
    createElement.style.backgroundColor = arrayColor[index];
    createElement.setAttribute('class', 'color selected');
    if (index > 0) {
      createElement.style.marginLeft = '5px';
      createElement.setAttribute('class', 'color');
    }
    getElement.appendChild(createElement);
  }
}
//////////////////////////////////////////////////////////////
function criaCores() {
  let getLocalStorageColor = localStorage.getItem('colorPalette');

  if (getLocalStorageColor == null) {
    localStorage.setItem('colorPalette', '[black]');
  }
  getLocalStorageColor = [];

  for (let index = 0; index < 4; index += 1) {
    let color1 = Math.floor(Math.random() * 255);
    let color2 = Math.floor(Math.random() * 255);
    let color3 = Math.floor(Math.random() * 255);
    if (index < 1) {
      getLocalStorageColor[0] = 'black';
    } else {
      getLocalStorageColor[index] = `rgb(${color1}, ${color2}, ${color3})`;
    }
  }
  console.log(getLocalStorageColor);
  localStorage.setItem('colorPalette', JSON.stringify(getLocalStorageColor));
}
//////////////////////////////////////////////////////////////
function button(att, attName, text) {
  let getElement = document.querySelector('#botoes');
  let createElement = document.createElement('button');

  createElement.innerText = text;
  createElement.setAttribute(att, attName);
  createElement.style.display = 'inline-block';
  createElement.style.marginLeft = '20px';
  createElement.style.height = '30px'
  createElement.style.width = '130px'
  createElement.style.border = '1px solid'
  getElement.appendChild(createElement);
}
//////////////////////////////////////////////////////////////
function criaInput() {
  let getElement = document.querySelector('#botoes');
  let createElement = document.createElement('input');

  createElement.setAttribute('id', 'board-size');
  createElement.style.display = 'inline-block';
  createElement.style.margin = '0 0 0 20px';
  createElement.placeholder = 'Qtd de pixels';
  createElement.max = '50';
  createElement.min = '1';
  createElement.type = 'number';
  createElement.style.border = '1px solid'
  createElement.style.height = '25px'
  createElement.style.width = '130px'
  getElement.appendChild(createElement);
}
//////////////////////////////////////////////////////////////
function criaBoard() {
  let getElement = document.querySelector('#board');
  let getSize = JSON.parse(localStorage.getItem('boardSize'));
  if (getSize == null || getSize < 5) {
    getSize = 5;
  }
  for (let index = 0; index < getSize; index += 1) {
    let createElement = document.createElement('ul');
    createElement.setAttribute('id', 'pixel-board');
    createElement.style.height = '40px';
    createElement.style.margin = 'auto';
    createElement.style.marginBlock = 0;
    createElement.style.paddingInline = 0;
    getElement.appendChild(createElement);
    criaPixels(index);
  }
}
//////////////////////////////////////////////////////////////
function criaPixels(valueNode) {
  let getElement = document.querySelector('#board').childNodes;
  let getSize = JSON.parse(localStorage.getItem('boardSize'));

  if (getSize == null || getSize < 5) {
    getSize = 5;
    localStorage.setItem('boardSize', '5');
  }
  for (let index = 0; index < getSize; index += 1) {
    let createElement = document.createElement('li');
    createElement.setAttribute('class', 'pixel');
    createElement.style.display = 'inline-block';
    createElement.style.border = '1px solid black';
    createElement.style.width = '40px';
    createElement.style.height = '40px';
    getElement[valueNode].appendChild(createElement);
  }
}
//////////////////////////////////////////////////////////////
function carregaCoresPixels() {}
//////////////////////////////////////////////////////////////
function pintaPixel(value) {
  let getLsPBoard = JSON.parse(localStorage.getItem('pixelBoard'));
  let getBoardNode = document.querySelector('#board').childNodes;
  if (value == 'inicio' && getLsPBoard == null) {
    let array = [];
    for (let index = 0; index < getBoardNode.length; index += 1) {
      for (let i = 0; i < getBoardNode[index].childNodes.length; i++) {
        const element = getBoardNode[index].childNodes[i];
        let eColor = (element.style.backgroundColor = 'white');
        element.style.backgroundColor = 'white';
        array.push(eColor);
      }
    }
    localStorage.setItem('pixelBoard', JSON.stringify(array));
  } else if (value == 'inicio') {
    let getBoardNode = document.querySelector('#board').childNodes;
    let array = JSON.parse(localStorage.getItem('pixelBoard'));
    let count = 0;
    for (let index = 0; index < getBoardNode.length; index += 1) {
      for (let i = 0; i < getBoardNode[index].childNodes.length; i++) {
        const element = getBoardNode[index].childNodes[i];
        let getAColor = array[count];
        if (getAColor == 'rgb(255, 255, 255)()' || getAColor == '') {
          array[count] = 'white';
        } else {
          element.style.backgroundColor = array[count];
        }
        count += 1;
      }
    }
    localStorage.setItem('pixelBoard', JSON.stringify(array));
  } else if (value == 'reset') {
    let getBoardNode = document.querySelector('#board').childNodes;
    let array = [];
    for (let index = 0; index < getBoardNode.length; index += 1) {
      for (let i = 0; i < getBoardNode[index].childNodes.length; i++) {
        const element = getBoardNode[index].childNodes[i];
        let eColor = (element.style.backgroundColor = 'rgb(255, 255, 255)');
        element.style.backgroundColor = 'rgb(255, 255, 255)';
        array.push(eColor);
      }
    }
    localStorage.setItem('pixelBoard', JSON.stringify(array));
  }
}
//////////////////////////////////////////////////////////////
titulo();
criaSection('header');
paletaDeCores();
cores(4);
criaSection('botoes');
button('id', 'button-random-color', 'Cores aleatórias');
button('id', 'clear-board', 'Limpar');
criaInput();
button('id', 'generate-board', 'VQV');
criaSection('board');
criaBoard();
pintaPixel('inicio');
//////////////// E //// V //// E //// N //// T //// S ////////

let getButtAle = document.getElementById('button-random-color');
getButtAle.addEventListener('click', function () {
  let getHeader = document.querySelector('#color-palette');
  getHeader.remove();
  localStorage.removeItem('colorPalette');
  paletaDeCores();
  cores(4);
  window.location.reload();
});
//////////////////////////////////////////////////////////////
let getUlSelect = document.querySelector('#color-palette');
getUlSelect.addEventListener('click', function (event) {
  let getElement = event.target;
  let getClass = document.querySelector('.selected');
  if (getElement.className == 'color') {
    getClass.className = 'color';
    getElement.className = 'color selected';
  }
});
//////////////////////////////////////////////////////////////
let getInput = document.querySelector('input');
getInput.addEventListener('change', function (event) {
  let getElement = event.target;
  let getValue = getElement.value;
});
//////////////////////////////////////////////////////////////
let getButtonVqv = document.querySelector('#generate-board');
getButtonVqv.addEventListener('click', function () {
  let getBoard = document.querySelector('#board');
  let getInput = document.querySelector('input');

  if (getInput.value == '') {
    alert('Board inválido!');
  } else if (getInput.value < 5) {
    getInput.value = 5;
  } else if (getInput.value > 50) {
    getInput.value = 50;
  }
  localStorage.setItem('boardSize', JSON.stringify(getInput.value));
  getBoard.remove();
  criaSection('board');
  criaBoard();
  pintaPixel('reset');
  window.location.reload();
});
//////////////////////////////////////////////////////////////
let getBoard = document.querySelector('#board');
getBoard.addEventListener('click', function (event) {
  let getPNode = document.querySelector('#board').childNodes;
  let array = [];
  let getElement = event.target;
  let getColor = document.querySelector('.selected').style.backgroundColor;
  if (getElement.localName == 'li') {
    getElement.style.backgroundColor = getColor;
    for (let index = 0; index < getPNode.length; index++) {
      for (let i = 0; i < getPNode[index].childNodes.length; i++) {
        const element = getPNode[index].childNodes[i];
        array.push(element.style.backgroundColor);
      }
    }
  }
  localStorage.setItem('pixelBoard', JSON.stringify(array));
});
//////////////////////////////////////////////////////////////
let getResetB = document.querySelector('#clear-board');
getResetB.addEventListener('click', function () {
  pintaPixel('reset');
});
