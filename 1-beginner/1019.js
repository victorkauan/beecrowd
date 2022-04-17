var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var eventDuration = parseInt(lines.shift());

var hours = Math.floor(eventDuration / 3600);
var remainder = eventDuration % 3600;

var minutes = Math.floor(remainder / 60);
remainder = remainder % 60;

var seconds = remainder;

console.log(`${hours}:${minutes}:${seconds}`);
