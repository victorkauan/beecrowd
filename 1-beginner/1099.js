var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var numberOfTests = lines.shift();

for (var i = 0; i < numberOfTests; i++) {
  var [x, y] = lines
    .shift()
    .split(' ')
    .map((number) => parseInt(number));

  if (x < y) [x, y] = [y, x];

  var oddSum = 0;

  for (
    var oddNumber = y % 2 === 0 ? y + 1 : y + 2;
    oddNumber < x;
    oddNumber += 2
  ) {
    oddSum += oddNumber;
  }

  console.log(oddSum);
}
