const fs = require("fs");

const fileName = "test.txt";

console.log("Creating File...");

fs.writeFile(fileName, "Hello Node.js", (err) => {

    if (err) {
        console.log("Error creating file");
        return;
    }

    console.log("File Created");

    console.log("Reading File...");

    fs.readFile(fileName, "utf8", (err, data) => {

        if (err) {
            console.log("Error reading file");
            return;
        }

        console.log(data);

        console.log("Updating File...");

        fs.appendFile(fileName, "\nLearning FS Module", (err) => {

            if (err) {
                console.log("Error updating file");
                return;
            }

            console.log("File Updated");

            fs.readFile(fileName, "utf8", (err, data) => {

                if (err) {
                    console.log("Error reading updated file");
                    return;
                }

                console.log(data);

                console.log("Deleting File...");

                fs.unlink(fileName, (err) => {

                    if (err) {
                        console.log("Error deleting file");
                        return;
                    }

                    console.log("File Deleted");
                });
            });
        });
    });
});