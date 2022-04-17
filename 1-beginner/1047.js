var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var [startHour, startMinute, endHour, endMinute] = lines
  .shift()
  .split(" ")
  .map((time) => parseInt(time));

var startTime = startHour * 60 + startMinute;
var endTime = endHour * 60 + endMinute;

if (startTime === endTime) console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
else {
  var gameDuration = Math.abs(endTime - startTime);

  if (startTime > endTime) gameDuration = 1440 - gameDuration;

  var gameDurationHour = ~~(gameDuration / 60);
  var gameDurationMinute = gameDuration % 60;

  console.log(
    `O JOGO DUROU ${gameDurationHour} HORA(S) E ${gameDurationMinute} MINUTO(S)`
  );
}
