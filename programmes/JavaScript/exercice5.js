var nom = "Milo BLANCHARD";
var age = 16;
var sexe = true;

var message = "Bonjour " + nom + "\n";
if(sexe) {
    message = message + "Vous êtes un homme";
    if(age >= 18) {
        message = message + " majeur";
    } else {
        message = message + " mineur";
    }
} else {
    message = message + "Vous êtes une femme";
    if(age >= 18) {
        message = message + " majeure";
    } else {
        message = message + " mineure";
    }
}
console.log(message);
