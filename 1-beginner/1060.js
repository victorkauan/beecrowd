var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var positiveNumbers = 0;

for (var i = 0; i < 6; i++) {
  var number = parseFloat(lines.shift());
  if (number > 0) positiveNumbers++;
}

console.log(`${positiveNumbers} valores positivos`);
