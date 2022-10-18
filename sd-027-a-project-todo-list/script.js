/*
h1 - innerText - 'Minha Lista de Tarefas'
p - id - funcionamento
p - innerText - Clique duas vezes em um item para marcá-lo como completo
input - id - texto-tarefa
ol - id - lista-tarefas
button - id - criar-tarefa

'quando clicar no objeto ele deve ficar cinza - gray'

clicado 2x
recebe class "completed" com a propriedade 'text-decoration' = line-through solid black
clicado 2x novamente 
remove a classe e o text-decoration

criar botao que apagar tudo da lista - id apaga-tudo

criar botao que remove somente os que tem a classe completed

criar um botao que salva as lista no local storage com o id 'salvar-tarefas'

criar 2 botoes que mudam a propriedade (ordem) das tarefas com o id mover-cima e mover-baixo

criar um botao que quando clicado ele remove o selecionado com o id= remover-selecionado
*/
function createMain() {
  const main = document.createElement('main');
  main.style.width = '800px';
  main.style.height = '400px';
  main.style.backgroundColor = 'white';
  main.style.margin = '200px auto';
  main.style.borderRadius = '30px';
  main.style.padding = '10px';
  getBody.appendChild(main);
  createT();
  createSection('addElement');
  createSection('lista-ol');
  createSection('buttons');
}
const getBody = document.querySelector('body');
function color() {
  getBody.style.backgroundColor = '#228B22';
}
function createSection(value) {
  const getMain = document.querySelector('main');
  const createSec = document.createElement('section');

  createSec.setAttribute('id', value);
  createSec.style.marginBottom = '20px';
  createSec.style.marginLeft = '30px';
  getMain.appendChild(createSec);
}

function createT() {
  const getSec = document.querySelector('main');
  const createTitle = document.createElement('h1');
  const createSubT = document.createElement('p');
  const header = document.createElement('header');
  const createEm = document.createElement('em');
  createTitle.innerText = 'Minha Lista de Tarefas';
  createTitle.style.marginBlock = 0;
  createTitle.style.margin = '20px 0 10px 0';

  createSubT.innerText =
    'Clique duas vezes em um item para marcá-lo como completo';
  createSubT.setAttribute('id', 'funcionamento');
  createSubT.style.marginBlock = 0;
  createSubT.style.color = 'rgb(128, 128, 128)';

  createEm.appendChild(createSubT);
  header.appendChild(createTitle);
  header.appendChild(createEm);
  getSec.appendChild(header);
}

function createAddE() {
  const getElement = document.getElementById('addElement');
  const createInp = document.createElement('input');
  const createButt = document.createElement('button');

  createInp.setAttribute('id', 'texto-tarefa');

  createButt.setAttribute('id', 'criar-tarefa');
  createButt.style.marginLeft = '10px';
  createButt.innerText = 'Adicionar';
  createButt.style.width = '100px';
  createButt.style.borderRadius = '30px';
  createButt.style.height = '25px';
  createButt.style.border = '0px';
  createButt.style.backgroundColor = 'rgb(30,144,255)';
  createButt.style.color = 'white';
  getElement.appendChild(createInp);
  getElement.appendChild(createButt);
}
function createList(lista) {
  const getLisBoard = document.getElementById('lista-ol');
  let getLsArray = JSON.parse(localStorage.getItem('listaTarefa'));
  let getArrayClass = JSON.parse(localStorage.getItem('arrayClass'));
  if (!getLsArray) {
    getLsArray = lista;
    getArrayClass = [{}];
  }
  const createOl = document.createElement('ol');
  createOl.setAttribute('id', 'lista-tarefas');
  for (let i = 0; i < getLsArray.length; i += 1) {
    const createLi = document.createElement('li');
    createLi.innerText = getLsArray[i];
    if (getArrayClass[i].class == 'completed' && getArrayClass[i] != {}) {
      createLi.classList.add('completed');
      createLi.style.textDecoration = 'line-through solid black';
    } else if (getArrayClass[i].class == 'selected' && getArrayClass[i] != {}) {
      createLi.classList.add('selected');
      createLi.style.backgroundColor = 'gray';
    }
    createOl.appendChild(createLi);
    getArrayClass.push({});
  }
  getLisBoard.appendChild(createOl);
}
function createRFButton() {
  const createElement = document.createElement('button');
  const getSec = document.getElementById('buttons');
  const getListaOl = document.getElementById('lista-ol');
  getListaOl.style.height = '50%';

  createElement.setAttribute('id', 'remover-selecionado');
  createElement.style.backgroundColor = '	#A52A2A';
  createElement.innerText = 'X';
  createElement.style.height = '30px';
  createElement.style.width = '50px';
  createElement.style.color = 'white';
  createElement.style.borderRadius = '20px';
  createElement.style.border = '0px solid red';

  getSec.appendChild(createElement);
}
function createMCButton() {
  const createElement = document.createElement('button');
  const getSec = document.getElementById('buttons');

  createElement.setAttribute('id', 'mover-cima');
  createElement.style.backgroundColor = '	#FF8C00';
  createElement.innerText = '↑';
  createElement.style.height = '30px';
  createElement.style.width = '50px';
  createElement.style.margin = '0 10px 0 20px ';
  createElement.style.color = 'white';
  createElement.style.borderRadius = '20px';
  createElement.style.border = '0px solid red';

  getSec.appendChild(createElement);
}
function createMBButton() {
  const createElement = document.createElement('button');
  const getSec = document.getElementById('buttons');

  createElement.setAttribute('id', 'mover-baixo');
  createElement.style.backgroundColor = '#FF8C00';
  createElement.innerText = '↓';
  createElement.style.height = '30px';
  createElement.style.width = '50px';
  createElement.style.margin = '0 10px';
  createElement.style.color = 'white';
  createElement.style.borderRadius = '20px';
  createElement.style.border = '0px solid red';

  getSec.appendChild(createElement);
}
function createLCButton() {
  const createElement = document.createElement('button');
  const getSec = document.getElementById('buttons');

  createElement.setAttribute('id', 'remover-finalizados');
  createElement.style.backgroundColor = 'rgb(30,144,255)';
  createElement.innerText = 'Limpar Completos';
  createElement.style.height = '30px';
  createElement.style.width = '150px';
  createElement.style.margin = '0 10px';
  createElement.style.color = 'white';
  createElement.style.borderRadius = '20px';
  createElement.style.border = '0px solid red';

  getSec.appendChild(createElement);
}
function createLLButton() {
  const createElement = document.createElement('button');
  const getSec = document.getElementById('buttons');

  createElement.setAttribute('id', 'apaga-tudo');
  createElement.style.backgroundColor = '#A52A2A';
  createElement.innerText = 'Limpar Lista';
  createElement.style.height = '30px';
  createElement.style.width = '150px';
  createElement.style.margin = '0 10px';
  createElement.style.color = 'white';
  createElement.style.borderRadius = '20px';
  createElement.style.border = '0px solid red';

  getSec.appendChild(createElement);
}
function createSlButton() {
  const createElement = document.createElement('button');
  const getSec = document.getElementById('buttons');

  createElement.setAttribute('id', 'salvar-tarefas');
  createElement.style.backgroundColor = '#228B22';
  createElement.innerText = 'Salvar tarefas';
  createElement.style.height = '30px';
  createElement.style.width = '150px';
  createElement.style.margin = '0 10px';
  createElement.style.color = 'white';
  createElement.style.borderRadius = '20px';
  createElement.style.border = '0px solid red';

  getSec.appendChild(createElement);
}
function verificaClass() {
  const getElement = document.getElementById('lista-tarefas').childNodes;
}

function atualizaArray() {
  const getLista = document.querySelector('#lista-tarefas');
  arrayClass = [];
  array = [];
  for (let i = 0; i < getLista.childNodes.length; i++) {
    const element = getLista.childNodes[i];
    array.push(element.innerText);
    arrayClass[i] = {
      class: element.className,
    };
  }
  localStorage.setItem('arrayClass', JSON.stringify(arrayClass));
  localStorage.setItem('listaTarefa', JSON.stringify(array));
}

let array = JSON.parse(localStorage.getItem('listaTarefas'));
let arrayClass = JSON.parse(localStorage.getItem('arrayClass'));
if (!array) {
  array = [];
  arrayClass = [];
}
color();
createMain();
createAddE();
createList(array);
createRFButton();
createMCButton();
createMBButton();
createLCButton();
createLLButton();
createSlButton();

let getUl = document.querySelector('#lista-ol');
getUl.addEventListener('click', function (event) {
  let getElement = event.target;
  if (getElement.localName == 'li') {
    let getColor = document.querySelector('.selected');
    if (getColor == null) {
      getElement.classList.add('selected');
      getElement.style.backgroundColor = 'gray';
    } else {
      getElement.classList.add('selected');
      getElement.style.backgroundColor = 'gray';
      getColor.style.removeProperty('background-color');
      getColor.classList.remove('selected');
    }
  }
});

getUl.addEventListener('dblclick', function (event) {
  let getElement = event.target;
  if (getElement.localName == 'li') {
    if (getElement.classList.contains('completed')) {
      getElement.classList.remove('completed');
      getElement.style.removeProperty('text-decoration');
    } else {
      getElement.classList.add('completed');
      getElement.style.textDecoration = 'line-through solid black';
    }
  }
});

const getAddBut = document.getElementById('criar-tarefa');
getAddBut.addEventListener('click', function () {
  let getInput = document.querySelector('input');
  let getOl = document.getElementById('lista-tarefas');
  if (getInput.value == '') {
    alert('Valor inválido');
  } else {
    getOl.remove();
    array.push(getInput.value);
    createList(array);
    getInput.value = '';
  }
});

const getMCBut = document.getElementById('mover-cima');
getMCBut.addEventListener('click', function (event) {
  let getLista = document.getElementById('lista-tarefas');
  let getAtual;
  let getAnterior;
  let position = 0;
  let getText;
  let getElClass = document.querySelector('.selected');
  if (!getElClass) {
  } else {
    for (let i = 0; i < getLista.childNodes.length; i += 1) {
      let getElement = getLista.childNodes[i];
      if (getElement.classList.contains('selected')) {
        getAtual = getElement;
        if (i > 0) {
          getAnterior = getElement.previousSibling;
        }else{
          getAnterior = getElement;
        }
        getText = getAnterior.innerText;
        position = i;
      }
    }
    for (let i = 0; i < getLista.childNodes.length; i += 1) {
      if (getLista.childNodes[i].style.textDecoration) {
        getLista.childNodes[i - 1].style.textDecoration =
          'line-through solid black';
      }
      if (i == position - 1) {
        getLista.childNodes[i].classList = getAtual.classList;
        getLista.childNodes[i].innerText = getAtual.innerText;
        getLista.childNodes[i].style.backgroundColor = 'gray';
      }
      if (i == position && position > 0) {
        getLista.childNodes[i].classList.remove('selected', 'completed');
        getLista.childNodes[i].style.removeProperty('background-color');
        getLista.childNodes[i].style.removeProperty('text-decoration');
        getLista.childNodes[i].innerText = getText;
      }
    }
  }
});

const getMBBut = document.getElementById('mover-baixo');
getMBBut.addEventListener('click', function () {
  let getLista = document.getElementById('lista-tarefas');
  let getElClass = document.querySelector('.selected');
  let getAtual;
  let getClassList;
  let getProximo;
  let position = 0;
  let getText;
  let getTextP;
  if (!getElClass) {
  } else {
    for (let i = 0; i < getLista.childNodes.length; i += 1) {
      let getElement = getLista.childNodes[i];
      if (getElement.classList.contains('selected')) {
        getClassList = getElement.className;
        getAtual = getElement;
        if (i < getLista.childNodes.length - 1) {
          getProximo = getElement.nextSibling;
        }else{
          getProximo = getElement;
        }
        getText = getProximo.innerText;
        position = i;
        getTextP = getElement.innerText;
      }
    }
    for (let i = 0; i < getLista.childNodes.length; i += 1) {
      let ass = getLista.childNodes[i]
      if (i == position && position < getLista.childNodes.length - 1) {
        getLista.childNodes[i].innerText = getText;
        getLista.childNodes[i].classList.remove('selected', 'completed');
        getLista.childNodes[i].style.removeProperty('background-color');
        getLista.childNodes[i].style.removeProperty('text-decoration');
      } else if (i == position + 1 && i < getLista.childNodes.length) {
        getLista.childNodes[i].innerText = getTextP;
        getLista.childNodes[i].style.backgroundColor = 'gray';
        getLista.childNodes[i].classList = getClassList;
        if (ass.classList.contains('completed')) {
          getLista.childNodes[i].style.textDecoration = 'line-through solid black';
        
        }
  }
    }
  }
});

const getRsBut = document.getElementById('remover-selecionado');
getRsBut.addEventListener('click', function () {
  let getElement = document.querySelector('.selected');
  getElement.remove();
  console.log(getElement);
});

const getLLBut = document.getElementById('apaga-tudo');
getLLBut.addEventListener('click', function () {
  let getLista = document.querySelector('#lista-tarefas');
  getLista.remove(getLista.childNodes);
  localStorage.clear();
  array = [];
  createList(array);
});
const getRFBut = document.getElementById('remover-finalizados');
getRFBut.addEventListener('click', function () {
  const getPai = document.querySelector('#lista-tarefas').childNodes;

  for (let i = 0; i < getPai.length; i++) {
    const element = getPai[i];
    if (element.classList.contains('completed')) {
      element.remove();
      i -= 1;
    }
  }
});

const getSTBut = document.getElementById('salvar-tarefas');
getSTBut.addEventListener('click', function () {
  atualizaArray();
});
