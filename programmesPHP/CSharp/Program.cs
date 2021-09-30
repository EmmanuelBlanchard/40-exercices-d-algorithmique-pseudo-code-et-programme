using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            int note1 = saisieNote();
            int note2 = saisieNote();
            int note3 = saisieNote();

            Console.WriteLine("La moyenne est de : " + (note1+note2+note3) / 3);

            int saisieNote() {
                Console.WriteLine("Saisir un note entre 0 et 20 : ");
                int nombreSaisi = int.Parse(Console.ReadLine());
                while (nombreSaisi < 0 || nombreSaisi > 20) {
                    Console.WriteLine("Mauvaise saisie, recommencez : ");
                    nombreSaisi = int.Parse(Console.ReadLine());
                }
                return nombreSaisi;
            }
        }
    }
}
