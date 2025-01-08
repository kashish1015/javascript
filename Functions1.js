// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  // Calling the function
  console.log(greet("Alice")); // Output: Hello, Alice!
 
// Function Expression
const add = function(a, b) {
    return a + b;
  };
  
  // Calling the function
  console.log(add(3, 5)); // Output: 8

// Arrow Function
const multiply = (a, b) => a * b;

// Calling the function
console.log(multiply(4, 6)); // Output: 24

// Default parameter
function greet(name = "Guest") {
    return `Hello, ${name}!`;
  }
  
  console.log(greet()); // Output: Hello, Guest!
  console.log(greet("Bob")); // Output: Hello, Bob!
  
//rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4)); // Output: 10

// Anonymous Function
setTimeout(function() {
    console.log("This runs after 2 seconds!");
  }, 2000);
  
  // Using Arrow Function
  setTimeout(() => {
    console.log("This also runs after 2 seconds!");
  }, 2000);

//Recursive Functions
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5)); // Output: 120
  
//Higher-Order Functions
function calculate(a, b, operation) {
    return operation(a, b);
  }
  
  const subtract = (x, y) => x - y;
  
  console.log(calculate(10, 5, subtract)); // Output: 5
  console.log(calculate(10, 5, (x, y) => x + y)); // Output: 15
  