var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var distanceBetween = parseInt(lines.shift());

var kmForHour = {
  carX: 60,
  carY: 90,
};

var kmForMin = {
  carX: kmForHour.carX / 60,
  carY: kmForHour.carY / 60,
};

var distancePerMinute = kmForMin.carY - kmForMin.carX;

var howLongItTakes = distanceBetween / distancePerMinute;

console.log(`${howLongItTakes} minutos`);
