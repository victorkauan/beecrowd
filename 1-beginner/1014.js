var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var totalDistance = parseInt(lines.shift()),
  spentFuel = parseFloat(lines.shift());

var averageConsumption = totalDistance / spentFuel;

console.log(`${averageConsumption.toFixed(3)} km/l`);
