<form action="" method="get">
    <label>Prenom :</label>
    <input type="text" name="prenom" required>
    <label>Nom :</label>
    <input type="text" name="nom" required>
    <br />
    <label>Adresse :</label>
    <input type="text" name="adresse" required>
    <br />
    <label>Code Postal :</label>
    <input type="text" name="cp" required>
    <br />
    <label>Ville :</label>
    <input type="text" name="ville" required>
    <br />
    <input type="submit" value="Valider">
</form>

<?php
//Si l'utilisateur a fait une saisie dans le formulaire
if(!empty($_GET["prenom"])) {
    echo "Vous avez saisi : <br />";
    echo $_GET['prenom'] . " * " . $_GET['nom'] . "<br />";
    echo $_GET['adresse'] . "<br />";
    echo $_GET['cp'] . " * " . $_GET['ville'] . "<br />";
    echo "A bientôt";
}
?>