//module permettant la saisie clavier
var readline = require("readline-sync");

afficherMenu();

//const messageCode = "-... --- -. -. .  ..-. --- .-. -- .- - .. --- -.";
var choix;

do {
    choix = readline.questionInt("Quel est votre choix : ");

    switch(choix) {
        case 1 : 
            var message = readline.question("Saisir le message : ");
            console.log(encodeMessage(message));
        break;
        case 2 : 
            var messageCode = readline.question("Saisir le message code en morse : ");
            console.log(decodeMessage(messageCode));
        break;
        case 0 : console.log("A + ");
        break;
        default : console.log("Cas non pris en compte");
        break;
    }
} while (choix != 0);

function afficherMenu() {
    message = "********************\n";
    message = message + "1/ Encode un message\n";
    message = message + "2/ Décoder un message\n";
    message = message + "0/ Quitter\n";
    message = message + "********************";
    console.log(message);
}

function encodeMessage(message) {
    var messageEncode = "";
    for(var i = 0 ; i < message.length ; i++) {
        messageEncode = messageEncode + lettreAMorse(message[i]) + " ";
    }
    return messageEncode;
}

function decodeMessage(message) {
    var messageDecode = "";
    var lettreMorse = "";
    
    for(var i = 0 ; i < message.length ; i++) {
        if(message[i] != " ") {
            lettreMorse = lettreMorse + message[i];
        }

        if(message[i] === " " && message[i-1] === " ") {
            messageDecode = messageDecode + " ";
        }

        if(message[i] === " " || i === message.length - 1 ) {
            messageDecode = messageDecode + morseALettre(lettreMorse);
            lettreMorse = "";
        }
    }
    return messageDecode;
}

function lettreAMorse(lettre) {
    switch(lettre.toLowerCase()) {
        case "a" : return '.-';
        case "b" : return '-...';
        case "c" : return '-.-.';
        case "d" : return '-..';
        case "e" : return '.';
        case "f" : return '..-.';
        case "g" : return '--.';
        case "h" : return '....';
        case "i" : return '..';
        case "j" : return '.---';
        case "k" : return '-.-';
        case "l" : return '.-..';
        case "m" : return '--';
        case "n" : return '-.';
        case "o" : return '---';
        case "p" : return '.--.';
        case "q" : return '--.-';
        case "r" : return '.-.';
        case "s" : return '...';
        case "t" : return '-';
        case "u" : return '..-';
        case "v" : return '...-';
        case "w" : return '.--';
        case "x" : return '-..-';
        case "y" : return '-.--';
        case "z" : return '--..';
        case " " : return ' ';
        default : return '';
    }
}

function morseALettre(symbole) {
    switch(symbole) {
        case '.-' : return "a";
        case '-...' : return "b";
        case '-.-.' : return "c";
        case '-..' : return "d";
        case '.' : return "e";
        case '..-.' : return "f";
        case '--.' : return "g";
        case '....' : return "h";
        case '..' : return "i";
        case '.---' : return "j";
        case '-.-' : return "k";
        case '.-..' : return "l";
        case '--' : return "m";
        case '-.' : return "n";
        case '---' : return "o";
        case '.--.' : return "p";
        case '--.-' : return "q";
        case '.-.' : return "r";
        case '...' : return "s";
        case '-' : return "t";
        case '..-' : return "u";
        case '...-' : return "v";
        case '.--' : return "w";
        case '-..-' : return "x";
        case '-.--' : return "y";
        case '--..' : return "z";
        case ' ' : return " ";
        default : return "";
    }
}
