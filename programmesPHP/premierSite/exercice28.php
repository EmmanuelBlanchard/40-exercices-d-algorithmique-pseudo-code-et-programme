<form action="" method="post">
    <label>Quelle est la longueur du rectangle ? : </label>
    <br />
    <input type="text" name="nombreLongueurRectangleSaisi" style="width:50px">
    <br />
    <label>Quelle est la largueur du rectangle ? : </label>
    <br />
    <input type="text" name="nombreLargeurRectangleSaisi" style="width:50px">
    <br />
    <label>Quel est votre choix ? : </label>
    <select name="choixMenu">
        <option value="1">Périmètre</option>
        <option value="2">Aire</option>
    </select>
    
    <input type="submit" value="Calculer">
</form>

<?php
    if(!empty($_POST['choixMenu'])) {
        $nombreLongueurRectangleSaisi = $_POST['nombreLongueurRectangleSaisi'];
        $nombreLargeurRectangleSaisi = $_POST['nombreLargeurRectangleSaisi'];
        
        if((int) $_POST['choixMenu'] === 1) {
            echo "Le périmètre d'un rectangle de longueur " . $nombreLongueurRectangleSaisi . " et de largeur " . $nombreLargeurRectangleSaisi . " est de : " . retournePerimetreRectangle($nombreLongueurRectangleSaisi,$nombreLargeurRectangleSaisi);
        } else if((int) $_POST['choixMenu'] === 2) {
            echo "L'aire d'un rectangle de longueur " . $nombreLongueurRectangleSaisi . " et de largeur " . $nombreLargeurRectangleSaisi . " est de : " . retourneAireRectangle($nombreLongueurRectangleSaisi,$nombreLargeurRectangleSaisi);
        }
    }

    function retournePerimetreRectangle($longueur,$largeur) {
        return 2 * $longueur + 2 * $largeur;
    }

    function retourneAireRectangle($longueur,$largeur) {
        return $longueur * $largeur;
    }
?>