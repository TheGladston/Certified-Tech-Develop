// splice () eh um metodo que serve para remover 
// e adicionar elementos no array
// da sintaxe: array.splice(inicio, quantidade, item2 ....)
// quantidade eh opcional - numeros inteiros 


let frutas = ['banana','laranja','limao','maca','manga'];

let citricas = frutas.slice(1,3); // laranja, limao
console.log(frutas);
frutas.splice(2,0,"mamao","kiwi");
console.log("lista com adicao....:",frutas);