const fs = require("fs");
const readline = require("readline");

// Create interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Get filename from user
rl.question("Enter filename: ", (filename) => {

    // Get initial content
    rl.question("Enter content: ", (content) => {

        // Create and write the file
        fs.writeFile(filename, content, (err) => {
            if (err) {
                console.log("Error creating file:", err);
                rl.close();
                return;
            }

            console.log("File created and content written successfully.");

            // Read the file
            fs.readFile(filename, "utf8", (err, data) => {
                if (err) {
                    console.log("Error reading file:", err);
                    rl.close();
                    return;
                }

                console.log("\nOriginal File Content:");
                console.log(data);

                // Get additional content
                rl.question("\nEnter additional content to append: ", (additionalContent) => {

                    // Append content
                    fs.appendFile(filename, "\n" + additionalContent, (err) => {
                        if (err) {
                            console.log("Error appending content:", err);
                            rl.close();
                            return;
                        }

                        console.log("Content appended successfully.");

                        // Read final contents
                        fs.readFile(filename, "utf8", (err, finalData) => {
                            if (err) {
                                console.log("Error reading final content:", err);
                                rl.close();
                                return;
                            }

                            console.log("\nFinal File Content:");
                            console.log(finalData);

                            rl.close();
                        });
                    });
                });
            });
        });
    });
});