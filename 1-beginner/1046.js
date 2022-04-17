var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var [start, end] = lines
  .shift()
  .split(" ")
  .map((value) => parseInt(value));

var duration;

if (start == end) duration = 24;
else if (start > end) duration = 24 - start + end;
else duration = end - start;

console.log(`O JOGO DUROU ${duration} HORA(S)`);
