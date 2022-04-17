var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var [a, b] = lines.map((value) => parseInt(value));

var product = a * b;

console.log(`PROD = ${product}`);
