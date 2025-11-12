let temperatur = prompt("Was ist die Temperatur");
let temperatur1AsNumber = parseInt(temperatur);

if (temperatur < -5) {
    console.log("Bleib drinnen");
}
else if (temperatur < 10) {
    console.log("Zieh dich warm an");
}
else if (temperatur < 20) {
    console.log("Geh raus");
}
else if (temperatur > 20) {
    console.log("Geh baden");
}
else if (temperatur > 32); {
    console.log("Ab in die Kühlbox");
}