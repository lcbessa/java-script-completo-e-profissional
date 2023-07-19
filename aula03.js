// Aula 03: Diferença entre LET, VAR e CONST
"use strict";

function teste() {
  let nome = "Luiz Carlos";
  if (true) {
    var sobrenome = "Bessa de Lima";
    console.log("dentro do IF do teste: " + nome);
  }
  console.log("dentro do teste: " + nome);
  console.log("dentro do teste: " + sobrenome);
}
teste();
// console.log("fora do teste: " + nome);

if (true) {
  var nome = "Gusttavo";
}
console.log("dentro do teste: " + nome);

const curso = "JavaScript";
console.log(curso);
// curso = "HTML";
