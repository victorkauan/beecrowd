var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var personAge = parseInt(lines.shift());

var years = ~~(personAge / 365);
var remainder = personAge % 365;

var months = ~~(remainder / 30);
remainder = remainder % 30;

var days = remainder;

console.log(`${years} ano(s)`);
console.log(`${months} mes(es)`);
console.log(`${days} dia(s)`);
