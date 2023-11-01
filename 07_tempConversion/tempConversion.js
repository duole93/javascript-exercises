const convertToCelsius = function(fahrenheit) {
 // return Number(((fahrenheit-32)/1.8).toFixed(1));
 return Math.round((fahrenheit-32)/1.8*10)/10;
};

const convertToFahrenheit = function(celsius) {
  //return fahrenheit=Number((celsius*1.8+32).toFixed(1));
  return Math.round((celsius*1.8+32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
