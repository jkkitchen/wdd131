//------NEWSLETTER SUBSCRIPTION LOCAL STORAGE-------------

//Define the display element variable
const subscribersDisplay = document.querySelector(".subscribers");

//Get the stored VALUE for the numSubscribers-ls KEY in localStorage, assign 0 if it isn't there
let numSubscribers = Number(window.localStorage.getItem("numSubscribers-ls")) || 0;

//Display the number of subscribers
subscribersDisplay.textContent = numSubscribers + 1;

//Increase the number of subscribers by one
numSubscribers++;

//Store the new total number of subscribers into localStorage
localStorage.setItem("numSubscribers-ls", numSubscribers);
console.log("stored numSubscribers in localStorage:", localStorage.getItem("numSubscribers-ls"));