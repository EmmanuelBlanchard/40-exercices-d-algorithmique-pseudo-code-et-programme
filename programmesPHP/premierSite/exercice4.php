<body>
    <?php
    $nom = "Milo BLANCHARD";
    $age = 16;
    $sexe = true;

    echo "Bonjour " . $nom . "<br />";
    if($sexe) {
        echo "Vous êtes un homme";
    } else {
        echo "Vous êtes une femme";
    }
    echo "<br />";
    if($age >= 18) {
        echo"Vous êtes majeur(e)";
    } else {
        echo"Vous êtes mineur(e)";
    }
    ?>
</body>