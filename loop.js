//for loop
var count;
document.write("Starting Loop" + "<br />");
for (count = 0; count < 10; count++) {
    document.write("Current Count : " + count);
    document.write("<br />");
}
document.write("Loop stopped!");

//odd even programs
for (var i = 0; i < 100; i++) {
    // check that the number is even
    if (i % 2 == 0) {
        // if we got here, then i is odd.
        console.log(i + " is an even number.");
    }
    else {
        console.log(i + " is an odd number.");
    }
}

//while loop
var count = 0;
document.write("Starting Loop ");

while (count < 10) {
    document.write("Current Count : " + count + "<br />");
    count++;
}

document.write("Loop stopped!");
