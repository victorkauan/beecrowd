var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var number = parseInt(lines.shift());

if (number % 2 === 0) number++;

for (var i = 0; i < 6; i++) {
  console.log(number);
  number += 2;
}
