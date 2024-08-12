const { readFile, writeFile } = require("fs");
const fs = require("fs");


console.log('started a first task');
readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(result);
  console.log("Completed");
});
console.log("Starting next");