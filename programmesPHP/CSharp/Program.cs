using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            String[,] listeUtilisateurs = {
                {"Tya","test1","admin"},
                {"Milo","test2","user"},
                {"Lili","test3","user"}
            };

            String estConnecte(String[,] utilisateurs,String choixLogin,String choixMotDePasse) {
                for(var i = 0 ; i < utilisateurs.Length/3; i++) {
                    if(choixLogin == utilisateurs[i,0] && choixMotDePasse == utilisateurs[i,1]) {
                        return utilisateurs[i,2];
                    }
                }
                return "";
            }

            String role = "";
            int nombreEssai = 1;
            const int NOMBREESSAISTOTAL = 3;
            do {
                Console.WriteLine("Saisir votre login ? : ");
                String choixLogin = Console.ReadLine();

                Console.WriteLine("Saisir votre mot de passe ? : ");
                String choixMotDePasse = Console.ReadLine();

                role = estConnecte(listeUtilisateurs,choixLogin,choixMotDePasse);
                if(role == "") {
                    Console.WriteLine("Combinaison login / mot de passe incorrecte, encore " + (NOMBREESSAISTOTAL - nombreEssai) + " essais !");
                    nombreEssai++;
                }
            } while (role == "" && nombreEssai <= NOMBREESSAISTOTAL);

            if(nombreEssai > NOMBREESSAISTOTAL) {
                Console.WriteLine("Vous avez essayé trop de fois ! \n");
                Console.WriteLine("Fin du programme !");
            } else {
                Console.WriteLine("Vous êtes connecté ! et vos accès sont : " + role);
            }
        }
    }
}
