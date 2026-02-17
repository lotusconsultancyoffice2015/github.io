// JavaScript functionality for the website

// Function to display the current date and time
function displayDateTime() {
    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toISOString().slice(0, 19).replace('T', ' ');
    console.log(`Current Date and Time (UTC): ${formattedDateTime}`);
}

displayDateTime();