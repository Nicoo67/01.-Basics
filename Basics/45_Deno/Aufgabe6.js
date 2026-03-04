let drink = prompt("Welches Getränk willst du?");

let drink1AsNumber = parseInt(drink);

let selection = prompt("1 Cola, 2 Wasser, 3 Bier, 4 Tee");

let selectionAsdrink = parseInt(selection);

if (selectionAsdrink == 1) {

    console.log("Danke für deine Bestellung von Cola");
}

if (selectionAsdrink == 2) {

    console.log("Danke für deine Bestellung von Wasser");
}

if (selectionAsdrink == 3) {

    console.log("Danke für deine Bestellung von Bier");
}

if (selectionAsdrink == 4) {

    console.log("Danke für deine Bestellung von Tee");
}