//exibir no terminal
console.log("Olá Mundo");
//exibir no Navegador
document.write("Olá Navegador");
//um alerta
alert("Alerta de Confirmação!");

//string


//Capturar o nome do Aluno
var nome = window.prompt("informe o Nome do Aluno:");
// Guardar a primeira nota
var nota1 = window.prompt("Digite a Nota 1");
//converte a nota1 de texto para decimal
nota1 = parseFloat (nota1);
// Guardar a segunda nota
var nota2 = window.prompt("Digite a Nota 2");
//converte a nota2 de texto para decimal
nota2 = parseFloat (nota2);
//calculo a média das duas notas
var media = (nota1 + nota2)/2;
//Gero a mensagem de exibição do nome e da média do aluno
var mensagem = nome + ", você obteve a média: " + media;
window.alert(mensagem);