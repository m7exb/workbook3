"use strict";

function result(celsiusTemperature) {
  var fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  return fahrenheitTemperature;
}

var resultCaught = result(100);
console.log(resultCaught);

var resultCaught = result(45);
console.log(resultCaught);

var resultCaught = result(19);
console.log(resultCaught);

var resultCaught = result(0);
console.log(resultCaught);

var resultCaught = result(-7);
console.log(resultCaught);

var resultCaught = result(-40);
console.log(resultCaught);
