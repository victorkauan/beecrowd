var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

while (true) {
  var [m, n] = lines
    .shift()
    .split(' ')
    .map((number) => parseInt(number));

  if (m <= 0 || n <= 0) break;
  if (m > n) [m, n] = [n, m];

  var sequenceMessage = '';
  var integerSum = 0;

  for (var i = m; i <= n; i++) {
    sequenceMessage += `${i} `;
    integerSum += i;
  }

  console.log(`${sequenceMessage}Sum=${integerSum}`);
}
