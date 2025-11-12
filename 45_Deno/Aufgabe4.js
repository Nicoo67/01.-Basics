let age = prompt("Wie alt bist du?");
let age1AsNumber = parseInt(age);

if (age < 30) {
    console.log("Du bist jung.");
}
else if (age < 60) {
    console.log("Du bist mittelalt.");
}
else {
    console.log("Du bist alt.")
}