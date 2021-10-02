//module permettant la saisie clavier
var readline = require("readline-sync");

nombreRayonCercleSaisi = readline.questionInt("Quel est le rayon du cercle ? : ");

afficherMenu();

var choixMenu = 0;

do {
    choixMenu = readline.questionInt("Quel est votre choix ? : ");
} while (choixMenu != 1 && choixMenu != 2);

if(choixMenu === 1) {
    console.log("Le périmètre d'un cercle de rayon " + nombreRayonCercleSaisi + " est de : " + retournePerimetreCercle(nombreRayonCercleSaisi));
} else if(choixMenu === 2) {
    console.log("L'aire d'un cercle de rayon " + nombreRayonCercleSaisi + " est de : " + retourneAireCercle(nombreRayonCercleSaisi));
}

function afficherMenu() {
    var message = "-------------------- \n";
    message = message + "----------Menu----------\n";
    message = message + "1 : Périmètre \n";
    message = message + "2 : Aire \n";
    message = message + "--------------------";
    console.log(message);
}

function retournePerimetreCercle(rayon) {
    return 2 * rayon * Math.PI;
}

function retourneAireCercle(rayon) {
    return rayon * rayon * Math.PI;
}