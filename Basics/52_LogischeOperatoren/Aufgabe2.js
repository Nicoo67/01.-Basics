let speed = prompt("Whats your speed?")
let speedasNumber = parseInt(speed)

let trafficlevel = prompt("Whats the Traffic Level")
let trafficlevelNumber = parseInt(trafficlevel)

if (speed >= 80 || trafficlevel >= 7) {

    console.log("Slow down!");
}else {

    console.log("You are good to go.");
}