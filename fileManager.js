const fs = require("fs");
const logger = require("./modules/logger");

const filePath = "./test.txt";

function createFile() {
  logger.info("Creating File...");
  fs.writeFile(filePath, "Hello Node.js\n", (err) => {
    if (err) {
      logger.error(`Failed to create file: ${err.message}`);
      return;
    }
    logger.success("File Created");
    readFile();
  });
}

function readFile() {
  logger.info("Reading File...");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      logger.error(`File not found or unreadable: ${err.message}`);
      return;
    }
    console.log(data.trim());
    updateFile();
  });
}

function updateFile() {
  logger.info("Updating File...");
  fs.appendFile(filePath, "Learning FS Module\n", (err) => {
    if (err) {
      logger.error(`Failed to update file: ${err.message}`);
      return;
    }
    logger.success("File Updated");
    fs.readFile(filePath, "utf8", (readErr, data) => {
      if (!readErr) console.log(data.trim());
      deleteFile();
    });
  });
}

function deleteFile() {
  logger.info("Deleting File...");
  fs.unlink(filePath, (err) => {
    if (err) {
      logger.error(`Failed to delete file (may not exist): ${err.message}`);
      return;
    }
    logger.success("File Deleted");
  });
}

createFile();