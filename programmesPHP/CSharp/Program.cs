using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            String[,] listeUtilisateurs = {
                {"Tya","test1"},
                {"Milo","test2"},
                {"Lili","test3"}
            };

            Boolean  connecte = false;
            do {
                Console.WriteLine("Saisir votre login ? : ");
                String choixLogin = Console.ReadLine();

                Console.WriteLine("Saisir votre mot de passe ? : ");
                String choixMotDePasse = Console.ReadLine();

                connecte = estConnecte(listeUtilisateurs,choixLogin,choixMotDePasse);
                if(!connecte) {
                    Console.WriteLine("Combinaison login / mot de passe incorrecte, recommencez !");
                }
            } while (!connecte);

            Console.WriteLine("Vous êtes connecté !");

            Boolean estConnecte(String[,] utilisateurs,String choixLogin,String choixMotDePasse) {
                for(var i = 0 ; i < utilisateurs.Length/2; i++) {
                    if(choixLogin == listeUtilisateurs[i, 0] && choixMotDePasse == listeUtilisateurs[i, 1]) {
                        return true;
                    }
                }
                return false;
            }
        }
    }
}
