<?php

function estBissextitle($annee) {
    return (($annee % 4 === 0 && $annee % 100 != 0) || $annee % 400 === 0);
}

function affichageAnneeBissextile($annee) {
    $message = $annee . " est une année ";
    if(!estBissextitle($annee)){
        $message = $message . "non ";
    }
    $message = $message . "bissextitle";
    echo $message . "<br />";
}

affichageAnneeBissextile(1900);
affichageAnneeBissextile(2000);
affichageAnneeBissextile(2020);

?>
