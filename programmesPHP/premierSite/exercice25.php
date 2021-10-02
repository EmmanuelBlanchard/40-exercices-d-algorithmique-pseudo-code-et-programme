<form action="" method="post">
    <label>Quel est le nombre de la taille du carre voulez vous ?</label>
    <br />
    <input type="text" name="nombreDeLaTailleDuCarre" style="width:50px">
    <br />
    <input type="submit" value="Valider">
</form>

<?php
    if(!empty($_POST['nombreDeLaTailleDuCarre'])) {
        $nombreDeLaTailleDuCarre = (int)$_POST['nombreDeLaTailleDuCarre'];
        
        $grandeLigne = "";
        for($i = 1; $i <= $nombreDeLaTailleDuCarre; $i = $i + 1) {
            $grandeLigne = $grandeLigne . "**";
        }

        $petiteLigne = "";
        for($j = 1; $j <= $nombreDeLaTailleDuCarre; $j = $j + 1) {
            if($j === 1 || $j === $nombreDeLaTailleDuCarre) {
                $petiteLigne = $petiteLigne . "**";
            } else {
                $petiteLigne = $petiteLigne . "&nbsp;&nbsp;&nbsp;&nbsp;";
            }
        }

        for($k = 1; $k <= $nombreDeLaTailleDuCarre; $k = $k + 1) {
            if($k === 1 || $k === $nombreDeLaTailleDuCarre) {
                echo $grandeLigne . "<br />";
            } else {
                echo $petiteLigne . "<br />";
            }
        }
    }
?>