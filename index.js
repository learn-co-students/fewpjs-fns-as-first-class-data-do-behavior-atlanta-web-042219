/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(rawData) {
  const parsedData = parseInt(rawData, 10);
  if (parsedData <= 12) {
    return "Good Morning";
  } if (parsedData > 12 && parsedData < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.getElementById('greeting').innerText = string;
}