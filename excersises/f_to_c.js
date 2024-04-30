"use strict";

function convertFtoC(fahrenheitTemperature) {
  var celsiusTempature = ((fahrenheitTemperature - 32) * 5) / 9;
  return celsiusTempature;
}

var convertFtoCCaught = convertFtoC(212);
console.log(convertFtoCCaught);

var convertFtoCCaught = convertFtoC(90);
console.log(convertFtoCCaught);

var convertFtoCCaught = convertFtoC(72);
console.log(convertFtoCCaught);

var convertFtoCCaught = convertFtoC(32);
console.log(convertFtoCCaught);

var convertFtoCCaught = convertFtoC(0);
console.log(convertFtoCCaught);

var convertFtoCCaught = convertFtoC(-40);
console.log(convertFtoCCaught);
