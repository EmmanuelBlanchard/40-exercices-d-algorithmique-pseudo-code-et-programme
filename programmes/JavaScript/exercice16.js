var nombreAleatoire1 = Math.floor(Math.random()*20 + 1);
var nombreAleatoire2 = Math.floor(Math.random()*20 + 1);
var nombreAleatoire3 = Math.floor(Math.random()*20 + 1);

var nombreLePlusPetit = retournerValeurPlusPetite(nombreAleatoire1, nombreAleatoire2, nombreAleatoire3);
var nombreLePlusGrand = retournerValeurPlusGrande(nombreAleatoire1, nombreAleatoire2, nombreAleatoire3);

console.log("nombre1 : " + nombreAleatoire1 + " - nombre2 : " + nombreAleatoire2 + " - nombre3 : " + nombreAleatoire3);

console.log(nombreLePlusPetit + " est le nombre le plus petit");
console.log(nombreLePlusGrand + " est le nombre le plus grand");

function retournerValeurPlusPetite(nombreAleatoire1, nombreAleatoire2, nombreAleatoire3) {
    if(nombreAleatoire1 <= nombreAleatoire2 && nombreAleatoire1 <= nombreAleatoire3) {
        return nombreAleatoire1;
    } else if (nombreAleatoire2 <= nombreAleatoire1 && nombreAleatoire2 <= nombreAleatoire3) {
        return nombreAleatoire2;
    } else {
        return nombreAleatoire3;
    }
}

function retournerValeurPlusGrande(nombreAleatoire1, nombreAleatoire2, nombreAleatoire3) {
    if(nombreAleatoire1 >= nombreAleatoire2 && nombreAleatoire1 >= nombreAleatoire3) {
        return nombreAleatoire1;
    } else if (nombreAleatoire2 >= nombreAleatoire1 && nombreAleatoire2 >= nombreAleatoire3) {
        return nombreAleatoire2;
    } else {
        return nombreAleatoire3;
    }
}