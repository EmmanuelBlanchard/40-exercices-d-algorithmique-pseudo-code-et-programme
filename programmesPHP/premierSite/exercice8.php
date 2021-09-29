<body>
    <?php
    $alea = rand(1,9);

    for($i = 1 ; $i <= 10; $i++) {
        echo $alea . " * " . $i . " = " . ($alea * $i) . "<br />";
    }
    ?>
</body>