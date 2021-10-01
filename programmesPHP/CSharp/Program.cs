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
            
            const int TVA = 20;
            int reponseQuelProduit = 0;
            int prix = 0;

            afficherMenuProduits();

            while (reponseQuelProduit < 1 || reponseQuelProduit > 4) {
                Console.WriteLine("Quel produit voulez-vous acheter ?");
                reponseQuelProduit = int.Parse(Console.ReadLine());

                switch(reponseQuelProduit) {
                    case 1 : prix = 400;
                    break;
                    case 2 : prix = 700;
                    break;
                    case 3 : prix = 200;
                    break;
                    case 4 : prix = 900;
                    break;
                    default : Console.WriteLine("Produit Inexistant, recommencez");
                    break;
                }
            };

            int reponseNombreDuProduit = 0;
            while (reponseNombreDuProduit <= 0) {
                Console.WriteLine("Combien de produits voulez-vous ?");
                reponseNombreDuProduit = int.Parse(Console.ReadLine());
            };

            Console.WriteLine("Total HT : " + (prix * reponseNombreDuProduit) + " euros" + "\n" + "Total TTC : " + (prix * reponseNombreDuProduit * (1+TVA /100.00)) + " euros");

            void afficherMenuProduits() {
                String texte = "Voici la liste des produits : \n";
                texte = texte + "1 - TV 400 euros \n";
                texte = texte + "2 - Ordinateur 700 euros \n";
                texte = texte + "3 - Téléphone 200 euros \n";
                texte = texte + "4 - Portable 900 euros \n";
                Console.WriteLine(texte);
            }
        }
    }
}
