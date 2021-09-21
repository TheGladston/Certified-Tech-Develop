/* 
Função para retornar o menor eo maior valor de um array
*/

Array.min = function(array) {
    return Math.min.apply(Math, array);
}

Array.max = function(array) {
    return Math.max.apply(Math, array);
}

let numeros = [5, 10, 1, 2, 9, 55, 77, 99];

console.log(Array.min(numeros));

console.log(Math.max.apply(Math, numeros));
