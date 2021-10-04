<?php
    $prix = [5,50,23,11];
    $quantite = [10,1,4,3];

    $total = 0;
    for($i = 0 ; $i <= count($prix) - 1 ; $i++) {
        $total = $total + $prix[$i] * $quantite[$i];
    }

    echo "Le prix total est de : " . $total;
?>