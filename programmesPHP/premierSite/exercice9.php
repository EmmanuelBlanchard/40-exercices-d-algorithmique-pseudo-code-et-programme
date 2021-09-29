<body>
    <?php
    $alea = rand(1,20);

    echo "Nombre : " . $alea . "<br />";
    echo "Le nombre est divisible par : <br />";

    for($i = 1 ; $i <= $alea; $i++) {
        if($alea % $i === 0 ) {
            echo $i . "<br />";
        }
    }
    ?>
</body>