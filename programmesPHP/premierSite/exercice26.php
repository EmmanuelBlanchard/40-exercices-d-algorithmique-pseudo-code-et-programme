<form action="" method="post">
    <label>Quelle est la factorielle voulue ? : </label>
    <br />
    <input type="text" name="nombreFactorielleSaisi" style="width:50px">
    <br />
    <input type="submit" value="Valider">
</form>

<?php
    if(!empty($_POST['nombreFactorielleSaisi'])) {
        $nombreFactorielleSaisi = (int)$_POST['nombreFactorielleSaisi'];
        
        echo "------------------ <br />";
        echo "Version boucle : <br />";
        echo "La factorielle de " . $nombreFactorielleSaisi . " = " . factorielleVersionBoucle($nombreFactorielleSaisi);
        echo "<br /> <br />";
        echo "------------------ <br />";
        echo "Version récursive : <br />";
        echo "La factorielle de " . $nombreFactorielleSaisi . " = " . factorielleVersionRecursive($nombreFactorielleSaisi);
    }

    function factorielleVersionBoucle($nombreFactorielleSaisi) {
        $resultatFactorielle = 1;
        for($i = 1; $i <= $nombreFactorielleSaisi ; $i = $i + 1) {
            $resultatFactorielle = $resultatFactorielle * $i;
        }
        return $resultatFactorielle;
    }

    function factorielleVersionRecursive($nombreFactorielleSaisi) {
        if($nombreFactorielleSaisi <= 1) {
            return 1;
        } else {
            return $nombreFactorielleSaisi * factorielleVersionRecursive($nombreFactorielleSaisi - 1);
        }
    }
?>