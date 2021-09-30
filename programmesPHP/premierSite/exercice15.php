<form action="" method="get">
    <label>Note 1 : </label>
    <input type="text" name="note1" required>
    <br />
    <label>Note 2 : </label>
    <input type="text" name="note2" required>
    <br />
    <label>Note 3 : </label>
    <input type="text" name="note3" required>
    <br />
    <input type="submit" value="Valider">
</form>

<?php
    if(!empty($_GET["note1"])) {
        $note1 = (int)$_GET['note1'];
        $note2 = (int)$_GET['note2'];
        $note3 = (int)$_GET['note3'];
        $total = ($note1 + $note2 + $note3) / 3;
        echo "La moyenne est de : " . $total;
    }
?>