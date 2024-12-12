// function sayhello(){
//     alert("hello world!");
// }

// // document.write("This is my first JS webpage!");

// // document.write("<h1>This is my first JS webpage!</h1>");

// var pi=3.14;
// var person="are you God";
// var answer='yes i am!';

// document.write(pi+"<br>");
// document.write(person+"<br>");
// document.write(answer+"<br>");

// function myFunction(){
//     var carname="welcome";
//     document.getElementById("demo").innerHTML=carname;
// }

// // let can be reassigned but not redeclared
// // const is used for constant values

// // undefined values can't bea assigned
// // null values can be assigned

// var num=10;
// console.log(num);
// console.log(typeof(num));


// var num=false;
// console.log(num);
// console.log(typeof(num));


// var num="D D";
// console.log(num);
// console.log(typeof(num));


// var num=null;
// console.log(num);
// console.log(typeof(num));

// var num=undefined;
// console.log(num);
// console.log(typeof(num));


// var num=[1,2,3];
// console.log(num);
// console.log(typeof(num));


// var p={
//     fnme:"dri",
//     lname:"dub",
//     id:56,


// getinfo:function(){
//     return this.fname+" "
//     +this.lname;
// }
// };
// let result=document.getElementById("demo").innerHTML=personalbar.getinfo();
// document.write(result);

// var person2=new Object();
// person2.name='krishnkant';
// person2.age=32;
// person2.isMarried=true;
// person2.address={};
// person2.address.street="nagar road";
// person2['address']['flatNo']=33;
// console.log(person2);
// document.write(person2.name);

// function myFunction(){
//     var carName="Volvo";
//     document.getElementById("demo1").innerHTML=typeof carName + " "+carName;
// }
// myFunction();
// document.getElementById("demo2").innerHTML=typeof carName

// var locales={
//     europe:function(){
//         var myFriend="Monique";
//         var france=function(){
//             var paris=function(){
//                 console.log(myFriend);
//             };
//             paris();
//         };
//         france();
//     }
// };
// locales.europe();

// function show(){
//     var a="a is a local outer variable";
//     document.write(a+"<br>");

//     function disk(){
//         var b="b is a local inner variable";
//         document.write(b+"<br>");
//     }
//     disk();
// }
// show();

// var myVar="global";
// function check(){
//     var myVar="local";
//     document.write(myVar);
// }
// check();

// var n='John';
// function first(){
//     var a='hello!';
//     second();
//     var x= a+ n;
//     console.log(x);
// }
// function second(){
//     var b='hi!';
//     third();
//     var z= b + n;
//     console.log(z);
// }
// function third(){
//     var c='hey!';
//     var z= c + n;
//     console.log(z);
// }
// first();

var age=20;
if(age>18){
    document.write("<b>You are eligible to cast the vote</b>");
}