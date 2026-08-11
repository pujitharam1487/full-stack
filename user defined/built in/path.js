const path = require("path");
const filePath = "/home/user/documents/file.txt";
console.log("File Name:", path.basename(filePath));
console.log("Directory:", path.dirname(filePath));
console.log("Extension:", path.extname(filePath));