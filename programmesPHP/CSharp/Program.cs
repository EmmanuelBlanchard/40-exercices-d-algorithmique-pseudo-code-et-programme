using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Random rand = new Random();

            int nombreAleatoire = rand.Next(100);
            
            int nombreSaisi = 0;
            

            Console.WriteLine("Devinez le nombre choisi par l'ordinateur entre 1 et 100 !");

            int compteur = 1;

            do {
                Console.WriteLine("***************************");
                Console.WriteLine("Numéro de l'essai : " + compteur);
                compteur = compteur + 1;
                
                Console.WriteLine("Saisir un nombre : ");
                nombreSaisi = int.Parse(Console.ReadLine());

                if(nombreSaisi < nombreAleatoire) {
                    Console.WriteLine("Trop petit");
                }
                if(nombreSaisi > nombreAleatoire) {
                    Console.WriteLine("Trop grand");
                }
            } while (nombreSaisi != nombreAleatoire);

            Console.WriteLine("Félicitations ! Le nombre était : " + nombreSaisi);
        }
    }
}
