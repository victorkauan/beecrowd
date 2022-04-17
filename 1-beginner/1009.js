var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var sellerName = lines.shift();
var [fixedSalary, totalSold] = lines.map((value) => parseFloat(value));

var salary = fixedSalary + 0.15 * totalSold;

console.log(`TOTAL = R$ ${salary.toFixed(2)}`);
