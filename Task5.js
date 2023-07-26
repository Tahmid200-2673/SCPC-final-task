// Task 5: Implement a simple JavaScript calculate. The calculate should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculate(num1, num2, operator) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  }

console.log(calculate(10, 5, "+")); 
console.log(calculate(10, 5, "-")); 
console.log(calculate(10, 5, "*")); 
console.log(calculate(10, 5, "/")); 

