using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Quelle est la longueur du rectangle ? : ");
            int nombreLongueurRectangleSaisi = int.Parse(Console.ReadLine());
            Console.WriteLine("Quelle est la largeur du rectangle ? : ");
            int nombreLargeurRectangleSaisi = int.Parse(Console.ReadLine());
            
            afficherMenu();

            int choixMenu = 0;

            do {
                Console.WriteLine("Quel est votre choix ? : ");
                choixMenu = int.Parse(Console.ReadLine());
            } while (choixMenu != 1 && choixMenu != 2);

            if(choixMenu == 1) {
                Console.WriteLine("Le périmètre d'un rectangle de longueur " + nombreLongueurRectangleSaisi + " et de largeur " + nombreLargeurRectangleSaisi + " est de : " + retournePerimetreRectangle(nombreLongueurRectangleSaisi,nombreLargeurRectangleSaisi));
            } else if(choixMenu == 2) {
                Console.WriteLine("L'aire d'un rectangle de longueur " + nombreLongueurRectangleSaisi + " et de largeur " + nombreLargeurRectangleSaisi + " est de : " + retourneAireRectangle(nombreLongueurRectangleSaisi,nombreLargeurRectangleSaisi));
            }

            void afficherMenu() {
                var message = "-------------------- \n";
                message = message + "----------Menu----------\n";
                message = message + "1 : Périmètre \n";
                message = message + "2 : Aire \n";
                message = message + "--------------------";
                Console.WriteLine(message);
            }

            double retournePerimetreRectangle(int longueur, int largeur) {
                return 2 * longueur + 2 * largeur;
            }

            double retourneAireRectangle(int longueur, int largeur) {
                return longueur * largeur;
            }
        }
    }
}
