var nombreAleatoire = Math.floor(Math.random()*10 + 1);
console.log("Nombre Arabe : " + nombreAleatoire);

var nombreRomain = "";

switch(nombreAleatoire) {
    case 1: nombreRomain = "I";
    break;
    case 2: nombreRomain = "II";
    break;
    case 3: nombreRomain = "III";
    break;
    case 4: nombreRomain = "IV";
    break;
    case 5: nombreRomain = "V";
    break;
    case 6: nombreRomain = "VI";
    break;
    case 7: nombreRomain = "VII";
    break;
    case 8: nombreRomain = "VIII";
    break;
    case 9: nombreRomain = "IX";
    break;
    case 10: nombreRomain = "X";
    break;
    default: console.log("Nombre non pris en compte");
    break;
}

if(nombreRomain != "") {
    console.log("Equivalent nombre romain : " + nombreRomain);
} else {
    console.log("Le nombre aléatoire généré n'est pas compris en 1 et 10")
}