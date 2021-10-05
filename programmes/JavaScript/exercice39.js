//module permettant la saisie clavier
var readline = require("readline-sync");

var message = readline.question("Saisir le message : ");
console.log(encodeMessage(message));

function encodeMessage(message) {
    messageEncode = "";
    for(var i = 0 ; i < message.length ; i++) {
        messageEncode = messageEncode + lettreAMorse(message[i]) + " ";
    }
    return messageEncode;
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
