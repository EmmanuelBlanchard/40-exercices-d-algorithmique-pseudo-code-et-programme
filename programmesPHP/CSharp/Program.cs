using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            const int TVA = 20;
            var prixHT = 10;
            Console.WriteLine("Voici le prix : ");
            Console.WriteLine(prixHT + "EUR HT - " + (prixHT * TVA / 100 + prixHT) + "EUR TTC");
        }
    }
}
