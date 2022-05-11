var j = 1;

for (
  var i = 0;
  i <= 2;
  i = (i * 10 + 0.2 * 10) / 10, j = (j * 10 - 2.8 * 10) / 10
) {
  for (var k = 0; k < 3; k++) {
    console.log(`I=${i} J=${j}`);
    j += 1;
  }
}
