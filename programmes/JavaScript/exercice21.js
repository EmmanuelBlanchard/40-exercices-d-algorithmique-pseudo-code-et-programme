//module permettant la saisie clavier
var readline = require("readline-sync");

const TVA = 20;
var reponseQuelProduit = 0;
var prix = 0;

afficherMenuProduits();

while (reponseQuelProduit < 1 || reponseQuelProduit > 4) {
    reponseQuelProduit = readline.questionInt("Quel produit voulez-vous acheter ?");
    switch(reponseQuelProduit) {
        case 1 : prix = 400;
        break;
        case 2 : prix = 700;
        break;
        case 3 : prix = 200;
        break;
        case 4 : prix = 900;
        break;
        default : console.log("Produit Inexistant, recommencez");
        break;
    }
};

var reponseNombreDuProduit = 0;
while (reponseNombreDuProduit <= 0) {
    reponseNombreDuProduit = readline.questionInt("Combien de produits voulez-vous ?");
};

console.log("Total HT : " + (prix * reponseNombreDuProduit) + " euros" + "\n" + "Total TTC : " + (prix * reponseNombreDuProduit * (1+TVA / 100)) + " euros");

function afficherMenuProduits() {
    var texte = "Voici la liste des produits : \n";
    texte = texte + "1 - TV 400 euros \n";
    texte = texte + "2 - Ordinateur 700 euros \n";
    texte = texte + "3 - Téléphone 200 euros \n";
    texte = texte + "4 - Portable 900 euros \n";
    console.log(texte);
}
