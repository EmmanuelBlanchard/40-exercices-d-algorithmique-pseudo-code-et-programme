<form action="" method="post">
    <label>Saisir le texte :</label>
    <input type="text" name="texte">
    <input type="submit" value="Valider">
</form>

<?php
    if(!empty($_POST['texte'])) {
        $message = $_POST['texte'];
        echo encodeMessage($message);
    }

    function encodeMessage($message) {
        $messageEncode = "";
        for($i = 0 ; $i < strlen($message) ; $i++) {
            $messageEncode = $messageEncode . lettreAMorse($message[$i]) . " ";
        }
        return $messageEncode;
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
?>
