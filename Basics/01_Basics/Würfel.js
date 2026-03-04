
let NumberComputer = Math.floor(Math.random() * 6 + 1);
let NumberPlayer = Math.floor(Math.random() * 6 + 1);



if (NumberComputer < NumberPlayer) {
    console.log("Computer" + " " + NumberComputer + " | " + "Player" + " " + NumberPlayer + " " + "You Won");
}
else if (NumberComputer > NumberPlayer); {
    console.log("Computer" + " " + NumberComputer + " | " + "Player" + " " + NumberPlayer + " " + "You lost");
}


