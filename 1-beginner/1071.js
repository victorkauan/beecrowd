var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var [x, y] = lines.map((value) => parseInt(value));
if (x > y) [x, y] = [y, x];

if (x % 2 !== 0) x++;
var sum = 0;

for (var i = x + 1; i < y; i += 2) {
  sum += i;
}

console.log(sum);
