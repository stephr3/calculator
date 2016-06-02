// Business Logic
var add = function(number1, number2) {
  return number1 + number2;
};

var sub = function(number1, number2) {
  return number1 - number2;
};

var mult = function(number1, number2) {
  return number1 * number2;
};

var div = function(number1, number2) {
  return number1 / number2;
};

var mod = function(number1, number2) {
  return number1 % number2;
};

// User Interface
$(document).ready(function() {
  $("form#calculate").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    if (operator === "add"){
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = sub(number1, number2);
    } else if (operator === "multiply") {
      result = mult(number1, number2);
    }else if (operator === "divide") {
      result = div(number1, number2);
    }else if (operator === "remainder") {
      result = mod(number1, number2);
    }
    $("#output").text(result);
    $("#output").show();
  });
});
