var prix = [5,50,23,11];
var quantite = [10,1,4,3];

var total = 0;
for(var i = 0 ; i <= prix.length - 1 ; i++) {
    total = total + prix[i] * quantite[i];
}

console.log("Le prix total est de : " + total);