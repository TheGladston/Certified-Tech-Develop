const produtos = [
    {
        nome: "Produto 1",
        valor: 1000,
        qualidade: 7,
        status: true
    },
    {
        nome: "Produto 2",
        valor: 1600,
        qualidade: 9,
        status: true
    },
    {
        nome: "Produto 3",
        valor: 480,
        qualidade: 5,
        status: false
    },
    {
        nome: "Produto 4",
        valor: 1100,
        qualidade: 6,
        status: true
    },
    {
        nome: "Produto 5",
        valor: 1500,
        qualidade: 9,
        status: false
    },
    {
        nome: "Produto 6",
        valor: 1480,
        qualidade: 10,
        status: true
    },
]


const carrinho = produtos.filter(
    (produto) => produto.valor >= 482 && produto.valor <= 1600 && produto.qualidade > 6 && produto.status === true
);

const valorTotal = carrinho.reduce((total, item) => {
    return total + item.valor;
}, 0);


console.log(carrinho);
console.log(`Valor total: ${valorTotal}`);