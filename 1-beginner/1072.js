var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var caseNumber = parseInt(lines.shift());

var inNumbers = 0,
  outNumbers = 0;

for (var i = 0; i < caseNumber; i++) {
  var number = parseInt(lines.shift());
  if (number >= 10 && number <= 20) inNumbers++;
  else outNumbers++;
}

console.log(`${inNumbers} in`);
console.log(`${outNumbers} out`);
