var readline = require("readline-sync");

var nombreSaisi = -1;
var nbEssais = 0;

do {
    nbEssais = nbEssais + 1;
    if(nbEssais > 1) {
        console.log("********* Essai numéro " + nbEssais + " *********");
    }
    nombreSaisi = readline.questionInt("Saisir un nombre pair et divisible par 3 : ");
    if(nombreSaisi % 2 != 0) {
        console.log("Le nombre n'est pas pair !");
    }
    if(nombreSaisi % 3 != 0) {
        console.log("Le nombre n'est pas divisible par 3 !");
    }
} while (nombreSaisi % 2 != 0 || nombreSaisi % 3 != 0);

console.log("*************************");
console.log("Le nombre " + nombreSaisi + " est divisible par 2 et par 3");