var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var fuelConsumption = 12;
var [spentTime, averageSpeed] = lines.map((value) => parseInt(value));

var distance = spentTime * averageSpeed;

var neededLiters = distance / fuelConsumption;

console.log(neededLiters.toFixed(3));
