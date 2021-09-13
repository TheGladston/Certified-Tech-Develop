/*
//fazer parecido com este exemplo: 
console.log("Resultado do Cálculo SOMAR = "+calculo.soma(2,3));

// enunciado
calculo2.subtrair(20,3); // calcular
calculo3.multiplicar(20,3); // calcular
calculo4.dividir(20,3); // calcular
maiuscula.maiuscula('silvia'); // converter em letra maiúcula
mais.maiuscula('aaa'); // converter em letra maiúcula 
*/

function subtrair(n1, n2) {
    return n1-n2
}

function multiplicar(n1, n2) {
    return n1*n2
}

function dividir(n1, n2) {
    return n1/n2
}

function maiuscula(palavra) {
   return palavra.toUpperCase()
}

module.exports = {subtrair, multiplicar, dividir, maiuscula}