// module permettant la saisie clavier
var readline = require("readline-sync");

var choix = readline.questionInt("Quel nombre voulez-vous ? ");
console.log("Les 5 nombres précèdents sont : ");
for(var i = choix - 1 ; i >= choix -1 -4; i = i - 1) {
    console.log(i);
}
console.log("Les 5 nombres suivants sont : ");
for(var i = choix + 1 ; i <= choix +1 +4; i = i +1) {
    console.log(i);
}


