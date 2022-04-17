var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var [A, B, C, D] = lines.map((value) => parseInt(value));
var difference = A * B - C * D;

console.log(`DIFERENCA = ${difference}`);
