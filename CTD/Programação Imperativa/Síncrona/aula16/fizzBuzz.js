// let fizzBuzz = (a, b) => {
//     for (let i = 0; i <= 100; i++) {
//         if (typeof a || b !== 'number')
//             console.log('Não é um número, é uma string. Por favor repita.')
//         else if ((i % a === 0) && (i % b === 0))
//             console.log('FizzBuzz')
//         else if (i % a === 0)
//             console.log('Fizz')
//         else if (i % b === 0)
//             console.log('Buzz')
//         else
//             console.log(i)
//     }
//     return
// }

// fizzBuzz(3,5)

/* Sala 5
Paulo Rossi
Gladston de Paula
Mauricio Gregory
Gustavo Souza
Kantuta Molina */

let fizzBuzz = (a, b) => {
    for (let i = 0; i <= 100; i++) {
        if ((i % a === 0) && (i % b === 0))
            console.log('FizzBuzz')
        else if (i % a === 0)
            console.log('Fizz')
        else if (i % b === 0)
            console.log('Buzz')
        else
            console.log(i)
    }
}

function saudacao(nome, callback, n1, n2) {
    console.log(`Olá ${nome}!`)
    return callback (n1, n2)
}

saudacao('Gladston', fizzBuzz, 3, 5)
