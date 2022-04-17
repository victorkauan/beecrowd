var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var numberOfCases = parseInt(lines.shift());

for (let i = 0; i < numberOfCases; i++) {
  var testCase = parseInt(lines.shift());
  var line = [];

  if (testCase === 0) line.push("NULL");
  else {
    if (testCase % 2 === 0) line.push("EVEN");
    else if (testCase % 2 !== 0) line.push("ODD");

    if (testCase > 0) line.push("POSITIVE");
    else if (testCase < 0) line.push("NEGATIVE");
  }

  console.log(line.join(" "));
}
