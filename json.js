// Example of Regular Expression for validating email
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

// Test some email inputs
const email1 = "test@example.com";
const email2 = "invalid-email.com";

// Function to validate email using regex
function validateEmail(email) {
  if (emailRegex.test(email)) {
    console.log(`${email} is a valid email.`);
  } else {
    console.log(`${email} is an invalid email.`);
  }
}

validateEmail(email1); // test@example.com is a valid email.
validateEmail(email2); // invalid-email.com is an invalid email.
