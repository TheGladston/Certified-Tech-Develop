// sort () ordenar
// sort () 'e um metodo que ordena os elementos de um array


let frutas = ["banana","laranja","limao","abacaxi", "maca","manga"];
console.log(frutas);
frutas.sort();
console.log(frutas);

let numeros = [10, 100,2, 5, 25, 10];
// ordem crescente
console.log(numeros.sort(
    function(a,b){
        return a-b;
    }
));

// ordem decrescente
console.log(numeros.sort(
    function(a,b){
        return b-a;
    }
));

/* 
O método sort permite ordenar elementos de um array e retorna o array ordenado
alterando as posições dos elementos.
Usamos o operador aritmético para dizer em qual tipo de ordenação (crescente ou descrescente)
queremos que ele retorne.
 */