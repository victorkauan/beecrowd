var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var highest = 0;
var position;

for (var i = 1; i <= 100; i++) {
  var number = parseInt(lines.shift());

  if (number > highest) {
    highest = number;
    position = i;
  }
}

console.log(highest);
console.log(position);
