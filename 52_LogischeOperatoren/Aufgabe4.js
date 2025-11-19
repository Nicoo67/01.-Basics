let age = prompt("Whats your age");
let ageAsNumber = parseInt(age);

let money = prompt("How much money do you have");
let moneyasNumber = parseInt(money);

if (age >= 18 && money >= 12) {

    console.log("Ticket purchased");
} else if (age >= 18 && money < 12) {

    console.log("Not enought money");
} else if (age < 18 && money >= 12) {
    console.log("Youre to young")
}