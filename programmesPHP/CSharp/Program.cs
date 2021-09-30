using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Saisir le nombre : ");
            int nombre = int.Parse(Console.ReadLine());
            Console.WriteLine("Saisir la puissance : ");
            int puissance = int.Parse(Console.ReadLine());
            
            int total = 1;
            for(int i = 1 ; i <= puissance ; i++){
                total = total * nombre;
            }

            double total2 = Math.Pow(nombre,puissance);

            Console.WriteLine("Total sans fonction : " + total);
            Console.WriteLine("Total avec fonction : " + total2);
        }
    }
}
