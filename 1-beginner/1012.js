var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var [A, B, C] = lines
  .shift()
  .split(" ")
  .map((value) => parseFloat(value));

var pi = 3.14159;

var areas = {
  triangle: (A * C) / 2,
  circle: pi * (C * C),
  trapezium: ((A + B) * C) / 2,
  square: B * B,
  rectangle: A * B,
};

var messages = ["TRIANGULO", "CIRCULO", "TRAPEZIO", "QUADRADO", "RETANGULO"];

Object.values(areas).forEach((area, index) => {
  console.log(`${messages[index]}: ${area.toFixed(3)}`);
});
