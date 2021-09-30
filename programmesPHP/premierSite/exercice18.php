<form action="" method="get">
    <label for="">Choisir la langue :</label>
    <input type="text" name="choix">
    <input type="submit" value="Valider">
</form>

<?php
// Si l'utilisateur a fait une saisie dans le formulaire
if(!empty($_GET["choix"])) {
    $choix = $_GET["choix"];
}

switch($choix) {
    case "AL": echo "Hallo";
    break;
    case "ES": echo "Buenos dias";
    break;
    case "EN": echo "Hello";
    break;
    case "PO": echo "Ola";
    break;
    case "IT": echo "Buongiorno";
    break;
    default: echo "Langue non prise en compte";
}
?>