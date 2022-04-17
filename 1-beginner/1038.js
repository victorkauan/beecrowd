var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var [code, quantity] = lines
  .shift()
  .split(" ")
  .map((value) => parseInt(value));

var products = {
  hotDog: 4.0,
  xSalad: 4.5,
  xBacon: 5.0,
  toast: 2.0,
  soda: 1.5,
};

var total;

switch (code) {
  case 1:
    total = products.hotDog * quantity;
    break;
  case 2:
    total = products.xSalad * quantity;
    break;
  case 3:
    total = products.xBacon * quantity;
    break;
  case 4:
    total = products.toast * quantity;
    break;
  case 5:
    total = products.soda * quantity;
}

console.log(`Total: R$ ${total.toFixed(2)}`);
