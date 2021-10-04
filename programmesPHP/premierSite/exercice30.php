<?php
    $notes = [12,14,16,18,10,11,10,13];

    $moyenne = 0;
    for($i = 0 ; $i <= count($notes) - 1 ; $i++) {
        $laNote = $notes[$i];
        if($laNote % 2 != 0) {
            $laNote = $laNote + 1;
        }
        $moyenne = $moyenne + $laNote;
    }
    $moyenne = $moyenne / count($notes);
    echo "La moyenne est de : " . $moyenne;
?>
