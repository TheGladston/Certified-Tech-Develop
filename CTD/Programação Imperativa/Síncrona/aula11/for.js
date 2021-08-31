//Repetição básica for
for (let i = 1; i <= 5; i++) {
    console.log(`Volta número: ${i}`);
}

//Repetição for que conta os itens de um array e imprime o index de cada elemento
const idades = [5, 10, 15, 20, 25];

for (let i = 0; i < idades.length; i++) {
    const element = idades[i];
    console.log(element)
}

console.log("Acabei!!!");

//Usando repetição for dentro de uma função
function exibeParOuImpar(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0)
            console.log("Par");
        else
            console.log("ÍMPAR");
    }
}

exibeParOuImpar(27)

//Função com repetição para imprimir os números pares e escrever ímpar para os números ímpares
function imprimirNum(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0)
            console.log(i)
        else
            console.log("ÍMPAR")

    }
}

imprimirNum(100)


//Função que adiciona taxa em preços através de repetição
const precoSemTaxa = [ 100, 1100, 900, 654, 1300];
const taxa = 1.21;
let precoComTaxa = [];

function addTaxa(precoSemTaxa) {
    for (let i = 0; i < precoSemTaxa.length; i++) {
        precoComTaxa.push(precoSemTaxa[i] * taxa);
        console.log(precoComTaxa[i])   
    }
}

addTaxa(precoSemTaxa);