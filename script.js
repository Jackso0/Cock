const digitElements = document.querySelectorAll(".digit img");

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const time = hours + minutes + seconds; // Combine into a single string (e.g., "052224")

  digitElements.forEach((digitElement, index) => {
    const newDigit = time[index]; // Get the digit for this position
    digitElement.src = `images/${newDigit}.png`; // Update the image
  });
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display the clock immediately