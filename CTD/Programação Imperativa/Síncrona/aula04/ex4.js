// var pessoa = {
//     nome: ["José", "Carlos", "Aline", "Ana"],
//     sobrenome:["da Silva", "de Souza", "Ferreira", "Paula"],
//     idade:[27, 28, 26],
//     peso: [83.5, 80.1, 63.7, 55],
//     altura:[1.70, 1.76, 1.53, 1.62],
//     plano: ["ouro", "diamante", false, "prata"]
// }

var pessoas = [
    {
        nome: "José",
        sobrenome:"da Silva",
        idade: 27,
        peso: 83.5,
        altura: 1.70,
        plano: "ouro",

        getIMC : function()
        {
            return this.peso / (this.altura * this.altura)
        }
    },
    {
        nome: "Joao",
        sobrenome:"Paulo",
        idade: 22,
        peso: 97,
        altura: 1.85,
        plano: "prata",

        getIMC : function()
        {
            return this.peso / (this.altura * this.altura)
        }
    }
]
var pessoamaisgorda

pessoas.forEach(pessoa => {
    if (pessoamaisgorda === undefined)
        pessoamaisgorda = pessoa 

    if( pessoa.getIMC() > pessoamaisgorda.getIMC() )
        pessoamaisgorda = pessoa

    console.log(pessoa.nome, pessoa.getIMC().toFixed(2))
    // console.log(`${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade} anos e seu índice de massa corporal é de ${(pessoa.peso / (pessoa.altura * pessoa.altura)).toFixed(2)}.`)
});


console.log(pessoamaisgorda.nome, pessoamaisgorda)