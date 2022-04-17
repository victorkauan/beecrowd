var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var salary = parseFloat(lines.shift());
var tax;

if (salary >= 0 && salary <= 2000) console.log("Isento");
else if (salary > 2000 && salary <= 3000) {
  tax = (salary - 2000) * 0.08;
  console.log(`R$ ${tax.toFixed(2)}`);
} else if (salary > 3000 && salary <= 4500) {
  tax = 1000 * 0.08 + (salary - 3000) * 0.18;
  console.log(`R$ ${tax.toFixed(2)}`);
} else if (salary > 4500) {
  tax = 1000 * 0.08 + 1500 * 0.18 + (salary - 4500) * 0.28;
  console.log(`R$ ${tax.toFixed(2)}`);
}
