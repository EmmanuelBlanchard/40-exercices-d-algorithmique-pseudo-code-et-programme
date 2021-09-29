using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Quel nombre voulez-vous ? ");
            int choix = int.Parse(Console.ReadLine());
            Console.WriteLine("Les 5 nombres précèdents sont : ");
            for(var i = choix - 1 ; i >= choix -1 -4 ; i = i - 1) {
                Console.WriteLine(i);
            }

            Console.WriteLine("Les 5 nombres suivants sont : ");
            for(var i = choix + 1 ; i <= choix +1 +4 ; i = i + 1) {
                Console.WriteLine(i);
            }
        }
    }
}
