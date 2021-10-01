<?php
session_start();

if(empty($_SESSION['bonneReponse'])) {
    $nombreAleatoire1 = rand(1,100);
    $nombreAleatoire2 = rand(1,100);
    $operation = rand(1,4);

    $bonneReponse = 0;
    echo "Quel est le résultat du calcul suivant : ";

    switch($operation) {
        case 1 : 
            echo $nombreAleatoire1 . " + " . $nombreAleatoire2 . " = ";
            $bonneReponse = $nombreAleatoire1 + $nombreAleatoire2;
        break;
        case 2 : 
            echo $nombreAleatoire1 . " - " . $nombreAleatoire2 . " = ";
            $bonneReponse = $nombreAleatoire1 - $nombreAleatoire2;
        break;
        case 3 : 
            echo $nombreAleatoire1 . " * " . $nombreAleatoire2 . " = ";
            $bonneReponse = $nombreAleatoire1 * $nombreAleatoire2;
        break;
        case 4 : 
            echo $nombreAleatoire1 . " / " . $nombreAleatoire2 . " = ";
            $bonneReponse = $nombreAleatoire1 / $nombreAleatoire2;
        break;
        default : echo "Erreur";
        break;
    }

    $_SESSION['bonneReponse'] = round($bonneReponse,2);
}
?>

<form action="" method="get">
    <label>Votre réponse : </label>
    <input type="text" name="reponse" />
    <input type="submit" value="Valider">
</form>

<?php
// Si l'utilisateur a fait une saisie dans le formulaire
if(!empty($_GET['response'])) {
    if((float)$_GET['response'] === $_SESSION['bonneReponse']) {
        echo "Bonne réponse, félicitations";
        session_destroy();
    } else {
        echo "Mauvaise réponse, recommencer !";
    }
}
?>