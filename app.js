const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

let number = 12;

logger("Checking the number...");

if (isEven(number)) {
    logger(number + " is even");
}
else {
    logger(number + " is odd");
}

logger("Program finished");