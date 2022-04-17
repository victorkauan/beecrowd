var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var [a, b, c] = lines
  .shift()
  .split(" ")
  .map((value) => parseFloat(value));

if (a === 0) console.log("Impossivel calcular");
else {
  delta = Math.pow(b, 2) - 4 * a * c;

  if (delta < 0) console.log("Impossivel calcular");
  else {
    var r1 = (-b + Math.sqrt(delta)) / (2 * a);
    var r2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log(`R1 = ${r1.toFixed(5)}`);
    console.log(`R2 = ${r2.toFixed(5)}`);
  }
}
