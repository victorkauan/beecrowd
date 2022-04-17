var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var totalValue = parseFloat(lines.shift());
var notes = [100, 50, 20, 10, 5, 2];
var coins = [100, 50, 25, 10, 5, 1];

console.log("NOTAS:");

notes.forEach((note) => {
  var numberOfNotes = ~~(totalValue / note);
  console.log(`${numberOfNotes} nota(s) de R$ ${note.toFixed(2)}`);
  totalValue = totalValue % note;
});

console.log("MOEDAS:");

totalValue *= 100;

coins.forEach((coin) => {
  var numberOfCoins = ~~(totalValue / coin);
  console.log(`${numberOfCoins} moeda(s) de R$ ${(coin / 100).toFixed(2)}`);
  totalValue = totalValue % coin;
});
