var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var numberOfTests = parseInt(lines.shift());
var rabbitSum = 0,
  ratSum = 0,
  frogSum = 0;

for (var i = 0; i < numberOfTests; i++) {
  var [caseAmount, typeOfAnimal] = lines.shift().split(' ');
  caseAmount = parseInt(caseAmount);

  switch (typeOfAnimal) {
    case 'C':
      rabbitSum += caseAmount;
      break;
    case 'R':
      ratSum += caseAmount;
      break;
    case 'S':
      frogSum += caseAmount;
  }
}

var total = rabbitSum + ratSum + frogSum;
var rabbitPercentual = (rabbitSum / total) * 100,
  ratPercentual = (ratSum / total) * 100,
  frogPercentual = (frogSum / total) * 100;

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${rabbitSum}`);
console.log(`Total de ratos: ${ratSum}`);
console.log(`Total de sapos: ${frogSum}`);
console.log(`Percentual de coelhos: ${rabbitPercentual.toFixed(2)} %`);
console.log(`Percentual de ratos: ${ratPercentual.toFixed(2)} %`);
console.log(`Percentual de sapos: ${frogPercentual.toFixed(2)} %`);
