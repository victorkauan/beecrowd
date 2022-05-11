var i = 1;

while (i <= 9) {
  var j = 7;
  for (var k = 0; k < 3; k++) {
    console.log(`I=${i} J=${j}`);
    j -= 1;
  }
  i += 2;
}
