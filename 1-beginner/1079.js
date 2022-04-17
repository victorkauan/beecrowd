var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var caseNumber = parseInt(lines.shift());

var weightA = 2,
  weightB = 3,
  weightC = 5;

for (var i = 0; i < caseNumber; i++) {
  var [A, B, C] = lines[i].split(" ").map((value) => parseFloat(value));
  var weightedAverage =
    (A * weightA + B * weightB + C * weightC) / (weightA + weightB + weightC);
  console.log(weightedAverage.toFixed(1));
}
