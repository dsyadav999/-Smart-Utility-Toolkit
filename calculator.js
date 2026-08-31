console.log("Calculator started");
const args = process.argv;

let operation = args[2];
let num1 = Number(args[3]);
let num2 = Number(args[4]);

console.log("Operation:", operation);
console.log("Numbers:", num1, num2);

if (operation === "add") {
    console.log("Result:", num1 + num2);
}
else if (operation === "sub") {
    console.log("Result:", num1 - num2);
}
else if (operation === "mul") {
    console.log("Result:", num1 * num2);
}
else if (operation === "div") {
    if (num2 === 0) {
        console.log("Cannot divide by zero");
    }
    else {
        console.log("Result:", num1 / num2);
    }
}
else {
    console.log("Invalid operation");
    console.log("Use add, sub, mul or div");
}
console.log("Calculator finished");