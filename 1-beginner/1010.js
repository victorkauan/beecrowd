var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var productOne = lines.shift().split(" "),
  productTwo = lines.shift().split(" ");

var [productOneCode, productOneUnits] = productOne.map((number) =>
    parseInt(number)
  ),
  productOnePrice = parseFloat(productOne[2]);

var [productTwoCode, productTwoUnits] = productTwo.map((number) =>
    parseInt(number)
  ),
  productTwoPrice = parseFloat(productTwo[2]);

var valueToPay =
  productOneUnits * productOnePrice + productTwoUnits * productTwoPrice;

console.log(`VALOR A PAGAR: R$ ${valueToPay.toFixed(2)}`);
