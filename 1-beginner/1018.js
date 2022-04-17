var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var value = parseInt(lines.shift());
var notes = [100, 50, 20, 10, 5, 2, 1];

console.log(value);

notes.forEach((note) => {
  var numberOfNotes = ~~(value / note);
  console.log(`${numberOfNotes} nota(s) de R$ ${note},00`);
  value = value % note;
});
