/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

//Exercício 1
function changeParagraph() {
  let paragraph = document.getElementsByTagName("p")[1];
  paragraph.innerHTML = "Bem-Sucedido";
}

changeParagraph();

// Exercicio 2

function changeBackgroundColor() {
  let greenTrybe = document.getElementsByClassName("main-content")[0];
  greenTrybe.style.background = "rgb(76,164,109)";
}

changeBackgroundColor();

// Exercício 3

function changeRedToWhite() {
  let redToWhite = document.getElementsByClassName("center-content")[0];
  redToWhite.style.background = "white";
}

changeRedToWhite();

// Exercício 4

function correctingText() {
  let correctingTxt = document.getElementsByTagName("h1")[0];
  correctingTxt.innerText = "Exercício 5.1 - JavaEscript";
}

correctingText();

// Exercício 5 - Uso o toUpperCase quando quero colocar todo o texto em maiúsculo.

function changeSize() {
  let changingSize = document.getElementsByTagName("p")[0];
  changingSize.innerHTML = changingSize.innerHTML.toUpperCase();
}

changeSize();

//Exercício 6

function showParagraphs() {
  let showInCons = document.getElementsByTagName("p");
  for (let index = 0; index < showInCons.length; index += 1) {
    console.log(showInCons[index].innerHTML);
  }
}
showParagraphs();
