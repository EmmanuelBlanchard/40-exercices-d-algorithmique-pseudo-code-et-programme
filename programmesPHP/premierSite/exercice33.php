<form action="" method="get">
    <label>Login : </label>
    <input type="text" name="login">

    <label>Mot de passe : </label>
    <input type="text" name="motDePasse">

    <input type="submit" value="Connexion">
</form>

<?php
    $listeUtilisateurs = [
        ["Tya","test1"],
        ["Milo","test2"],
        ["Lili","test3"]
    ];

    //Si le choix a été fait
    if(!empty($_GET["login"]) && !empty($_GET["motDePasse"])) {
        $login = $_GET["login"];
        $motDePasse = $_GET["motDePasse"];

        $connecte = estConnecte($listeUtilisateurs,$login,$motDePasse);
        if(!$connecte) {
            echo "Combinaison login / mot de passe incorrecte, recommencez !";
        } else {
            echo "Vous êtes connecté !";
        }
    }

    function estConnecte($utilisateurs,$choixLogin,$choixMotDePasse) {
        for($i = 0 ; $i < sizeof($utilisateurs); $i++) {
            if($choixLogin === $utilisateurs[$i][0] && $choixMotDePasse === $utilisateurs[$i][1]) {
                return true;
            }
        }
        return false;
    }
?>
