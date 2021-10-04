using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] notes = new int[]{12,14,16,18,10,11,10,13};

            double moyenne = 0;
            for(int i = 0 ; i<= notes.Length - 1 ; i++) {
                int laNote = notes[i];
                if(laNote % 2 != 0) {
                    laNote = laNote + 1;
                }
                moyenne = moyenne + laNote;
            }
            moyenne = moyenne / notes.Length;
            Console.WriteLine("La moyenne est de : " + moyenne);    
        }
    }
}
