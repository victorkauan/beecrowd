var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

function isGreatest(a, b) {
  return (a + b + Math.abs(a - b)) / 2;
}

var [A, B, C] = lines
  .shift()
  .split(" ")
  .map((value) => parseInt(value));

var greatest = isGreatest(A, B);
var greatest = isGreatest(greatest, C);

console.log(`${greatest} eh o maior`);
