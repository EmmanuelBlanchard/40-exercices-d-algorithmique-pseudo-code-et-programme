using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Boolean estBissextitle(int annee) {
                return ((annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0);
            }

            void affichageAnneeBissextile(int annee) {
                String message = annee + " est une année ";
                if(!estBissextitle(annee)){
                    message = message + "non ";
                }
                message = message + "bissextitle";
                Console.WriteLine(message);
            }

            affichageAnneeBissextile(1900);
            affichageAnneeBissextile(2000);
            affichageAnneeBissextile(2020);
        }
    }
}
