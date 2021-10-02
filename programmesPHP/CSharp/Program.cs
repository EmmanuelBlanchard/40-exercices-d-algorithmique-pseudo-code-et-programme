using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Quelle est la factorielle voulue ? : ");
            int nombreFactorielleSaisi = int.Parse(Console.ReadLine());

            Console.WriteLine("------------------");
            Console.WriteLine("Version boucle : " + "\n" + "La factorielle de " + nombreFactorielleSaisi + " = " + factorielleVersionBoucle(nombreFactorielleSaisi));
            Console.WriteLine("------------------");
            Console.WriteLine("Version récursive : " + "\n" + "La factorielle de " + nombreFactorielleSaisi + " = " + factorielleVersionRecursive(nombreFactorielleSaisi));

            int factorielleVersionBoucle(int nombreFactorielleSaisi) {
                int resultatFactorielle = 1;
                for(var i = 1; i <= nombreFactorielleSaisi ; i = i + 1) {
                    resultatFactorielle = resultatFactorielle * i;
                }
                return resultatFactorielle;
            }

            int factorielleVersionRecursive(int nombreFactorielleSaisi) {
                if(nombreFactorielleSaisi <= 1) {
                    return 1;
                } else {
                    return nombreFactorielleSaisi * factorielleVersionRecursive(nombreFactorielleSaisi - 1);
                }
            }
        }
    }
}
