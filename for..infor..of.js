// Example of using "for...in" with an object
const person = {
    name: "Alice",
    age: 30,
    profession: "Engineer"
  };
  
  console.log("Using for...in loop:");
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  
  // Example of using "for...of" with an array
  const fruits = ["Apple", "Banana", "Cherry", "Date"];
  
  console.log("\nUsing for...of loop:");
  for (let fruit of fruits) {
    console.log(fruit);
  }
  
  // Example of using "for...in" with an array (index keys)
  console.log("\nUsing for...in loop with an array:");
  for (let index in fruits) {
    console.log(`Index ${index}: ${fruits[index]}`);
  }
  