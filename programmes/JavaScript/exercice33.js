//module permettant la saisie clavier
var readline = require("readline-sync");

var listeUtilisateurs = [
    ["Tya","test1"],
    ["Milo","test2"],
    ["Lili","test3"]
];

var choixLogin;
var choixMotDePasse;
var connecte;

do {
    choixLogin = readline.question("Saisir votre login ? : ");
    choixMotDePasse = readline.question("Saisir votre mot de passe ? : ");
    connecte = estConnecte(listeUtilisateurs,choixLogin,choixMotDePasse);
    if(!connecte) {
        console.log("Combinaison login / mot de passe incorrecte, recommencez !");
    }
} while (!connecte);

console.log("Vous êtes connecté !");

function estConnecte(utilisateurs,choixLogin,choixMotDePasse) {
    for(var i = 0 ; i < utilisateurs.length; i++) {
        if(choixLogin === utilisateurs[i][0] && choixMotDePasse === utilisateurs[i][1]) {
            return true;
        }
    }
    return false;
}
