// Importing a Library
import MathLibrary from './mathLibrary.js';

// Creating Arrays
let numbers = [10, 20, 30, 40, 50];

// Using Array Methods
let doubled = numbers.map(num => MathLibrary.multiply(num, 2));
console.log(doubled); // Output: [20, 40, 60, 80, 100]

// Filtering Even Numbers
let evens = doubled.filter(num => num % 2 === 0);
console.log(evens); // Output: [20, 40, 60, 80, 100]
