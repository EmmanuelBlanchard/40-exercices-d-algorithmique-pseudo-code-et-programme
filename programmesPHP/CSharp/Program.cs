using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            String nom = "Milo BLANCHARD";
            int age = 16;
            Boolean sexe = true;

            Console.WriteLine("Bonjour " + nom);
            if(sexe) {
                Console.WriteLine("Vous êtes un homme");
            } else {
                Console.WriteLine("Vous êtes une femme");
            }
            if(age >= 18) {
                Console.WriteLine("Vous êtes majeur(e)");
            } else {
                Console.WriteLine("Vous êtes mineur(e)");
            }

        }
    }
}
