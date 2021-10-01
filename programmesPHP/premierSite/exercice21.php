<h1>Quel produit voulez-vous acheter ?</h1>

<form action="" method="post">
    <select name="produit" style="width:100px">
        <option value="1">TV : 400€</option>
        <option value="2">Ordinateur : 700€</option>
        <option value="3">Téléphone : 200€</option>
        <option value="4">Portable : 900€</option>
    </select>
    <label for="">Combien de produits voulez-vous ?</label>
    <input type="text" name="quantite"  style="width:50px">
    <input type="submit" value="Valider">
</form>

<?php
    define("TVA", 20);
    if(!empty($_POST['produit']) && !empty($_POST['quantite'])) {
        $reponseQuelProduit = (int) $_POST['produit'];
        $reponseNombreDuProduit = $_POST['quantite'];

        $prix = 0;
        switch($_POST['produit']) {
            case 1 : $prix = 400;
            break;
            case 2 : $prix = 700;
            break;
            case 3 : $prix = 200;
            break;
            case 4 : $prix = 900;
            break;
            default : echo "Produit Inexistant, recommencez";
            break;
        }

        echo "Total HT : " . ($prix * $reponseNombreDuProduit) . " € <br />";        
        echo "Total TTC : " . ($prix * $reponseNombreDuProduit * (1+TVA /100)) . " €";
    }
?>