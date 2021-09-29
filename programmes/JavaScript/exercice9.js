var alea = Math.floor(Math.random()*20+1);
console.log("Nombre : " + alea);
console.log("Le nombre est divisible par : ");

for(var i = 1; i <= alea; i++) {
    if(alea % i === 0 ) {
        console.log(i);
    }
}
