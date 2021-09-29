<body>
    <?php
    $nom = "Milo BLANCHARD";
    $age = 16;
    $sexe = true;

    $message = "Bonjour " . $nom . "<br />";
    if($sexe) {
        $message = $message . "Vous êtes un homme";
        if($age >= 18) {
            $message = $message . " majeur";
        } else {
            $message = $message . " mineur";
        }
    } else {
        $message = $message . "Vous êtes une femme";
        if($age >= 18) {
            $message = $message . " majeure";
        } else {
            $message = $message . " mineure";
        }
    }
    echo $message;
    ?>
</body>