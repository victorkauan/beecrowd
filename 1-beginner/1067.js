var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var x = parseInt(lines.shift());

for (var i = 1; i <= x; i += 2) console.log(i);
