var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var [number, workedHours] = lines.map((number) => parseInt(number));
var receivedPerHour = parseFloat(lines[2]);

var salary = workedHours * receivedPerHour;

console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${salary.toFixed(2)}`);
