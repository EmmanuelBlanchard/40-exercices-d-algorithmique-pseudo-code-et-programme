using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Quel est le nombre de la taille du carre voulez vous ? ");
            int nombreDeLaTailleDuCarre = int.Parse(Console.ReadLine());
            
            string grandeLigne = "";

            for(int i = 1; i <= nombreDeLaTailleDuCarre ; i = i + 1) {
                grandeLigne = grandeLigne + "**";
            }

            string petiteLigne = "";
            for(int j = 1 ; j <= nombreDeLaTailleDuCarre ; j = j + 1) {
                if(j == 1 || j == nombreDeLaTailleDuCarre) {
                    petiteLigne = petiteLigne + "**";
                } else {
                    petiteLigne = petiteLigne + "  ";
                }
            }

            for(int k = 1 ; k <= nombreDeLaTailleDuCarre ; k = k + 1) {
                if(k == 1 || k == nombreDeLaTailleDuCarre) {
                    Console.WriteLine(grandeLigne);
                } else {
                    Console.WriteLine(petiteLigne);
                }
            }
        }
    }
}
