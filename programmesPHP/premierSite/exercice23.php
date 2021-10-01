<?php
function estBissextitle($annee) {
    return (($annee % 4 === 0 && $annee % 100 != 0) || $annee % 400 === 0);
}

function nombreJoursMoisAnnee($mois, $annee) {
    switch($mois) {
        case "Janvier" : return 31;
        case "Février" : 
            if(estBissextitle($annee)) {
                return 29;
            } else {
                return 28;
            }
        case "Mars" : return 31;
        case "Avril" : return 30;
        case "Mai" : return 31;
        case "Juin" : return 30;
        case "Juillet" : return 31;
        case "Aout" : return 31;
        case "Septembre" : return 30;
        case "Octobre" : return 31;
        case "Novembre" : return 30;
        case "Décembre" : return 31;
        default : return 0;
    }
}

function affichageNombreJoursMoisAnnee($mois,$annee) {    
    $nombreJours = nombreJoursMoisAnnee($mois, $annee);

    if ($nombreJours != 0) {
        echo $nombreJours . " jours en " . $mois . " " . $annee . "<br />";
    } else {
        echo "Le mois n'est pas pris en compte <br />";
    }

}

affichageNombreJoursMoisAnnee("Janvier", 2019);
affichageNombreJoursMoisAnnee("Février", 2019);
affichageNombreJoursMoisAnnee("Février", 2020);
affichageNombreJoursMoisAnnee("Novembre", 2020);
affichageNombreJoursMoisAnnee("Déc", 2020);
?>