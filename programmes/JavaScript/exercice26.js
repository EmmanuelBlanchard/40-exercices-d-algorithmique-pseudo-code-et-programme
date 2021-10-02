//module permettant la saisie clavier
var readline = require("readline-sync");

nombreFactorielleSaisi = readline.questionInt("Quelle est la factorielle voulue ? : ");

console.log("------------------");
console.log("Version boucle : " + "\n" + "La factorielle de " + nombreFactorielleSaisi + " = " + factorielleVersionBoucle(nombreFactorielleSaisi));
console.log("------------------");
console.log("Version récursive : " + "\n" + "La factorielle de " + nombreFactorielleSaisi + " = " + factorielleVersionRecursive(nombreFactorielleSaisi));

function factorielleVersionBoucle(nombreFactorielleSaisi) {
    var resultatFactorielle = 1;
    for(var i = 1; i <= nombreFactorielleSaisi ; i = i + 1) {
        resultatFactorielle = resultatFactorielle * i;
    }
    return resultatFactorielle;
}

function factorielleVersionRecursive(nombreFactorielleSaisi) {
    if(nombreFactorielleSaisi <= 1) {
        return 1;
    } else {
        return nombreFactorielleSaisi * factorielleVersionRecursive(nombreFactorielleSaisi - 1);
    }
}
