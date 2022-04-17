var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var evenValues = 0,
  oddValues = 0,
  positiveValues = 0,
  negativeValues = 0;

for (i = 0; i < 5; i++) {
  var value = parseInt(lines.shift());

  if (value % 2 === 0) evenValues++;
  else if (value % 2 !== 0) oddValues++;
  if (value > 0) positiveValues++;
  else if (value < 0) negativeValues++;
}

console.log(`${evenValues} valor(es) par(es)`);
console.log(`${oddValues} valor(es) impar(es)`);
console.log(`${positiveValues} valor(es) positivo(s)`);
console.log(`${negativeValues} valor(es) negativo(s)`);
