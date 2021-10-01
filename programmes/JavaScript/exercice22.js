/*
function verificationAnneeBissextile(valeur) {

    if(valeur % 4 == 0 && valeur % 100 != 0 || valeur % 400 == 0) {
        console.log(valeur + " est une année bissextile");
    } else {
        console.log(valeur + " est une année non bissextile");
    }
}

verificationAnneeBissextile(1900);
verificationAnneeBissextile(2000);
verificationAnneeBissextile(2020);
*/

function estBissextitle(annee) {
    return ((annee % 4 === 0 && annee % 100 != 0) || annee % 400 === 0)
}

function affichageAnneeBissextile(annee) {
    var message = annee + " est une année ";
    if(!estBissextitle(annee)){
        message = message + "non ";
    }
    message = message + "bissextitle";
    console.log(message);
}

affichageAnneeBissextile(1900);
affichageAnneeBissextile(2000);
affichageAnneeBissextile(2020);