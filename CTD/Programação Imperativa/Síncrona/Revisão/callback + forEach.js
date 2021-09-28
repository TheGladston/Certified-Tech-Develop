const frutas = ['Maçã', 'Banana', 'Melancia']

function listaCompras(nome, indice) {
    console.log(`${indice + 1} - ${nome}`)
}
frutas.forEach(listaCompras)
//A impressão é:
//1 - Maçã
//2 - Banana
//3 – Melancia

// ######################

const pets = [
    {
        nome: 'Bob',
        raca: 'Labrador',
        idade: 2,
        cliente: true
    },

    {
        nome: 'Ted',
        raca: 'srd',
        idade: 5,
        cliente: true
    }
];

function clientes(pet) {
    console.log(`${pet.nome} - ${pet.raca}`)
}

pets.forEach(clientes)
