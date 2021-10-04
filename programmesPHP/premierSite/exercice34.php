<?php
define('NOMBREESSAISTOTAL',3);

session_start();
if(empty($_SESSION['nombreEssai']) || ($_SESSION['nombreEssai']) > 3) {
    echo "Réinitialisation";
    $_SESSION['nombreEssai'] = 1;
}
?>

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

        $role = estConnecte($listeUtilisateurs,$login,$motDePasse);
        if($role === "") {
            echo "Combinaison login / mot de passe incorrecte, encore " . (NOMBREESSAISTOTAL - $_SESSION['nombreEssai']) . " essais !";
            $_SESSION['nombreEssai'] = $_SESSION['nombreEssai'] + 1;
        } else {
            echo "Vous êtes connecté ! et vos accès sont : " . $role;
        }
    }

    function estConnecte($utilisateurs,$choixLogin,$choixMotDePasse) {
        for($i = 0 ; $i < count($utilisateurs); $i++) {
            if($choixLogin === $utilisateurs[$i][0] && $choixMotDePasse === $utilisateurs[$i][1]) {
                return $utilisateurs[$i][2];
            }
        }
        return "";
    }
?>