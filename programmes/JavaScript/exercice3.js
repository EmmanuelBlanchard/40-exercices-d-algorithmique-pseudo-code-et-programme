const TVA = 20;
var prixHT = 10;
console.log("Voici le prix : ");
console.log(prixHT + "€ HT - " + (prixHT * TVA / 100 + prixHT) + "€ TTC");
