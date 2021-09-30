using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            String langueSaisie ="";

            do {
                //saisie clavier et affichage d'un message au préalable :
                Console.WriteLine("Choisir la langue : AL / EN / ES / PO / IT : ");
                langueSaisie = Console.ReadLine();
            } while (langueSaisie != "AL" && langueSaisie != "EN" && langueSaisie != "ES" && langueSaisie != "PO" && langueSaisie != "IT");

            switch(langueSaisie) {
                case "AL" : Console.WriteLine("Hallo");
                break;
                case "EN" : Console.WriteLine("Hello");
                break;
                case "ES" : Console.WriteLine("Buenos dias");
                break;
                case "PO" : Console.WriteLine("Ola");
                break;
                case "IT" : Console.WriteLine("Buongiorno");
                break;
                default : Console.WriteLine("Langue non prise en compte");
                break;
            }
        }
    }
}
