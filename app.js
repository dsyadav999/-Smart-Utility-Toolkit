const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger.info("Starting module reusability demo...");

const num = [2, 7, 10, 13, 0, -4];

num.forEach((num) => {
  const result = isEven(num) ? "even" : "odd";
  logger.info(`${num} is ${result}`);
});

logger.success("Module reusability demo finished.");