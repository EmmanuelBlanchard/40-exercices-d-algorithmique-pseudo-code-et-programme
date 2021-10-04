//module permettant la saisie clavier
var readline = require("readline-sync");

var listeUtilisateurs = [
    ["Tya","test1","admin"],
    ["Milo","test2","user"],
    ["Lili","test3","user"]
];

function estConnecte(utilisateurs,choixLogin,choixMotDePasse) {
    for(var i = 0 ; i < utilisateurs.length; i++) {
        if(choixLogin === utilisateurs[i][0] && choixMotDePasse === utilisateurs[i][1]) {
            return utilisateurs[i][2];
        }
    }
    return "";
}

var choixLogin;
var choixMotDePasse;
var role = "";
var nombreEssai = 1;
const NOMBREESSAISTOTAL = 3;
do {
    choixLogin = readline.question("Saisir votre login ? : ");
    choixMotDePasse = readline.question("Saisir votre mot de passe ? : ");
    role = estConnecte(listeUtilisateurs,choixLogin,choixMotDePasse);
    if(role === "") {
        console.log("Combinaison login / mot de passe incorrecte, encore " + (NOMBREESSAISTOTAL - nombreEssai) + " essais !");
        nombreEssai++;
    }
} while (role === "" && nombreEssai <= NOMBREESSAISTOTAL);

if(nombreEssai > NOMBREESSAISTOTAL) {
    console.log("Vous avez essayé trop de fois ! \n");
    console.log("Fin du programme !");
} else {
    console.log("Vous êtes connecté ! et vos accès sont : " + role);
}
