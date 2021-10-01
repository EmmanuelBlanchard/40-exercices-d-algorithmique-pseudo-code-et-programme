function estBissextitle(annee) {
    return ((annee % 4 === 0 && annee % 100 != 0) || annee % 400 === 0)
}

function nombreJoursMoisAnnee(mois, annee) {
    switch(mois) {
        case "Janvier" : nombreJours = 31;
        break;
        case "Février" : 
            if(estBissextitle(annee)) {
                nombreJours = 29;
            } else {
                nombreJours = 28;
            }
        break;
        case "Mars" : nombreJours = 31;
        break;
        case "Avril" : nombreJours = 30;
        break;
        case "Mai" : nombreJours = 31;
        break;
        case "Juin" : nombreJours = 30;
        break;
        case "Juillet" : nombreJours = 31;
        break;
        case "Aout" : nombreJours = 31;
        break;
        case "Septembre" : nombreJours = 30;
        break;
        case "Octobre" : nombreJours = 31;
        break;
        case "Novembre" : nombreJours = 30;
        break;
        case "Décembre" : nombreJours = 31;
        break;
        default : nombreJours = 0;
        break;
    }
}

function affichageNombreJoursMoisAnnee(mois,annee) {
    nombreJoursMoisAnnee(mois, annee);
    var message =  nombreJours + " jours en " + mois + " " + annee;
    console.log(message);
}

affichageNombreJoursMoisAnnee("Janvier", 2019);
affichageNombreJoursMoisAnnee("Février", 2019);
affichageNombreJoursMoisAnnee("Février", 2020);
affichageNombreJoursMoisAnnee("Novembre", 2020);
affichageNombreJoursMoisAnnee("Déc", 2020);
