// Get the current date and time
const now = new Date();
console.log("Current Date and Time:", now);

// Formatting a date
const options = { year: 'numeric', month: 'long', day: 'numeric' };
console.log("Formatted Date:", now.toLocaleDateString('en-US', options));

// Getting individual date components
const year = now.getFullYear();
const month = now.getMonth() + 1; // Months are zero-indexed
const day = now.getDate();
console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);

// Getting time components
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
console.log(`Time: ${hours}:${minutes}:${seconds}`);

// Parsing a date string
const dateString = "2025-01-02T10:00:00Z";
const parsedDate = new Date(dateString);
console.log("Parsed Date:", parsedDate);

// Formatting with Intl.DateTimeFormat
const formatter = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});
console.log("Formatted with Intl:", formatter.format(now));

// Adding days to a date
const futureDate = new Date();
futureDate.setDate(now.getDate() + 10); // Add 10 days
console.log("Date After 10 Days:", futureDate);

// Subtracting days from a date
const pastDate = new Date();
pastDate.setDate(now.getDate() - 10); // Subtract 10 days
console.log("Date 10 Days Ago:", pastDate);

// Custom format function
function formatCustomDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0'); // Ensure 2-digit month
  const d = String(date.getDate()).padStart(2, '0'); // Ensure 2-digit day
  return `${y}-${m}-${d}`;
}
console.log("Custom Formatted Date:", formatCustomDate(now));
