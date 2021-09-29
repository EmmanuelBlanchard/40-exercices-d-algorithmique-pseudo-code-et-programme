using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Random rand = new Random();
            int alea = rand.Next(2);
            if(alea == 0) {
                Console.WriteLine(alea + " : Pile");
            } else {
                Console.WriteLine(alea + " : Face");
            }
        }
    }
}
