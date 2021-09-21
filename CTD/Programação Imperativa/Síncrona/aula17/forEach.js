/* 
forEach() é um método que chama uma função para cada elemento.
*/

let pizza = ['fatia1', 'fatia2', 'fatia3', 'fatia4'];
let pessoas = ['Gladston', 'Val', 'Lis', 'Célia'];
let prato = [];
let count = 0;

pessoas.forEach(
    function (pessoa, i) {
       prato = pessoa.concat(" ",pizza[i]);
       console.log(prato);
    }
)

pessoas.forEach( (pessoa) => {
    let fatia = pizza[count];
    if( (fatia != undefined) || (fatia != null) )
    {
        prato.push(`${pessoa} recebeu ${fatia}`);
        count++;
    }
});

console.log(prato);