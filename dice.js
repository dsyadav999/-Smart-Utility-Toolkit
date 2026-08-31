const crypto = require("crypto");

console.log("Rolling dice...");

for (let i = 1; i <= 5; i++) {

    let dice = crypto.randomInt(1, 7);

    console.log("Dice Roll " + i + ":", dice);
}