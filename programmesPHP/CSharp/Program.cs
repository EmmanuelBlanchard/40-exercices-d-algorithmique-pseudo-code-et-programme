using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            string choixMenuPrincipal;

            do {
                afficherMenuPrincipal();

                Console.WriteLine("Quel est votre choix ? : ");
                choixMenuPrincipal = Console.ReadLine();

                switch(choixMenuPrincipal) {
                    case "A" : algorithmeCercle();
                    break;
                    case "B" : algorithmeRectangle();
                    break;
                    case "Q" : Console.WriteLine("A +");
                    break;
                    default : Console.WriteLine("Cas non pris en compte, recommencez !");
                    break;
                }

            } while (choixMenuPrincipal != "Q");

            void algorithmeCercle() {
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
                    string message = "-------------------- \n";
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

            void algorithmeRectangle() {
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
                    string message = "-------------------- \n";
                    message = message + "----------Menu----------\n";
                    message = message + "1 : Périmètre \n";
                    message = message + "2 : Aire \n";
                    message = message + "--------------------";
                    Console.WriteLine(message);
                }

                double retournePerimetreRectangle(int longueur,int largeur) {
                    return 2 * longueur + 2 * largeur;
                }

                double retourneAireRectangle(int longueur,int largeur) {
                    return longueur * largeur;
                }
            }

            void afficherMenuPrincipal() {
                string message = "-------------------- \n";
                message = message + "----------Menu Principal----------\n";
                message = message + "A : Cercle \n";
                message = message + "B : Rectangle \n";
                message = message + "Q : Quitter \n";
                message = message + "--------------------";
                Console.WriteLine(message);
            }            
        }
    }
}
