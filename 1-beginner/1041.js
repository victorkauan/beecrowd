var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var [x, y] = lines
  .shift()
  .split(" ")
  .map((coordinate) => parseFloat(coordinate));

if (x === 0 && y === 0) console.log("Origem");
else if (y === 0) console.log("Eixo X");
else if (x === 0) console.log("Eixo Y");
else {
  if (x > 0 && y > 0) console.log("Q1");
  if (x < 0 && y > 0) console.log("Q2");
  if (x < 0 && y < 0) console.log("Q3");
  if (x > 0 && y < 0) console.log("Q4");
}
