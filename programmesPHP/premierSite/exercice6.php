<body>
    <?php
    $alea = rand(0,1);
    if($alea === 0) {
        echo $alea . " : Pile";
    } else {
        echo $alea . " : Face";
    }
    ?>
</body>