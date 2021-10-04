using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] prix = new int[]{5,50,23,11};
            int[] quantite = new int[]{10,1,4,3};

            int total = 0;
            for(int i = 0 ; i <= prix.Length - 1 ; i++) {
                total = total + prix[i] * quantite[i];
            }

            Console.WriteLine("Le prix total est de : " + total);   
        }
    }
}
