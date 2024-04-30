"use strict";

function result(fahrenheitTemperature) {
  var celsiusTempature = ((fahrenheitTemperature - 32) * 5) / 9;
  return celsiusTempature;
}

var resultCaught = result(212);
console.log(resultCaught);

var resultCaught = result(90);
console.log(resultCaught);

var resultCaught = result(72);
console.log(resultCaught);

var resultCaught = result(32);
console.log(resultCaught);

var resultCaught = result(0);
console.log(resultCaught);

var resultCaught = result(-40);
console.log(resultCaught);
