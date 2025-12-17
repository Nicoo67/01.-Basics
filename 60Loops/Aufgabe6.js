let NumberCount = parseInt(prompt("How many numbers do you want to enter?"));
let sum = 0;

for (let i = 1; i <= NumberCount; i++) {
  let number = parseFloat(prompt("Enter number " + i + ":"));
  sum += number;
}

let average = sum / NumberCount;
console.log("The average is: " + average);