using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Random rand = new Random();
            int alea = rand.Next(21);
            Console.WriteLine("Nombre : " + alea);
            if(alea < 7) {
                Console.WriteLine("Bonjour");
            } else if(alea < 14) {
                Console.WriteLine("Salut");
            } else {
                Console.WriteLine("Hello");
            }
        }
    }
}
