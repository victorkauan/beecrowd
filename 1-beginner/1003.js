var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var [a, b] = lines.map((value) => parseInt(value));
var sum = a + b;

console.log(`SOMA = ${sum}`);
