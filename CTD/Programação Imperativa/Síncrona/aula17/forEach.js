/* 
forEach() é um método que chama uma função para cada elemento.
*/

let pizza = ['fatia1', 'fatia2', 'fatia3', 'fatia4'];
let pessoas = ['Gladston', 'Val', 'Lis', 'Célia'];
let pratos = [];

pessoas.forEach(
    function (pessoa, i) {
       pratos = pessoa.concat(" ",pizza[i]);
       console.log(pratos);
    }
)