const crypto = require("crypto");
const logger = require("./modules/logger");

function rollDice() {
  return crypto.randomInt(1, 7);  
}
const args = process.argv.slice(2);
const rolls = Number(args[0]) > 0 ? Number(args[0]) : 1;

logger.info(`Rolling the dice ${rolls} time(s)...`);

const results = [];
for (let i = 1; i <= rolls; i++) {
  const value = rollDice();
  results.push(value);
  console.log(`Dice Rolled: ${value}`);
}
