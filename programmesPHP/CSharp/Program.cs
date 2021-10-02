using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Combien de marches ? ");
            int nombreDeMarches = int.Parse(Console.ReadLine());

            for(int i = 1; i <= nombreDeMarches ; i = i + 1) {
                String ligne = "_/";
                for(int j = nombreDeMarches - 1; j >= i ; j = j - 1) {
                    ligne = "  " + ligne;
                }
                Console.WriteLine(ligne);
            }
        }
    }
}
