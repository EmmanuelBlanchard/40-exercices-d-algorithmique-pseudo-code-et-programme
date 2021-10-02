<form action="" method="post">
    <label for="">Combien de marches voulez-vous ?</label>
    <br />
    <input type="text" name="nombresDeMarches"  style="width:50px">
    <br />
    <input type="submit" value="Valider">
</form>

<?php
    if(!empty($_POST['nombresDeMarches'])) {
        $nombresDeMarches = (int) $_POST['nombresDeMarches'];
        
        for($i = 1; $i <= $nombresDeMarches; $i = $i + 1) {
            $ligne = "_/";
            for($j = $nombresDeMarches -1; $j >= $i; $j = $j - 1) {
                $ligne = "&nbsp;&nbsp;&nbsp;&nbsp;" . $ligne;
            } 
            echo $ligne . "<br />";
        }
    }
?>
