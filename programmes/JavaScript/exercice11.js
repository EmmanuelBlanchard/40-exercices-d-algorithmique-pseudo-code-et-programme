var readline = require("readline-sync");

var separateur = "*";
var ligneSeparation = "";
for(var i = 0 ; i <= 30 ; i++){
    ligneSeparation = ligneSeparation + separateur;
}

console.log(ligneSeparation);
console.log("Merci de saisir vos informations personnelles !");
console.log(ligneSeparation);

var prenom = readline.question("Saisir votre prenom : ");
var nom = readline.question("Saisir votre nom : ");
var adresse = readline.question("Saisir votre adresse : ");
var cp = readline.question("Saisir votre code postal : ");
var ville = readline.question("Saisir votre ville : ");

console.log(ligneSeparation);
console.log("Vous avez saisi : ");
console.log(prenom + " " + separateur + " " + nom);
console.log(adresse);
console.log(cp + " " + separateur + " " + ville);
console.log("A bientôt");
console.log(ligneSeparation);