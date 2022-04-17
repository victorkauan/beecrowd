var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var numberPattern = /\D/g;
var startDay = lines.shift().replace(numberPattern, "");
var [startHour, startMinute, startSecond] = lines
  .shift()
  .split(" : ")
  .map((time) => parseInt(time));
var endDay = lines.shift().replace(numberPattern, "");
var [endHour, endMinute, endSecond] = lines
  .shift()
  .split(" : ")
  .map((time) => parseInt(time));

var startDaySeconds =
  86400 - (startHour * 3600 + startMinute * 60 + startSecond);
var endDaySeconds = endHour * 3600 + endMinute * 60 + endSecond;
var totalSeconds = startDaySeconds + endDaySeconds;

var totalDays = endDay - startDay - 1;

var day = ~~(totalSeconds / 86400) + totalDays;
var remainder = totalSeconds % 86400;

var hour = ~~(remainder / 3600);
var remainder = remainder % 3600;

var minute = ~~(remainder / 60);

var second = remainder % 60;

console.log(`${day} dia(s)`);
console.log(`${hour} hora(s)`);
console.log(`${minute} minuto(s)`);
console.log(`${second} segundo(s)`);
