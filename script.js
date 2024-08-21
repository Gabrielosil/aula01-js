/*
Faça um algoritimo onde o usuario informe o nome
 e 4 notas de dois alunos e mostre as médias desses 2 alunos
*/

var nome = window.prompt("Informe o seu nome");

var nota1 = window.prompt("Digite a nota 1:");
nota1 = parseFloat(nota1)

var nota2 = window.prompt("Digite a nota 2:");
nota2 = parseFloat(nota2)

var nota3 = window.prompt("Digite a nota 3:");
nota3 = parseFloat(nota3)

var nota4 = window.prompt("Digite a nota 4:");
nota4 = parseFloat(nota4)

var media = (nota1 + nota2 + nota3 + nota4)/4;


var nome1 = window.prompt("Informe o seu nome");

var nota10 = window.prompt("Digite a nota 1:");
nota10 = parseFloat(nota10)

var nota20 = window.prompt("Digite a nota 2:");
nota20 = parseFloat(nota20)

var nota30 = window.prompt("Digite a nota 3:");
nota30 = parseFloat(nota30)

var nota40= window.prompt("Digite a nota 4:");
nota40 = parseFloat(nota40)

var media1 = (nota10 + nota20 + nota30 + nota40)/4;


var mensagem = nome + ", Você Obteve a Media: " + media + " e " + nome1 + ", Você Obteve a Media: " + media1 ;
window.alert(mensagem);
