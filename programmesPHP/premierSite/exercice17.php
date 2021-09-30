<?php
    $nombreAleatoire = rand(1, 10);

    echo "Nombre Arabe : " . $nombreAleatoire . " <br />";

    $nombreRomain = "";

    switch($nombreAleatoire) {
        case 1: $nombreRomain = "I";
        break;
        case 2: $nombreRomain = "II";
        break;
        case 3: $nombreRomain = "III";
        break;
        case 4: $nombreRomain = "IV";
        break;
        case 5: $nombreRomain = "V";
        break;
        case 6: $nombreRomain = "VI";
        break;
        case 7: $nombreRomain = "VII";
        break;
        case 8: $nombreRomain = "VIII";
        break;
        case 9: $nombreRomain = "IX";
        break;
        case 10: $nombreRomain = "X";
        break;
        default: echo "Nombre non pris en compte";
    }

    if($nombreRomain != "") {
        echo "Equivalent nombre romain : " . $nombreRomain;
    } else {
        echo "Le nombre aléatoire généré n'est pas compris en 1 et 10";
    }
?>