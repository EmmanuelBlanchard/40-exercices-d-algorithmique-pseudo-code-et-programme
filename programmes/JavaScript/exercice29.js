//module permettant la saisie clavier
var readline = require("readline-sync");

var choixMenuPrincipal;

do {
    afficherMenuPrincipal();

    choixMenuPrincipal = readline.question("Quel est votre choix ? : ");

    switch(choixMenuPrincipal) {
        case "A" : algorithmeCercle();
        break;
        case "B" : algorithmeRectangle();
        break;
        case "Q" : console.log("A +");
        break;
        default : console.log("Cas non pris en compte, recommencez !");
        break;
    }

} while (choixMenuPrincipal != 'Q');

function algorithmeCercle() {
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
}

function algorithmeRectangle() {
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
}

function afficherMenuPrincipal() {
    var message = "-------------------- \n";
    message = message + "----------Menu Principal----------\n";
    message = message + "A : Cercle \n";
    message = message + "B : Rectangle \n";
    message = message + "Q : Quitter \n";
    message = message + "--------------------";
    console.log(message);
}
