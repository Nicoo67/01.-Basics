let playerSelection = prompt("Wähle: Schere, Stein oder Papier");

let options = ["Schere", "Stein", "Papier"];
let computerNumber = Math.floor(Math.random() * 3); 
let computerSelection = options[computerNumber];

if (playerSelection === computerSelection) {
    console.log("Der Computer hat das gleiche gewählt, Unentschieden!");
} else if (
    (playerSelection === "Stein" && computerSelection === "Schere") ||
    (playerSelection === "Schere" && computerSelection === "Papier") ||
    (playerSelection === "Papier" && computerSelection === "Stein")
) {
    console.log("Der Computer hat" + " " + computerSelection + " " + "genommen." + " " + "Du gewinnst" );
} else if (options.includes(playerSelection)) {
    console.log("Der Computer hat" + " " + computerSelection + " " + "genommen." + " " +"Der Computer gewinnt!");
}