var nome = "José da Silva";
var idade = 27;
var peso = 83.5;
var altura = 1.70;
var plano = true;

var imc = (peso / (altura * altura)).toFixed(2);

console.log(`${nome} tem ${idade} anos e seu índice de massa corporal é de ${imc}.`)