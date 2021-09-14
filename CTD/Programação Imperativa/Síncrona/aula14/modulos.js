let cumprimento = 'Boa Tarde';
cumprimento = cumprimento.toUpperCase();

module.exports = cumprimento;

function soma(n1, n2) {
    return n1 + n2
};

// module.exports = teste;

let cachorro = {
    nome: 'Maurício',
    idade: 3,
    cor:'Branco',
    sexo: 'macho',
    raca:'Bulldog'
}

let ave = {
    nome: 'Renata',
    idade: 13,
    cor:'Branco',
    sexo: 'macho',
    raca:'Calopsita'
}

module.exports = {cachorro, ave, cumprimento, soma};
