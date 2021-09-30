//module permettant la saisie clavier
var readline = require("readline-sync");

const DOLLAR = 1.22;
const ROUBLE = 91.14;
const YUAN = 7.89;
const LIVRE = 0.89;

var montantSaisi = readline.question("Saisir la somme en euro a convertir : ");
afficherMenuDevise();

var valeurConvertie = 0;
var devise;
do {
    //saisie clavier et affichage d'un message au préalable :
    devise = readline.question("Saisir la devise souhaitee : ");
    switch(devise) {
        case "$" : 
        case "Dollars" : valeurConvertie = DOLLAR * montantSaisi;
        break;
        case "Roubles" : valeurConvertie = ROUBLE * montantSaisi;
        break;
        case "Yuans" : valeurConvertie = YUAN * montantSaisi;
        break;
        case "Livres" : valeurConvertie = LIVRE * montantSaisi;
        break;
        default: console.log("La devise choisie n'est pas prise en compte");
        break;
    }
} while (valeurConvertie === 0);

console.log(montantSaisi + "€ - " + valeurConvertie + " " + devise);

function afficherMenuDevise() {
    var texte = "*********************\n";
    texte = texte + "$ ou Dollars (US)\n";
    texte = texte + "Roubles (Russie)\n";
    texte = texte + "Yuans (Chine)\n";
    texte = texte + "Livres (Royaume-Uni)\n";
    console.log(texte);
}
