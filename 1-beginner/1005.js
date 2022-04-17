var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var [a, b] = lines.map((value) => parseFloat(value));
var weightA = 3.5,
  weightB = 7.5;

var average = (a * weightA + b * weightB) / (weightA + weightB);

console.log(`MEDIA = ${average.toFixed(5)}`);
