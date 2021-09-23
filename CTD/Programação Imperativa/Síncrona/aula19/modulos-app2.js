  const individuos = [
    {
        sexo: "M",
        altura: 178,
    },
    {
        sexo: "F",
        altura: 176,
    },
    {
        sexo: "M",
        altura: 191,
    },
    {
        sexo: "M",
        altura: 176,
    },
    {
        sexo: "M",
        altura: 164,
    },
    {
        sexo: "M",
        altura: 179,
    },
    {
        sexo: "M",
        altura: 171,
    },
    {
        sexo: "M",
        altura: 171,
    },
    {
        sexo: "M",
        altura: 171,
    },
    {

        sexo: "M",
        altura: 171,
    },
    {

        sexo: "F",
        altura: 164,
    },
    {
        sexo: "F",
        altura: 171,
    },
    {
        sexo: "F",
        altura: 160,
    },
    {
        sexo: "F",
        altura: 161,
    },
    {
        sexo: "F",
        altura: 161,
    },
];

const maior = Math.max(...individuos.map((item) => item.altura)); // 191
const menor = Math.min(...individuos.map((item) => item.altura)); // 160



const mediaMulheres =
    individuos
        .filter((item) => item.sexo === "F")
        .reduce((acc, item) => {
            return acc + item.altura;
        }, 0) / individuos.filter((item) => item.sexo === "F").length;

const numeroHomens = individuos.filter((item) => item.sexo === "M").length;


module.exports = {maior, menor, mediaMulheres, numeroHomens};