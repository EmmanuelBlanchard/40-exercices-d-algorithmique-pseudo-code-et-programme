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
            Console.WriteLine("Le nombre est divisible par : ");

            for(var i = 1; i <= alea; i++) {
                if(alea % i == 0 ) {
                    Console.WriteLine(i);
                }
            }

        }
    }
}
