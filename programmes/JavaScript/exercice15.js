var readline = require("readline-sync");

var note1 = saisieNote();
var note2 = saisieNote();
var note3 = saisieNote();

console.log("La moyenne est de : " + (note1+note2+note3) / 3);

function saisieNote() {
    var nombreSaisi = 0;
    nombreSaisi = readline.questionInt("Saisir un note entre 0 et 20 : ");
    while (nombreSaisi < 0 || nombreSaisi > 20) {
        nombreSaisi = readline.questionInt("Mauvaise saisie, recommencez : ");
    }
    return nombreSaisi;
}

