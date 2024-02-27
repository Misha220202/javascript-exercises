const convertToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);
  if (!Number.isInteger(celsius)) celsius = Number(celsius.toFixed(1));
  return (celsius);
};

const convertToFahrenheit = function (celsius) {
  let fahrenheit = celsius * 9 / 5 + 32;
  if (!Number.isInteger(fahrenheit)) fahrenheit = Number(fahrenheit.toFixed(1));
  return (fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
