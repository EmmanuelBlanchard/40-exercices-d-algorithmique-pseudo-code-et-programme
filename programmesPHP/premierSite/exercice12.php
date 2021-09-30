<form action="" method="post">
    <label>Nombre :</label>
    <input type="text" name="nombre" required>
    <label>Puissance :</label>
    <input type="text" name="puissance" required>
    <input type="submit" value="Valider">
</form>

<?php
//Si l'utilisateur a fait une saisie dans le formulaire
if(!empty($_POST["nombre"])) {
    $nombre = $_POST['nombre'];
    $puissance = $_POST['puissance'];

    $total = 1;

    for($i = 1 ; $i <= $puissance ; $i++) {
        $total = $total * $nombre;
    }

    $total2 = pow($nombre,$puissance);

    echo "Total sans fonction : " . $total . "<br />";
    echo "Total avec fonction : " . $total2;
}
?>