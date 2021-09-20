/*
Filter() é um método que retorna um novo array,
com elementos que atendem uma condição 
 */

let idades = [22, 8, 17, 14, 30];
let maiores = idades.filter(
    function (idade) {
        return idade > 18;
    }
);

console.log(maiores);

//##########################################

let numeros = [1, 2, -3, 4, -5, 0, 7, 8, 9, 19];

let numerosMaiores = numeros.filter(
    elemento => elemento > 5
);

console.log(numerosMaiores)