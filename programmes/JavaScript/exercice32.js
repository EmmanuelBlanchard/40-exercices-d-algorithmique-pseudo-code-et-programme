var feu = ["_","_","_"];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function programme() { 
    while(true) {
        // Feu Rouge
        feu[0] = ["x"];
        feu[1] = ["_"];
        console.log(feu[0] + " | " + feu[1] + " | " + feu[2]);
        console.log("---------------------");
        await sleep(2000);

        // Feu Vert
        feu[0] = ["_"];
        feu[2] = ["x"];
        console.log(feu[0] + " | " + feu[1] + " | " + feu[2]);
        console.log("---------------------");
        await sleep(2000);

        // Feu Orange
        feu[2] = ["_"];
        feu[1] = ["x"];
        console.log(feu[0] + " | " + feu[1] + " | " + feu[2]);
        console.log("---------------------");
        await sleep(500);
    }
}

programme();
