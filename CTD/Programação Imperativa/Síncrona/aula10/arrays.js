let array = ["Gladston", 1.83, 33, "casado"];

console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

console.log(array.length +" .lenght");

array.push("Branco", "Olhos Verdes");
console.log(array +" push");

array.pop();
console.log(array +" pop");

array.shift();
console.log(array +" shift");

array.unshift("Homem", "Brasileiro");
console.log(array +" unshift");

array.indexOf();
console.log(array.indexOf("Branco") +" indexOf");

array.join();
console.log(array.join(" - ") +" join");

array.lastIndexOf();
console.log(array.lastIndexOf(33) +" lastIndexOf");

array.includes();
console.log(array.includes(33) +" includes");

