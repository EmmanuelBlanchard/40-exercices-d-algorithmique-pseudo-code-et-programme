using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            afficherMenu();

            //const String messageCode = "-... --- -. -. .  ..-. --- .-. -- .- - .. --- -.";
            int choix;

            do {
                Console.WriteLine("Quel est votre choix : ");
                choix = int.Parse(Console.ReadLine());

                switch(choix) {
                    case 1 : 
                        Console.WriteLine("Saisir le message : ");
                        String message = Console.ReadLine();
                        Console.WriteLine(encodeMessage(message));

                    break;
                    case 2 : 
                        Console.WriteLine("Saisir le message code en morse : ");
                        String messageCode = Console.ReadLine();
                        Console.WriteLine(decodeMessage(messageCode));
                    break;
                    case 0 : Console.WriteLine("A + ");
                    break;
                    default : Console.WriteLine("Cas non pris en compte");
                    break;
                }
            } while (choix != 0);

            void afficherMenu() {
                Console.WriteLine("********************");
                Console.WriteLine("1/ Encode un message");
                Console.WriteLine("2/ Décoder un message");
                Console.WriteLine("0/ Quitter");
                Console.WriteLine("********************");
            }

            String encodeMessage(String message) {
                String messageEncode = "";
                for(var i = 0 ; i < message.Length ; i++) {
                    messageEncode = messageEncode + lettreAMorse(message[i]) + " ";
                }
                return messageEncode;
            }

            String decodeMessage(String message) {
                String messageDecode = "";
                String lettreMorse = "";
                
                for(var i = 0 ; i < message.Length ; i++) {
                    if(message[i] != ' ') {
                        lettreMorse = lettreMorse + message[i];
                    }

                    if(message[i] == ' ' && message[i-1] == ' ') {
                        messageDecode = messageDecode + " ";
                    }

                    if(message[i] == ' ' || i == message.Length - 1 ) {
                        messageDecode = messageDecode + morseALettre(lettreMorse);
                        lettreMorse = "";
                    }
                }
                return messageDecode;
            }

            String lettreAMorse(char lettre) {
                switch(char.ToLower(lettre)) {
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

            String morseALettre(String symbole) {
                switch(symbole) {
                    case ".-" : return "a";
                    case "-..." : return "b";
                    case "-.-." : return "c";
                    case "-.." : return "d";
                    case "." : return "e";
                    case "..-." : return "f";
                    case "--." : return "g";
                    case "...." : return "h";
                    case ".." : return "i";
                    case ".---" : return "j";
                    case "-.-" : return "k";
                    case ".-.." : return "l";
                    case "--" : return "m";
                    case "-." : return "n";
                    case "---" : return "o";
                    case ".--." : return "p";
                    case "--.-" : return "q";
                    case ".-." : return "r";
                    case "..." : return "s";
                    case "-" : return "t";
                    case "..-" : return "u";
                    case "...-" : return "v";
                    case ".--" : return "w";
                    case "-..-" : return "x";
                    case "-.--" : return "y";
                    case "--.." : return "z";
                    case " " : return " ";
                    default : return "";
                }
            }
        }
    }
}
