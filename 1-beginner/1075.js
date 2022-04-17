var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var n = parseInt(lines.shift());

for (var i = 2; i <= 10000; i += n) {
  console.log(i);
}
