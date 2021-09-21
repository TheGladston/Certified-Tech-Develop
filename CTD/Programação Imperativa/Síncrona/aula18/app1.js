/* 
Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) 
de 15 pessoas. Faça um programa que calcule e escreva:
- a maior e a menor altura do grupo;
- a média de altura das mulheres;
- o número de homens.
*/

// const individuos = [
//     {
//         sexo: "M",
//         altura: 178,
//     },
//     {
//         sexo: "F",
//         altura: 176,
//     },
//     {
//         sexo: "M",
//         altura: 191,
//     },
//     {
//         sexo: "M",
//         altura: 176,
//     },
//     {
//         sexo: "M",
//         altura: 164,
//     },
//     {
//         sexo: "M",
//         altura: 179,
//     },
//     {
//         sexo: "M",
//         altura: 171,
//     },
//     {
//         sexo: "M",
//         altura: 171,
//     },
//     {
//         sexo: "M",
//         altura: 171,
//     },
//     {

//         sexo: "M",
//         altura: 171,
//     },
//     {

//         sexo: "F",
//         altura: 164,
//     },
//     {
//         sexo: "F",
//         altura: 171,
//     },
//     {
//         sexo: "F",
//         altura: 160,
//     },
//     {
//         sexo: "F",
//         altura: 161,
//     },
//     {
//         sexo: "F",
//         altura: 161,
//     },
// ];

// const maior = Math.max(...individuos.map((item) => item.altura)); // 191
// const menor = Math.min(...individuos.map((item) => item.altura)); // 160

// console.log(maior, menor);

// const mediaMulheres =
//     individuos
//         .filter((item) => item.sexo === "F")
//         .reduce((acc, item) => {
//             return acc + item.altura;
//         }, 0) / individuos.filter((item) => item.sexo === "F").length;

// const numeroHomens = individuos.filter((item) => item.sexo === "M").length;

// console.log(mediaMulheres, numeroHomens);


//#################################

/* 
Daniel Alves
Gladston de Paula
Lelia Salles
Marcelo Cabral
Marco Thulio
Túlio Marinho
*/

var altura = [1.65, 1.80, 1.82, 1.73, 1.50, 1.71, 1.89, 2.03, 1.62, 1.51, 1.78, 1.85, 1.82, 1.20, 2.02];
var sexo = ["M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M"];


function alturaMaior(altura) {
    var maiorAltura = altura[0];
    for (let i = 0; i < altura.length; i++) {
        if (altura[i] > maiorAltura) {
            maiorAltura = altura[i];
        }
    }
    return maiorAltura;
}

function alturaMenor(altura) {
    var menorAltura = altura[0];
    for (let i = 0; i < altura.length; i++) {
        if (altura[i] < menorAltura[i]) {
            menor = altura[i];
        }
    }
    return menorAltura;
}

function mediaMulheres(sexo, altura) {
    var soma = 0;
    var media = 0;
    for (let i = 0; i < sexo.length; i++) {
        if (sexo[i] === "F") {
            soma += altura[i];
            media++;
        }
    }
    return (soma / media);
}

function qtdeHomens(sexo) {
    var homens = 0;
    for (let i = 0; i < sexo.length; i++) {
        if (sexo[i] === "M") {
            homens++;
        }
    }
    return homens;
}

console.log("A Maior Altura é " + alturaMaior(altura) + "m.");
console.log("A Menor Altura é " + alturaMenor(altura) + "m.");
console.log("A Média de Altura das Mulheres é de " + mediaMulheres(sexo, altura).toFixed(2) + "m.");
console.log("A Quantidade é de " + qtdeHomens(sexo) + " Homens.");



/* Cada espectador de um cinema respondeu a um questionário no qual constava sua idade
e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.
Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima: 
- a média das idades das pessoas que responderam ótimo;
- a quantidade de pessoas que reponderam regular;
- a porcentagem de pessoas que reponderam bom entre todos os espectadores analisados
*/

var idades = [18, 20, 25, 17, 40, 35, 39, 58, 65, 28, 21, 41, 14, 80, 12];
var opinioes = [1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3];

function otimoMedia(opinioes, idades) {
    var soma = 0;
    var qtde = 0;
    for (let i = 0; i < opinioes.length; i++) {
        if (opinioes[i] === 3) {
            soma += idades[i];
            qtde++;
        }
    }
    return (soma / qtde);
}

function regularQtde(opinioes) {
    var qtde = 0;

    for (let i = 0; i < opinioes.length; i++) {
        if (opinioes[i] === 1) {
            qtde++;
        }
    }
    return qtde;
}

function bomPorcentagem(opinioes) {
    var qtde = 0;

    for (let i = 0; i < opinioes.length; i++) {
        if (opinioes[i] === 2) {
            qtde++;
        }
    }
    return (qtde / opinioes.length) * 100;
}

console.log("Média de idades que Responderam ÓTIMO é " + otimoMedia(opinioes, idades).toFixed(1) + ".");
console.log("Responderam REGULAR " + regularQtde(opinioes) + " Pessoas.");
console.log("Responderam BOM " + bomPorcentagem(opinioes).toFixed(0) + "% das Pessoas.");