let num1 = 123;
let str = String(num); // "123"
console.log(typeof str); // "string"

let bool = true;
let st1 = bool.toString(); // "true"

let st3 = "123";
let num = Number(str); // 123

let st2 = "123.45";
let intNum = parseInt(str, 10); // 123

let st = "123.45";
let floatNum = parseFloat(str); // 123.45

let value = 0;
let boolean = Boolean(value); // false

let string = "hello";
let arr = Array.from(str); // ['h', 'e', 'l', 'l', 'o']


let obj = { name: "John", age: 30 };
let jsonStr = JSON.stringify(obj); // '{"name":"John","age":30}'
