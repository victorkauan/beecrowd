var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var [A, B, C] = lines
  .shift()
  .split(" ")
  .map((value) => parseInt(value));

function sortInAscending(first, second, third) {
  console.log(first);
  console.log(second);
  console.log(third);
}

if (A > B) {
  if (C > A) sortInAscending(B, A, C);
  else if (C < B) sortInAscending(C, B, A);
  else if (C > B) sortInAscending(B, C, A);
} else if (B > A) {
  if (C > B) sortInAscending(A, B, C);
  else if (C < A) sortInAscending(C, A, B);
  else if (C > A) sortInAscending(A, C, B);
}

console.log("");
console.log(A);
console.log(B);
console.log(C);
