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

            String message = "Bonjour " + nom + "\n";
            if(sexe) {
                message = message + "Vous êtes un homme";
                if(age >= 18) {
                    message = message + " majeur";
                } else {
                    message = message + " mineur";
                }
            } else {
                message = message + "Vous êtes une femme";
                if(age >= 18) {
                    message = message + " majeure";
                } else {
                    message = message + " mineure";
                }
            }
            Console.WriteLine(message);
        }
    }
}
