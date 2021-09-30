using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            int nombreSaisi = -1;
            int nbEssais = 0;

            do {
                nbEssais = nbEssais + 1;
                if(nbEssais > 1) {
                    Console.WriteLine("********* Essai numéro " + nbEssais + " *********");
                }
                Console.WriteLine("Saisir un nombre pair et divisible par 3 : ");
                nombreSaisi = int.Parse(Console.ReadLine());
                if(nombreSaisi % 2 != 0) {
                    Console.WriteLine("Le nombre n'est pas pair !");
                }
                if(nombreSaisi % 3 != 0) {
                    Console.WriteLine("Le nombre n'est pas divisible par 3 !");
                }
            } while (nombreSaisi % 2 != 0 || nombreSaisi % 3 != 0);

            Console.WriteLine("*************************");
            Console.WriteLine("Le nombre " + nombreSaisi + " est divisible par 2 et par 3");
        }
    }
}
