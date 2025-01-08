// Reference to the output div
const output = document.getElementById('output');

// Generate a random number
document.getElementById('randomNumberBtn').addEventListener('click', () => {
    const randomNum = Math.random(); // Generates a number between 0 and 1
    output.innerHTML = `Random Number (0 to 1): ${randomNum.toFixed(4)}<br>
                       Random Number (1 to 100): ${Math.floor(randomNum * 100) + 1}`;
});

// Show the current date and time
document.getElementById('currentDateTimeBtn').addEventListener('click', () => {
    const now = new Date();
    output.innerHTML = `Current Date and Time: ${now.toLocaleString()}<br>
                      Year: ${now.getFullYear()}<br>
                      Month: ${now.getMonth() + 1} (1-indexed)<br>
                      Day: ${now.getDate()}<br>
                      Time: ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
});

// Perform a math calculation
document.getElementById('mathCalculationBtn').addEventListener('click', () => {
    const num = 16;
    const squareRoot = Math.sqrt(num);
    const power = Math.pow(num, 2);
    const randomNum = Math.random();
    output.innerHTML = `Number: ${num}<br>
                      Square Root: ${squareRoot}<br>
                      Square (Power of 2): ${power}<br>
                      Random Multiplied: ${(randomNum * num).toFixed(2)}`;
});
