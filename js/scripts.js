//add
var add = function(number1, number2) {
  return number1 + number2;
};
//subtract
var subtract = function(number1, number2) {
  return number1 - number2;
};
//divide
var divide = function(number1, number2) {
  return number1 / number2;
};
//multiply
var multiply = function(number1, number2) {
  return number1 * number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = multiply(number1, number2);
alert(result);
