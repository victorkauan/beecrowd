var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var number = parseInt(lines.shift());

for (var i = 2; i <= number; i += 2) {
  var square = Math.pow(i, 2);

  console.log(`${i}^2 = ${square}`);
}
