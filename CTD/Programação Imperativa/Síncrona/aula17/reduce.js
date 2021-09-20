/* 
Reduce() é um método que percorre o array e retorna um único valor.
Ele também acumula um resultado.
*/

let numeros = [1, 2, -3, 4, -5, 0, 7, 8, 9, 19];

let resultado = numeros.reduce(
    function (acumulador, elemento) {
        return acumulador + elemento;
    }
);

console.log(resultado);
