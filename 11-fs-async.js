const { readFile, writeFile, appendFile, open  , unlink , rename} = require("fs");
const fs = require("fs");

readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(result);
  const first = result;
  readFile("./content/second.txt", "utf8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    const second = result;
    console.log(result);
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});

//Create a new file using the appendFile() method:
appendFile("mynewfile1.txt", " This is my text.", function (err) {
  if (err) throw err;
  console.log("Updated!");
});

open("./content/second.txt", "w", function (err, file) {
  if (err) throw err;
  console.log("saved!");
});

//Replace the content of the file "mynewfile3.txt":
writeFile('mynewfile3.txt', 'This is my new text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});

//To delete a file with the File System module
unlink('mynewfile3.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});