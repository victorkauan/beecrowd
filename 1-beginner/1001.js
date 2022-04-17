var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var [A, B] = lines.map((number) => parseInt(number));

var X = A + B;

console.log(`X = ${X}`);
