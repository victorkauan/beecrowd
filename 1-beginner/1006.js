var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var [a, b, c] = lines.map((value) => parseFloat(value));

var weightA = 2,
  weightB = 3,
  weightC = 5;

var average =
  (a * weightA + b * weightB + c * weightC) / (weightA + weightB + weightC);

console.log(`MEDIA = ${average.toFixed(1)}`);
