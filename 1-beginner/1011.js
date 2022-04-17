var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var pi = 3.14159;
var radius = parseFloat(lines.shift());

var sphereVolume = (4.0 / 3) * pi * (radius * radius * radius);

console.log(`VOLUME = ${sphereVolume.toFixed(3)}`);
