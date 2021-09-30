using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            String separateur = "*";
            String ligneSeparation = "";
            for(int i = 0 ; i <= 30 ; i++){
                ligneSeparation = ligneSeparation + separateur;
            }

            Console.WriteLine(ligneSeparation);
            Console.WriteLine("Merci de saisir vos informations personnelles !");
            Console.WriteLine(ligneSeparation);

            Console.WriteLine("Saisir votre prenom : ");
            String prenom = Console.ReadLine();
            Console.WriteLine("Saisir votre nom : ");
            String nom = Console.ReadLine();
            Console.WriteLine("Saisir votre adresse : ");
            String adresse = Console.ReadLine();
            Console.WriteLine("Saisir votre code postal : ");
            String cp = Console.ReadLine();
            Console.WriteLine("Saisir votre ville : ");
            String ville = Console.ReadLine();

            Console.WriteLine(ligneSeparation);
            Console.WriteLine("Vous avez saisi : ");
            Console.WriteLine(prenom + " " + separateur + " " + nom);
            Console.WriteLine(adresse);
            Console.WriteLine(cp + " " + separateur + " " + ville);
            Console.WriteLine("A bientôt");
            Console.WriteLine(ligneSeparation);
        }
    }
}
