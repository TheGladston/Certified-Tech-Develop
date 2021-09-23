let importando = require('./');

console.log(`A maior altura é: ${importando.maior / 100}m`);
console.log(`A menor altura é: ${importando.menor /100}m`);
console.log(`A média de altura das mulheres é: ${(importando.mediaMulheres / 100).toFixed(2)}m`);
console.log(`O número de homens é: ${importando.numeroHomens}`);