using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            const double DOLLAR = 1.22;
            const double ROUBLE = 91.14;
            const double YUAN = 7.89;
            const double LIVRE = 0.89;

            Console.WriteLine("Saisir la somme en euro a convertir : ");
            double montantSaisi = double.Parse(Console.ReadLine()); 
            afficherMenuDevise();

            double valeurConvertie = 0;
            String devise;
            do {
                //saisie clavier et affichage d'un message au préalable :
                Console.WriteLine("Saisir la devise souhaitée : ");
                devise = Console.ReadLine();
                switch(devise) {
                    case "$" : 
                    case "Dollars" : valeurConvertie = DOLLAR * montantSaisi;
                    break;
                    case "Roubles" : valeurConvertie = ROUBLE * montantSaisi;
                    break;
                    case "Yuans" : valeurConvertie = YUAN * montantSaisi;
                    break;
                    case "Livres" : valeurConvertie = LIVRE * montantSaisi;
                    break;
                    default: Console.WriteLine("La devise choisie n'est pas prise en compte");
                    break;
                }
            } while (valeurConvertie == 0);

            Console.WriteLine(montantSaisi + "EUR - " + valeurConvertie + " " + devise);

            void afficherMenuDevise() {
                var texte = "*********************\n";
                texte = texte + "$ ou Dollars (US)\n";
                texte = texte + "Roubles (Russie)\n";
                texte = texte + "Yuans (Chine)\n";
                texte = texte + "Livres (Royaume-Uni)\n";
                Console.WriteLine(texte);
            }
        }
    }
}
