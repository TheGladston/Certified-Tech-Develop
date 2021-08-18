//1
function convertPolToCm (pol){
    let resultado = pol * 2.54;
    return resultado
}

console.log(convertPolToCm(10))

//2
function url(n){
    let result = "http://www."+n+".com.br"
    return result
}

console.log(url("sitedoGladston"))

//3
function recebeString(string){
    return string + "!"
}

console.log(recebeString("Bom dia"))

//4
function calcIdadeCao(n){
    return n * 7
}

console.log(calcIdadeCao(5))

//5
function calcHrTrab(n){
    let HrSalMes = 8500 / 160;
    return n * HrSalMes
}

console.log(calcHrTrab(10))

//6
function imc(peso, altura){
    let convertAltura = altura /100;
    return (peso / (convertAltura * convertAltura));  
}

console.log(imc(87, 183))