<body>
    <?php
    $alea = rand(0,20);
    echo "Nombre : " .$alea . "<br :>";
    if($alea < 7) {
        echo "Bonjour";
    } else if($alea < 14) {
        echo "Salut";
    } else {
        echo "Hello";
    }
    ?>
</body>