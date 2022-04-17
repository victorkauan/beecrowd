var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var evenValues = 0;

for (var i = 0; i < 5; i++) {
  var value = parseInt(lines.shift());
  if (value % 2 === 0) evenValues++;
}

console.log(`${evenValues} valores pares`);
