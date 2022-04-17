var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var positiveCounter = 0;
var positiveSum = 0;

for (var i = 0; i < 6; i++) {
  var number = parseFloat(lines.shift());

  if (number > 0) {
    positiveCounter++;
    positiveSum += number;
  }
}

var average = positiveSum / positiveCounter;

console.log(`${positiveCounter} valores positivos`);
console.log(average.toFixed(1));
