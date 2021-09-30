//module permettant la saisie clavier
var readline = require("readline-sync");

var langueSaisie = "";

do {
    //saisie clavier et affichage d'un message au préalable :
    langueSaisie = readline.question("Choisir la langue : AL / EN / ES / PO / IT : ");
} while (langueSaisie != 'AL' && langueSaisie != 'EN' && langueSaisie != 'ES' && langueSaisie != 'PO' && langueSaisie != 'IT')

switch(langueSaisie) {
    case 'AL': console.log("Hallo");
    break;
    case 'EN': console.log("Hello");
    break;
    case 'ES': console.log("Buenos dias");
    break;
    case 'PO': console.log("Ola");
    break;
    case 'IT': console.log("Buongiorno");
    break;
    default: console.log("Langue non prise en compte");
    break;
}