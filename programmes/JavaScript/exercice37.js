//module permettant la saisie clavier
var readline = require("readline-sync");

var listeUtilisateurs = [
    ["Tya","test1","admin"],
    ["Milo","test2","user"],
    ["Lili","test3","user"]
];

/**
 * Fonction permettant d'afficher d'afficher le menu principal
 * Entrée : aucun
 * Sortie : aucun
 */
function afficherMenu() {
    var message = "*************************************\n";
    message = message + "1/ Afficher les utilisateurs\n";
    message = message + "2/ Créer un utilisateur\n";
    message = message + "3/ Modifier un utilisateur\n";
    message = message + "4/ Supprimer un utilisateur\n";
    message = message + "9/ Quitter";
    console.log(message);
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

/**
 * Fonction permettant de créer un utilisateur
 * Entrée : aucun
 * Sortie : un tableau contenant 3 chaines de caractères (login, mot de passe, role)
 */
 function créerUnUtilisateur() {
    var utilisateur = [];
    utilisateur[0] = readline.question("Saisir le login : ");
    utilisateur[1] = readline.question("Saisir le mot de passe : ");
    utilisateur[2] = saisirRole();
    return utilisateur;
}

/**
 * Fonction permettant de modifier un utilisateur
 * Entrée : aucun
 * Sortie : aucun
 */
 function modifierUnUtilisateur() {
    console.log(listeUtilisateurs);
    var indiceUtilisateurAModifier = trouverUtilisateur(listeUtilisateurs);

    listeUtilisateurs[indiceUtilisateurAModifier][0] = readline.question("Saisir le nouveau nom de l'utilisateur : ");
    listeUtilisateurs[indiceUtilisateurAModifier][1] = readline.question("Saisir le nouveau mot de passe : ");
    listeUtilisateurs[indiceUtilisateurAModifier][2] = saisirRole();
    console.log(listeUtilisateurs);
}

/**
 * Fonction permettant de trouver un utilisateur et de retourner le numéro de l'indice du tableau
 * Entrée : liste des utilisateurs (tableau)
 * Sortie : indice de tableau - ENTIER
 */
 function trouverUtilisateur(utilisateurs) {
    var choixNomUtilisateur;

    var indiceTableau = -1;
    do {
        choixNomUtilisateur = readline.question("Saisir le nom de l'utilisateur : ");

        indiceTableau = rechercheUnUtilisateur(utilisateurs, choixNomUtilisateur);

        if(indiceTableau === -1) {
            console.log("Le nom de l'utilisateur n'existe pas, recommencez ! ");
        }
    } while (indiceTableau === -1);

    return indiceTableau;
}

/**
 * Fonction permettant de trouver un utilisateur et de retourner le numéro de l'indice du tableau
 * Entrée : liste des utilisateurs (tableau), nom (chaine)
 * Sortie : indice de tableau - ENTIER ou -1 si non trouvé
 */
 function rechercheUnUtilisateur(utilisateurs, nom) {
    
    for(var i = 0; i <= listeUtilisateurs.length - 1; i++) {
        if(utilisateurs[i][0] == nom) {
            return i;
        }
    }
    return -1;
}

function saisirRole() {
    var choixRole;
    do {
        choixRole = readline.question("Saisir le role : admin /user /visiteur : ");
        if(choixRole != 'admin' && choixRole != 'user' && choixRole != 'visiteur') {
            console.log("Erreur de saisie, recommencez !");
        }
    } while(choixRole != 'admin' && choixRole != 'user' && choixRole != 'visiteur')
    return choixRole;
}

/**
 * Fonction permettant de supprimer un utilisateur
 * Entrée : aucun
 * Sortie : aucun
 */
 function supprimerUnUtilisateur() {
    console.log(listeUtilisateurs);
    var indiceUtilisateurAModifier = trouverUtilisateur(listeUtilisateurs);

    for(var i = indiceUtilisateurAModifier ; i < listeUtilisateurs.length-1 ; i++) {
        listeUtilisateurs[i] = listeUtilisateurs[i+1];
    }
    listeUtilisateurs.pop();
    console.log(listeUtilisateurs);
}

var choixMenu;
do {
    afficherMenu();
    choixMenu = readline.questionInt("Quel est votre choix ? : ");
    switch(choixMenu){
        case 1 : afficherDesUtilisateurs(listeUtilisateurs);
        break;
        case 2 : listeUtilisateurs[listeUtilisateurs.length] = créerUnUtilisateur();
        break;
        case 3 : modifierUnUtilisateur();
        break;
        case 4 : supprimerUnUtilisateur();
        break;
        case 9 : console.log("A +");
        break;
        default : console.log("Cas non pris en compte");
        break;
    }
} while(choixMenu != 9);
