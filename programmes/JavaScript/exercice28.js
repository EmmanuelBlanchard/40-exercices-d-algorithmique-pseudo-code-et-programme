//module permettant la saisie clavier
var readline = require("readline-sync");

nombreLongueurRectangleSaisi = readline.questionInt("Quelle est la longueur du rectangle ? : ");

nombreLargeurRectangleSaisi = readline.questionInt("Quelle est la largeur du rectangle ? : ");

afficherMenu();

var choixMenu = 0;

do {
    choixMenu = readline.questionInt("Quel est votre choix ? : ");
} while (choixMenu != 1 && choixMenu != 2);

if(choixMenu === 1) {
    console.log("Le périmètre d'un rectangle de longueur " + nombreLongueurRectangleSaisi + " et de largeur " + nombreLargeurRectangleSaisi + " est de : " + retournePerimetreRectangle(nombreLongueurRectangleSaisi,nombreLargeurRectangleSaisi));
} else if(choixMenu === 2) {
    console.log("L'aire d'un rectangle de longueur " + nombreLongueurRectangleSaisi + " et de largeur " + nombreLargeurRectangleSaisi + " est de : " + retourneAireRectangle(nombreLongueurRectangleSaisi,nombreLargeurRectangleSaisi));
}

function afficherMenu() {
    var message = "-------------------- \n";
    message = message + "----------Menu----------\n";
    message = message + "1 : Périmètre \n";
    message = message + "2 : Aire \n";
    message = message + "--------------------";
    console.log(message);
}

function retournePerimetreRectangle(longueur,largeur) {
    return 2 * longueur + 2 * largeur;
}

function retourneAireRectangle(longueur,largeur) {
    return longueur * largeur;
}