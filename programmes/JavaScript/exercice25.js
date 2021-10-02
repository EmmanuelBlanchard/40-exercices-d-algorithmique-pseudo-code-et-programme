//module permettant la saisie clavier
var readline = require("readline-sync");

nombreDeLaTailleDuCarre = readline.questionInt("Quel est le nombre de la taille du carre voulez vous ? ");

var grandeLigne = "";

for(var i = 1; i <= nombreDeLaTailleDuCarre ; i = i + 1) {
    grandeLigne = grandeLigne + "**";
}

var petiteLigne = "";
for(var j = 1 ; j <= nombreDeLaTailleDuCarre ; j = j + 1) {
    if(j === 1 || j === nombreDeLaTailleDuCarre) {
        petiteLigne = petiteLigne + "**";
    } else {
        petiteLigne = petiteLigne + "  ";
    }
}

for(var k = 1 ; k <= nombreDeLaTailleDuCarre ; k = k + 1) {
    if(k === 1 || k === nombreDeLaTailleDuCarre) {
        console.log(grandeLigne);
    } else {
        console.log(petiteLigne);
    }
}