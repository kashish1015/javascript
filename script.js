function sayhello(){
    alert("hello world!");
}

document.write("This is my first JS webpage!");

document.write("<h1>This is my first JS webpage!</h1>");

var pi=3.14;
var person="are you God";
var answer='yes i am!';

document.write(pi+"<br>");
document.write(person+"<br>");
document.write(answer+"<br>");

function myFunction(){
    var carname="welcome";
    document.getElementById("demo").innerHTML=carname;
}

// let can be reassigned but not redeclared
// const is used for constant values

// undefined values can't bea assigned
// null values can be assigned

var num=10;
console.log(num);
console.log(typeof(num));


var num=false;
console.log(num);
console.log(typeof(num));


var num="D D";
console.log(num);
console.log(typeof(num));


var num=null;
console.log(num);
console.log(typeof(num));

var num=undefined;
console.log(num);
console.log(typeof(num));


var num=[1,2,3];
console.log(num);
console.log(typeof(num));


var p={
    fnme:"dri",
    lname:"dub",
    id:56,


getinfo:function(){
    return this.fname+" "
    +this.lname;
}
};
document.getElementById("demo").innerHTML=p;