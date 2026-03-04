let temperature = prompt("Whats the temperature");
let temperatureAsNumber = parseInt(temperature);

let humidity = prompt("Whats the humidity")
let humidityasNumber = parseInt(humidity);

if (temperatureAsNumber >= 20 && temperatureAsNumber <= 25 && humidityasNumber <= 60) {

    console.log("Perfect for outdoor activities");
}

else if (humidityasNumber >= 61 && humidityasNumber <= 80) {

    console.log("Maybe stay indoors today");
}

else {

    console.log("Consult a doctor before exercising");
}
