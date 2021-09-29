using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Random rand = new Random();
            int alea = rand.Next(10);

            for(int i=1; i <= 10; i++) {
                Console.WriteLine(alea + " * " + i + " = " + (alea * i));
            };
        }
    }
}
