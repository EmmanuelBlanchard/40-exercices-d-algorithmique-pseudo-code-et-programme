<form action="" method="post">
    <label>Saisir le texte :</label>
    <input type="text" name="texte">
    <input type="submit" value="Valider">
</form>

<!--
<a href="?morse=oui" >Décoder message</a>
-->

<form action="" method="post">
    <label>Saisir le texte codé en morse :</label>
    <input type="text" name="morse">
    <input type="submit" value="Décoder message">
</form>

<?php
    //$messageCode = "-... --- -. -. .  ..-. --- .-. -- .- - .. --- -.";

    if(!empty($_POST['texte'])) {
        $message = $_POST['texte'];
        echo encodeMessage($message);
    }

    if(!empty($_POST['morse'])) {
        $messageCode = $_POST['morse'];
        echo decodeMessage($messageCode);
    }

    function encodeMessage($message) {
        $messageEncode = "";
        for($i = 0 ; $i < strlen($message) ; $i++) {
            $messageEncode = $messageEncode . lettreAMorse($message[$i]) . " ";
        }
        return $messageEncode;
    }

    function decodeMessage($message) {
        $messageDecode = "";
        $lettreMorse = "";
        
        for($i = 0 ; $i < strlen($message) ; $i++) {
            if($message[$i] != " ") {
                $lettreMorse = $lettreMorse . $message[$i];
            }
    
            if($message[$i] === " " && $message[$i-1] === " ") {
                $messageDecode = $messageDecode . " ";
            }
    
            if($message[$i] === " " || $i === strlen($message) - 1 ) {
                $messageDecode = $messageDecode . morseALettre($lettreMorse);
                $lettreMorse = "";
            }
        }
        return $messageDecode;
    }

    function lettreAMorse($lettre) {
        switch(strtolower($lettre)) {
            case 'a' : return ".-";
            case 'b' : return "-...";
            case 'c' : return "-.-.";
            case 'd' : return "-..";
            case 'e' : return ".";
            case 'f' : return "..-.";
            case 'g' : return "--.";
            case 'h' : return "....";
            case 'i' : return "..";
            case 'j' : return ".---";
            case 'k' : return "-.-";
            case 'l' : return ".-..";
            case 'm' : return "--";
            case 'n' : return "-.";
            case 'o' : return "---";
            case 'p' : return ".--.";
            case 'q' : return "--.-";
            case 'r' : return ".-.";
            case 's' : return "...";
            case 't' : return "-";
            case 'u' : return "..-";
            case 'v' : return "...-";
            case 'w' : return ".--";
            case 'x' : return "-..-";
            case 'y' : return "-.--";
            case 'z' : return "--..";
            case ' ' : return " ";
            default : return "";
        }
    }

    function morseALettre($symbole) {
        switch($symbole) {
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
?>
