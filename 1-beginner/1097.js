var i = 1,
  j = 7;

while (i <= 9) {
  for (var k = 0; k < 3; k++) {
    console.log(`I=${i} J=${j}`);
    j -= 1;
  }

  i += 2;
  j += 5;
}
