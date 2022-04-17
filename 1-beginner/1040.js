var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var [scoreOne, scoreTwo, scoreThree, scoreFour] = lines
  .shift()
  .split(" ")
  .map((score) => parseFloat(score));

var weightOne = 2,
  weightTwo = 3,
  weightThree = 4,
  weightFour = 1;

var average =
  (scoreOne * weightOne +
    scoreTwo * weightTwo +
    scoreThree * weightThree +
    scoreFour * weightFour) /
  (weightOne + weightTwo + weightThree + weightFour);

console.log(`Media: ${average.toFixed(1)}`);

if (average >= 7) console.log("Aluno aprovado.");
else if (average >= 5 && average < 7) {
  console.log("Aluno em exame.");

  var examScore = parseFloat(lines.shift());

  console.log(`Nota do exame: ${examScore.toFixed(1)}`);

  var finalAverage = (average + examScore) / 2;

  if (finalAverage >= 5) console.log("Aluno aprovado.");
  else if (finalAverage < 5) console.log("Aluno reprovado.");
  console.log(`Media final: ${finalAverage.toFixed(1)}`);
} else if (average < 5) console.log("Aluno reprovado.");
