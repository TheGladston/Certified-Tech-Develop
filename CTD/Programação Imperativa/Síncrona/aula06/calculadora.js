function somar(n1, n2){
    return n1 + n2
}

function subtrair(n1, n2){
    return n1 - n2
}

function multiplicar(n1, n2){
    return n1 * n2
}

function dividir(n1, n2){
    return n1 / n2
}

var n1 = 2;
var n2 = 2;

console.log ("-------------- Teste de Operações / Calculadora --------------")

console.log(`SOMA 2 + 2 = ${somar(n1, n2)}`)
console.log(`SUBTRAÇÃO 2 - 2 = ${subtrair(n1, n2)}`)
console.log(`MULTIPLICAR 2 * 2 = ${multiplicar(n1, n2)}`)
console.log(`DIVISÃO 2 / 2 = ${dividir(n1, n2)}`)
console.log(`DIVISÃO 0 / 2 = ${dividir(0, 2)}`)
console.log(`DIVISÃO 2 / 0 = ${dividir(2, 0)}`)
console.log(`DIVISÃO 0 / 0 = ${dividir(0, 0)}`)

function quadradoDoNumero(n){
    return multiplicar(n, n)
}

function mediaDeTresNumeros(n1, n2, n3){
    let somaDosNum = somar(n1, n2) + n3;
    return dividir(somaDosNum, 3)
}

function calculaPorcentagem(valor, porcento){
    let totalPorcentagem = dividir(valor, 100) * porcento
    return totalPorcentagem
}
console.log(calculaPorcentagem(350, 27.5))

function geradorDePorcentagem(quantoPorcento, desseNum){
    let achaPorcento = quantoPorcento / desseNum;
    return multiplicar(achaPorcento, 100)
}