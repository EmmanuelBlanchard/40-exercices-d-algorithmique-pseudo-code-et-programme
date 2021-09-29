<body>
    <?php
    $choix = 10;

    echo "Les 5 nombres précèdents sont : <br />";
    for($i = $choix - 1 ; $i >= $choix -1 -4 ; $i = $i - 1) {
        echo $i . "<br />";
    }

    echo "Les 5 nombres suivants sont : <br />";
    for($i = $choix + 1 ; $i <= $choix +1 +4 ; $i = $i + 1) {
        echo $i . "<br />";
    }
    ?>
</body>