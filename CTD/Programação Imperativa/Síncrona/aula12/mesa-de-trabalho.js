//PARTE 1

/* 1. Escreva um algoritmo para calcular o consumo médio de um automóvel (medido em km/l), 
dado que são conhecidos a distância total percorrida e o volume de combustível consumido para percorrê-la (medido em litros). */
function consumoMedioAutomovel(distancia, combConsumido) {
    return distancia / combConsumido
}

console.log(`${consumoMedioAutomovel(100, 4.5).toFixed(2)}Km/l`)


/* 2. Em uma festa, homens pagam 20 reais de entrada e as mulheres pagam 17. Crie um programa que pergunta quantos homens e quantas mulheres participaram da festa e calcula o valor total arrecadado com as entradas.
 */

var homens = 20;
var mulheres = 17;

function receitaFesta(qtdHomens, qtdMulheres) {
    return (qtdHomens * homens) + (qtdMulheres * mulheres);
}

console.log(`O valor arrecadado na festa foi: $${receitaFesta(10, 10)}`);

/* 3. Escreva um programa que ajuda os alunos a calcularem as notas desta disciplina. O programa deve perguntar as notas da primeira e da segunda prova, calcular a média aritmética entre elas, e exibir na tela. */

function calcMedia(n1, n2) {
    return (n1 + n2) / 2
}

console.log(`Sua média em dus provas foi: ${calcMedia(7.5, 8.9)}`);

/* 4. Escreva um programa que solicita o nome de 3 alimentos e então exibe o nome dos 3 separados por virgulas. Ex: maçã, pera, banana. */

function alimentos(a1, a2, a3) {
    return `${a1}, ${a2}, ${a3}`
}

console.log(alimentos("Maçã", "Banana", "Cupuaçu"));


//PARTE 2

/* 1. Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 10. */

function mostraNum(n) {
    if (n > 10) {
        return `Esse número é maior que 10`
    } else {
        return `...`
    }
}

console.log(mostraNum(11));

/* 2. Escrever um algoritmo que leia dois valores inteiros e informe qual deles é o maior. */

function retornaMaior(n1, n2) {
    if (n1 > n2) {
        return n1
    } else {
        return n2
    }
}

console.log(retornaMaior(18, 16));

/* 3. Escrever um algoritmo que leia dois valores inteiros e informe se os números são iguais. */

function saoIguais(n1, n2) {
    if (n1 === n2) {
        return 'São iguais!'
    } else {
        return 'Não são iguais'
    }
}

console.log(saoIguais(17, 17));

/* 4. Solicite que o usuário digite um número. Informe então se este número é par ou ímpar. */

function parOuImpar(n) {
    if (n % 2 == 0) {
        return `É par!`
    } else {
        return `É ímpar!`
    }
}

console.log(parOuImpar(3));

/* 5. Crie um programa que receba um número inteiro e informa se este número é múltiplo de 10. */

function multiploDe10(n) {
    if (n % 10 == 0) {
        return `É multiplo de 10`
    } else {
        return `Não é multiplo de 10`
    }
}

console.log(multiploDe10(11));

// PARTE 3

/* 1 - Escreva um programa que solicita um número inteiro. Exiba uma mensagem de erro se o número informado estiver entre 15 e 25 ou entre 45 e 50. */

function numeroCerto(n) {
    if (n >= 15 && n <= 25 || n >= 45 && n <= 50) {
        return `ERROR`
    } else {
        return `${n}, Parabéns!!!`
    }
}

console.log(numeroCerto(45));

/* 2 - Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 80, menor que 25 ou igual a 40. */

function numeroCerto2(n) {
    if (n > 80 || n < 25 || n == 40) {
        return `ERROR`
    } else {
        return `${n}, Parabéns!!!`
    }
}

console.log(numeroCerto2(81));

/* 3 - Escrever um algoritmo que leia três valores inteiros e verifique se eles podem ser as medidas dos lados de um triângulo.
Exemplo:
let ladoA = 10
let ladoB = 10
let ladoC = 10
MENSAGEM:
"Os números digitados formam um TRIÂNGULO! (TRUE)"
"Os números digitados NÃO FORMAM um triângulo! (FALSE)" */

function triangulo(n1, n2, n3) {
    if (n1 == n2 && n2 == n3) {
        return `Os números digitados formam um TRIÂNGULO! (TRUE)`
    } else {
        return `Os números digitados NÃO FORMAM um triângulo! (FALSE)`
    }
}

console.log(triangulo(10, 11, 10));

/* 4 - Crie um programa que pergunte o nome do usuário. Exiba uma mensagem diferenciada caso o nome digitado seja "William", "Rafael" ou "JavaScript". */

function digaSeuNome(nome) {
    switch (nome) {
        case "William":
            return `Eu não gosto desse nome. [${nome}]`
            break;
        case "Rafael":
            return `Eu não gosto desse nome também. [${nome}]`
            break;
        case "JavaScript":
            return `Ok, eu sou chato, não gosto desse nome também. [${nome}]`
            break;
        default:
            return `Caramba, que nome legal. [${nome}]`
            break;
    }
}

console.log(digaSeuNome("João das Abobrinhas"));

// PARTE 4

/* 7 - Solicite que o usuário digite uma palavra de 6 caracteres.
Se for digitada uma palavra inválida, peça novamente, até que ele digite uma palavra correta. */

function digiteUmaPalavra(palavra) {
    palavraDigitada = palavra;
    contador = palavraDigitada.length;

    if (contador > 6 && contador < 6) {
        return `Palavra inválida. Digite novamente!`
    } else {
        return `Palavra digitada é: ${palavra} e ela tem ${contador} caracteres.`
    }
}

console.log(digiteUmaPalavra("palavra"))

// PARTE 5

/* 1 - Crie um vetor de caracteres de 10 posições. Insira a letra "JS" em todas as posições. */

const array10JS = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
    array10JS.shift();
    array10JS.push("JS");
}

console.log(array10JS);

