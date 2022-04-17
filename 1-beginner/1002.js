var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var R = parseFloat(lines.shift());
var P = 3.14159;

var A = P * Math.pow(R, 2);

console.log(`A=${A.toFixed(4)}`);
