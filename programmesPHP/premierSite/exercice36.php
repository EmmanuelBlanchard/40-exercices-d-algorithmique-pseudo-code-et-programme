<h1>Création d'un utilisateur</h1>
<form action="" method="post">
    <label>Login :</label>
    <input type="text" name="login">
    <label>Mot de passe :</label>
    <input type="text" name="motDePasse">
    <label>Rôle :</label>
    <select name="role">
        <option value="admin">Administrateur</option>
        <option value="user">Utilisateur</option>
        <option value="visiteur">Visiteur</option>
    </select>
    <input type="submit" value="Valider">
</form>

<?php
    $listeUtilisateurs = [
        ["Tya","test1","admin"],
        ["Milo","test2","user"],
        ["Lili","test3","user"]
    ];

    /**
     * Fonction permettant d'afficher des utilisateurs
     * Entrée : utilisateurs : tableau à deux dimensions
     *          contenant une liste d'utilisateurs
     * Sortie : aucun
     */
    function afficherDesUtilisateurs($utilisateurs) {
        for($i = 0; $i < sizeof($utilisateurs); $i++) {
            afficherUnUtilisateur($utilisateurs[$i]);
        }
    }

    /**
     * Fonction permettant d'afficher un utilisateur
     * Entrée : unUtilisateur : tableau de chaîne de caractères avec 3 cases
     *         Indice : 0 : login - 1 : mot de passe - 2 : role
     * Sortie : aucun
     */
    function afficherUnUtilisateur($unUtilisateur) {
        echo "*************************************<br />";
        echo "********** DEBUT AFFICHAGE **********<br />";
        echo "Login de l'utilisateur : " . $unUtilisateur[0] . "<br />";
        echo "Mot de passe de l'utilisateur : " . $unUtilisateur[1] . "<br />";
        echo"Rôle de l'utilisateur de l'utilisateur : " . $unUtilisateur[2] . "<br />";
        echo "---------------- FIN ----------------<br />";
    }

    //Gestion de la création d'un utilisateur (si le formulaire est posté)
    if(!empty($_POST['login']) && !empty($_POST['motDePasse']) && !empty($_POST['role'])) {
        echo "<br />AFFICHAGE AVANT AJOUT <br />";
        afficherDesUtilisateurs($listeUtilisateurs);

        $login = $_POST['login'];
        $motDePasse = $_POST['motDePasse'];
        $role = $_POST['role'];
        $listeUtilisateurs[] = [$login,$motDePasse,$role];

        echo "<br /><br />AFFICHAGE APRES AJOUT <br />";
        afficherDesUtilisateurs($listeUtilisateurs);
    }
?>
