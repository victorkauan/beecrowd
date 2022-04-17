var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var originalSalary = parseFloat(lines.shift());

var increasePercentual;

if (originalSalary >= 0 && originalSalary <= 400) {
  increasePercentual = 0.15;
} else if (originalSalary > 400 && originalSalary <= 800) {
  increasePercentual = 0.12;
} else if (originalSalary > 800 && originalSalary <= 1200) {
  increasePercentual = 0.1;
} else if (originalSalary > 1200 && originalSalary <= 2000) {
  increasePercentual = 0.07;
} else if (originalSalary > 2000) {
  increasePercentual = 0.04;
}

var moneyEarned = originalSalary * increasePercentual;
var newSalary = originalSalary + moneyEarned;

console.log(`Novo salario: ${newSalary.toFixed(2)}`);
console.log(`Reajuste ganho: ${moneyEarned.toFixed(2)}`);
console.log(`Em percentual: ${~~(increasePercentual * 100)} %`);
