using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Quel est le rayon du cercle ? : ");
            int nombreRayonCercleSaisi = int.Parse(Console.ReadLine());
            
            afficherMenu();

            int choixMenu = 0;

            do {
                Console.WriteLine("Quel est votre choix ? : ");
                choixMenu = int.Parse(Console.ReadLine());
            } while (choixMenu != 1 && choixMenu != 2);

            if(choixMenu == 1) {
                Console.WriteLine("Le périmètre d'un cercle de rayon " + nombreRayonCercleSaisi + " est de : " + retournePerimetreCercle(nombreRayonCercleSaisi));
            } else if(choixMenu == 2) {
                Console.WriteLine("L'aire d'un cercle de rayon " + nombreRayonCercleSaisi + " est de : " + retourneAireCercle(nombreRayonCercleSaisi));
            }

            void afficherMenu() {
                var message = "-------------------- \n";
                message = message + "----------Menu----------\n";
                message = message + "1 : Périmètre \n";
                message = message + "2 : Aire \n";
                message = message + "--------------------";
                Console.WriteLine(message);
            }

            double retournePerimetreCercle(int rayon) {
                return 2 * rayon * Math.PI;
            }

            double retourneAireCercle(int rayon) {
                return rayon * rayon * Math.PI;
            }
        }
    }
}
