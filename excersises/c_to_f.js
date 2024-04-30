"use strict";

function convertCtoF(celsiusTemperature) {
  var fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  return fahrenheitTemperature;
}

var convertCtoFCaught = convertCtoF(100);
console.log(convertCtoFCaught);

var convertCtoFCaught = convertCtoF(45);
console.log(convertCtoFCaught);

var convertCtoFCaught = convertCtoF(19);
console.log(convertCtoFCaught);

var convertCtoFCaught = convertCtoF(0);
console.log(convertCtoFCaught);

var convertCtoFCaught = convertCtoF(-7);
console.log(convertCtoFCaught);

var convertCtoFCaught = convertCtoF(-40);
console.log(convertCtoFCaught);
