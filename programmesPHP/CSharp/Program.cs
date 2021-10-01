using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Random rand = new Random();
            int nombreAleatoire1 = rand.Next(100);
            int nombreAleatoire2 = rand.Next(100);
            int operation = 1+rand.Next(4);
            Console.WriteLine(operation);

            int reponse;
            int bonneReponse = 0;
            Console.WriteLine("Quel est le résultat du calcul suivant : ");

            switch(operation) {
                case 1 : 
                    Console.WriteLine(nombreAleatoire1 + " + " + nombreAleatoire2 + " = ");
                    bonneReponse = nombreAleatoire1 + nombreAleatoire2;
                break;
                case 2 : 
                    Console.WriteLine(nombreAleatoire1 + " - " + nombreAleatoire2 + " = ");
                    bonneReponse = nombreAleatoire1 - nombreAleatoire2;
                break;
                case 3 : 
                    Console.WriteLine(nombreAleatoire1 + " * " + nombreAleatoire2 + " = ");
                    bonneReponse = nombreAleatoire1 * nombreAleatoire2;
                break;
                case 4 : 
                    Console.WriteLine(nombreAleatoire1 + " / " + nombreAleatoire2 + " = ");
                    bonneReponse = nombreAleatoire1 / nombreAleatoire2;
                break;
                default : Console.WriteLine("Erreur");
                break;
            }

            do {
                Console.WriteLine("Quel est votre reponse ?");
                reponse = int.Parse(Console.ReadLine());
                if(reponse == bonneReponse) {
                    Console.WriteLine("Bonne réponse, félicitations");
                } else {
                    Console.WriteLine("Mauvaise réponse, recommencer !");
                }
            } while (reponse != bonneReponse);
        }
    }
}
