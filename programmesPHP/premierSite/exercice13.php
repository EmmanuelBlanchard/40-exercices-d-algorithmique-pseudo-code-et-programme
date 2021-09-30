<?php 
session_start();
if(empty($_SESSION['nbEssais'])) {
    $_SESSION['nbEssais'] = 0;
}
?>

<form action="" method="post">
    <label>Nombre :</label>
    <input type="text" name="nombre" required>
    <input type="submit" value="Valider">
</form>

<?php

if(!empty($_POST["nombre"])) {
    $nombreSaisi = $_POST['nombre'];
    
    $_SESSION['nbEssais'] = $_SESSION['nbEssais'] + 1;
    if($_SESSION['nbEssais'] > 1) {
        echo "********* Essai numéro " . $_SESSION['nbEssais'] . " ********* <br />";
    }

    if($nombreSaisi % 2 != 0) {
        echo "Le nombre n'est pas pair ! <br />";
    }

    if($nombreSaisi % 3 != 0) {
        echo "Le nombre n'est pas divisible par 3 ! <br />";
    }

    if($nombreSaisi % 2 === 0 && $nombreSaisi % 3 === 0) {
        echo "************************* <br />";
        echo "Le nombre " . $nombreSaisi . " est divisible par 2 et par 3";
        session_destroy();
    }
}
?>