using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Random rand = new Random();
            int nombreAleatoire = rand.Next(10)+1;

            Console.WriteLine("Nombre Arabe : " + nombreAleatoire);

            String nombreRomain = "";

            switch(nombreAleatoire) {
                case 1: nombreRomain = "I";
                break;
                case 2: nombreRomain = "II";
                break;
                case 3: nombreRomain = "III";
                break;
                case 4: nombreRomain = "IV";
                break;
                case 5: nombreRomain = "V";
                break;
                case 6: nombreRomain = "VI";
                break;
                case 7: nombreRomain = "VII";
                break;
                case 8: nombreRomain = "VIII";
                break;
                case 9: nombreRomain = "IX";
                break;
                case 10: nombreRomain = "X";
                break;
                default: Console.WriteLine("Nombre non pris en compte");
            }

            if(nombreRomain != "") {
                Console.WriteLine("Equivalent nombre romain : " + nombreRomain);
            } else {
                Console.WriteLine("Le nombre aléatoire généré n'est pas compris en 1 et 10")
            }
        }
    }
}
