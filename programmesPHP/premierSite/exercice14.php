<?php 
session_start();
if(empty($_SESSION['nbEssais'])) {
    $_SESSION['nbEssais'] = 0;
    $_SESSION['nombreAleatoire'] = rand(1, 100);
}
echo $_SESSION['nombreAleatoire'];
?>
<h1>Devinez le nombre choisi par l'ordinateur entre 1 et 100 !</h1>
<form action="" method="post">
    <label>Saisir un nombre : </label>
    <input type="text" name="nombre" required>
    <input type="submit" value="Valider">
</form>

<?php
    if(!empty($_POST["nombre"])) {
        $nombreSaisi = (int)$_POST['nombre'];
        
        echo "*************************** <br />";
        echo "Numéro de l'essai : " . $_SESSION['nbEssais'] . " <br />";
        $_SESSION['nbEssais'] = $_SESSION['nbEssais'] + 1;
        
        if($nombreSaisi < $_SESSION['nombreAleatoire']) {
            echo "Trop petit <br />";
        }

        if($nombreSaisi > $_SESSION['nombreAleatoire']) {
            echo "Trop grand <br />";
        }

        if($nombreSaisi === $_SESSION['nombreAleatoire']) {
            echo "*************************** <br />";
            echo "Félicitations ! Le nombre était : " . $_SESSION['nombreAleatoire'] . "";
            session_destroy();
        }
    }
?>