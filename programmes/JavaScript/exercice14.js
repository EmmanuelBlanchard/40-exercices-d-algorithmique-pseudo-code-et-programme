var readline = require("readline-sync");

var nombreAleatoire = Math.floor(Math.random()*101);
var nombreSaisi = 0;

console.log("Devinez le nombre choisi par l'ordinateur entre 1 et 100 !");

var nombrebEssais = 1;
do {
    console.log("***************************");
    console.log("Numéro de l'essai : " + nombrebEssais);
    nombrebEssais = nombrebEssais + 1;
    
    nombreSaisi = readline.questionInt("Saisir un nombre : ");
    if(nombreSaisi < nombreAleatoire) {
        console.log("Trop petit");
    }
    if(nombreSaisi > nombreAleatoire) {
        console.log("Trop grand");
    }
} while (nombreSaisi !== nombreAleatoire);

console.log("Félicitations ! Le nombre était : " + nombreSaisi);