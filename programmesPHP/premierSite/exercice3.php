<body>
    <?php
    define("TVA", 20);
    $prixHT = 10;
    echo "Voici le prix : <br />";
    echo $prixHT . "€ HT - " . ($prixHT * TVA / 100 + $prixHT) . "€ TTC";
    ?>
</body>