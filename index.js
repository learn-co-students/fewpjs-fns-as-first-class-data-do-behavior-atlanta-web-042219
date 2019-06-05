/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(string){
  const hours = parseInt(string, 10)
  
  if ( hours < 12) return "Good Morning"
  if ( hours > 17) return "Good Evening"
  return "Good Afternoon"
}

function displayMessage(string){
  document.getElementById("greeting").innerText = string;
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
