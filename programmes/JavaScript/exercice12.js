var readline = require("readline-sync");

var nombre = readline.questionInt("Saisir le nombre : ");
var puissance = readline.questionInt("Saisir la puissance : ");

var total = 1;
for(var i = 1 ; i <= puissance ; i++){
    total = total * nombre;
}

var total2 = Math.pow(nombre,puissance);

console.log("Total sans fonction : " +total);
console.log("Total avec fonction : " +total2);