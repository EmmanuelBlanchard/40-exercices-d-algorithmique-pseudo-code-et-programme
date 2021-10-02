<form action="" method="post">
    <label>Quel est le rayon du cercle ? : </label>
    <br />
    <input type="text" name="nombreRayonCercleSaisi" style="width:50px">
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
        $nombreRayonCercleSaisi = $_POST['nombreRayonCercleSaisi'];
        
        if((int) $_POST['choixMenu'] === 1) {
            echo "Le périmètre d'un cercle de rayon " . $nombreRayonCercleSaisi . " est de : " . retournePerimetreCercle($nombreRayonCercleSaisi);
        } else if((int) $_POST['choixMenu'] === 2) {
            echo "L'aire d'un cercle de rayon " . $nombreRayonCercleSaisi . " est de : " . retourneAireCercle($nombreRayonCercleSaisi);
        }
    }

    function retournePerimetreCercle($rayon) {
        return 2 * $rayon * pi();
    }

    function retourneAireCercle($rayon) {
        return $rayon * $rayon * pi();
    }

?>