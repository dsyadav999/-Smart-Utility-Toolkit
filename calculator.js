const logger = require("./modules/logger");

const args = process.argv.slice(2);
const [operation, rawA, rawB] = args;

logger.info(`Received CLI arguments: ${JSON.stringify(args)}`);

function calculate(op, a, b) {
  switch (op) {
    case "add":
      return a + b;
    case "sub":
      return a - b;
    case "mul":
      return a * b;
    case "div":
      if (b === 0) {
        throw new Error("Division by zero is not allowed");
      }
      return a / b;
    default:
      throw new Error(`Unknown operation "${op}". Use add | sub | mul | div`);
  }
}

if (!operation || rawA === undefined || rawB === undefined) {
  logger.error("Missing arguments.");
  console.log("Usage: node calculator.js <add|sub|mul|div> <num1> <num2>");
  process.exit(1);
}

const a = Number(rawA);
const b = Number(rawB);

if (Number.isNaN(a) || Number.isNaN(b)) {
  logger.error(`Invalid numbers provided: "${rawA}", "${rawB}"`);
  process.exit(1);
}

try {
  const result = calculate(operation, a, b);
  logger.success(`Calculation complete`);
  console.log(`Result: ${result}`);
} catch (err) {
  logger.error(err.message);
  process.exit(1);
}