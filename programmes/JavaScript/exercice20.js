//module permettant la saisie clavier
var readline = require("readline-sync");

var nombreAleatoire1 = Math.floor(Math.random()* 100 + 1);
var nombreAleatoire2 = Math.floor(Math.random()* 100 +1);
var operation = Math.floor(Math.random()* 4 + 1);
var reponse;
var bonneReponse = 0;

console.log("Quel est le résultat du calcul suivant : ");

switch(operation) {
    case 1 : 
        console.log(nombreAleatoire1 + " + " + nombreAleatoire2 + " = ");
        bonneReponse = nombreAleatoire1 + nombreAleatoire2;
    break;
    case 2 : 
        console.log(nombreAleatoire1 + " - " + nombreAleatoire2 + " = ");
        bonneReponse = nombreAleatoire1 - nombreAleatoire2;
    break;
    case 3 : 
        console.log(nombreAleatoire1 + " * " + nombreAleatoire2 + " = ");
        bonneReponse = nombreAleatoire1 * nombreAleatoire2;
    break;
    case 4 : 
        console.log(nombreAleatoire1 + " / " + nombreAleatoire2 + " = ");
        bonneReponse = nombreAleatoire1 / nombreAleatoire2;
    break;
    default : console.log("Erreur");
    break;
}

do {
    reponse = readline.questionInt("Quel est votre reponse ?");
    if(reponse === bonneReponse) {
        console.log("Bonne réponse, félicitations");
    } else {
        console.log("Mauvaise réponse, recommencer !");
    }
} while (reponse !== bonneReponse);
