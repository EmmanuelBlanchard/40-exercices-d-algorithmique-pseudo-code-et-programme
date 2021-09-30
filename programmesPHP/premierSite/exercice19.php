
<h1>Convertisseur devise :</h1>

<form action="" method="post">
    <label>Nombre(€) :</label>
    <input type="text" name="nombre" style="width:50px">
    <select name="devise" style="width:100px">
        <option value="Dollars">Dollars (US)</option>
        <option value="Roubles">Roubles (Russie)</option>
        <option value="Yuans">Yuans (Chine)</option>
        <option value="Livres">Livres (Royaume-Uni)</option>
    </select>
    <input type="submit" value="Valider">
</form>

<?php
    const DOLLAR = 1.22;
    const ROUBLE = 91.14;
    const YUAN = 7.89;
    const LIVRE = 0.89;

    // Si l'utilisateur a fait une saisie dans le formulaire
    if(!empty($_POST["nombre"])) {
        $montantSaisi = (double)$_POST["nombre"];
        $devise = $_POST["devise"];

        $valeurConvertie = 0;
        switch($devise) {
            case "$" : 
            case "Dollars" : $valeurConvertie = DOLLAR * $montantSaisi;
            break;
            case "Roubles" : $valeurConvertie = ROUBLE * $montantSaisi;
            break;
            case "Yuans" : $valeurConvertie = YUAN * $montantSaisi;
            break;
            case "Livres" : $valeurConvertie = LIVRE * $montantSaisi;
            break;
            default: echo "La devise choisie n'est pas prise en compte";
            break;
        }
        echo $montantSaisi . "€ - " . $valeurConvertie . " " . $devise;
    }
?>