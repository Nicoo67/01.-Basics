let arr = [5, 12, 8, 44, 2, 27];

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log("Die größte Zahl ist:", max);