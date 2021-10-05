//module permettant la saisie clavier
var readline = require("readline-sync");

var listeUtilisateurs = [
    ["Tya","test1","admin"],
    ["Milo","test2","user"],
    ["Lili","test3","user"]
];

var choixMenu;

/**
 * Fonction permettant d'afficher d'afficher le menu principal
 * Entrée : aucun
 * Sortie : aucun
 */
function afficherMenu() {
    var message = "*************************************\n";
    message = message + "1/ Afficher les utilisateurs\n";
    message = message + "2/ Créer un utilisateur\n";
    message = message + "9/ Quitter\n";
    console.log(message);
}

/**
 * Fonction permettant de créer un utilisateur
 * Entrée : aucun
 * Sortie : un tableau contenant 3 chaines de caractères (login, mot de passe, role)
 */
function créerUnUtilisateur() {
    var utilisateur = [];
    utilisateur[0] = readline.question("Saisir le login : ");
    utilisateur[1] = readline.question("Saisir le mot de passe : ");
    var choixRole;
    do {
        choixRole = readline.question("Saisir le role : admin /user /visiteur : ");
        if(choixRole !== 'admin' && choixRole !== 'user' && choixRole !== 'visiteur') {
            console.log("Erreur de saisie, recommencez !");
        }
    } while(choixRole !== 'admin' && choixRole !== 'user' && choixRole !== 'visiteur')

    utilisateur[2] = choixRole;
    return utilisateur;
}

/**
 * Fonction permettant d'afficher des utilisateurs
 * Entrée : utilisateurs : tableau à deux dimensions
 *          contenant une liste d'utilisateurs
 * Sortie : aucun
 */
function afficherDesUtilisateurs(utilisateurs) {
    for(var i = 0; i < utilisateurs.length; i++) {
        afficherUnUtilisateur(utilisateurs[i]);
    }
}

/**
 * Fonction permettant d'afficher un utilisateur
 * Entrée : unUtilisateur : tableau de chaîne de caractères avec 3 cases
 *          Indice : 0 : login - 1 : mot de passe - 2 : role
 * Sortie : aucun
 */
function afficherUnUtilisateur(unUtilisateur) {
    console.log("*************************************");
    console.log("********** DEBUT AFFICHAGE **********");
    console.log("Login de l'utilisateur : " + unUtilisateur[0]);
    console.log("Mot de passe de l'utilisateur : " + unUtilisateur[1]);
    console.log("Rôle de l'utilisateur de l'utilisateur : " + unUtilisateur[2]);
    console.log("---------------- FIN ----------------");
}

do {
    afficherMenu();
    choixMenu = readline.questionInt("Quel est votre choix ? : ");
    switch(choixMenu){
        case 1 : afficherDesUtilisateurs(listeUtilisateurs);
        break;
        case 2 : listeUtilisateurs[listeUtilisateurs.length] = créerUnUtilisateur();
        break;
        case 9 : console.log("A +");
        break;
        default : console.log("Cas non pris en compte");
        break;
    }
} while(choixMenu != 9);