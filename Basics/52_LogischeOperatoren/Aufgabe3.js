let grade = prompt("Whats your grade");
let gradeasNumber = parseInt(grade);

let attendence = prompt("Whats your attendence");
let attendenceasNumber = parseInt(attendence);

let extraCredit = prompt("Whats your extra Credit")
let extraCreditasNumber = parseInt(extraCredit);


if (grade >= 80 && (attendence >= 90 || extraCredit >= 5)) {

    console.log("Eligible for advanced exam");
} else {

    console.log("Not eglible for advanced exam");
}