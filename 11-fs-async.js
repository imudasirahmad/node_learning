const { readFile, writeFile } = require("fs");
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
