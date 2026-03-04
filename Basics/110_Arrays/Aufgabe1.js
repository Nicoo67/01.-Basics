let arr = [];

for (let i = 0; i < 7; i++) {
  let randomNumber = Math.floor(Math.random() * 100);
  arr.push(randomNumber);
}

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log("Numbers:", arr);
console.log("Sum:", sum);

    