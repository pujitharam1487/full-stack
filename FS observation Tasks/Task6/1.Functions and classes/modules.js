console.log("\n==OS MODULE==");
const os = require("os");
console.log("Operating System:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Home Directory:", os.homedir());
console.log("Total Memory:", os.totalmem());


console.log("\n==PATH MODULE==");
const path = require("path");
const filePath = "/home/user/documents/file.txt";

console.log("File Name:", path.basename(filePath));
console.log("Directory:", path.dirname(filePath));
console.log("Extension:", path.extname(filePath));

console.log("\n==FS MODULE==");
const fs = require("fs");
// Create and write
fs.writeFileSync("demo.txt", "Hello Node.js");
// Read
let data = fs.readFileSync("demo.txt", "utf8");
console.log("Content:", data);
// Append
fs.appendFileSync("demo.txt", "\nWelcome to Node.js");
// Read again
data = fs.readFileSync("demo.txt", "utf8");
console.log("Updated Content:", data);