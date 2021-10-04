var notes = [12,14,16,18,10,11,10,13];

var moyenne = 0;
for(var i = 0 ; i<= notes.length - 1 ; i++) {
    var laNote = notes[i];
    if(laNote % 2 != 0) {
        laNote = laNote + 1;
    }
    moyenne = moyenne + laNote;
}
moyenne = moyenne / notes.length;
console.log("La moyenne est de : " + moyenne);