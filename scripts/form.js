//--------PRODUCT ARRAY--------------------------------
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

//Get the select element
const selectElement = document.getElementById("product-selection");

//To prevent getting error for null "appendChild", use if statement
//Loop through the array and create <option> elements
if (selectElement !== null) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.textContent = product.name; //Display the product name
        option.value = product.id; //Use the ID as the value in this "key/value" pair
        selectElement.appendChild(option); //Append to the select menu
    });
}


//---------------review.html page display---------------

//Define the display element variable
const reviewsDisplay = document.querySelector(".reviews");

//Get the stored VALUE for the numReviews-ls KEY in localStorage, assign 0 if it isn't there
let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;


//Display the number of reviews
reviewsDisplay.textContent = numReviews;


//Increase the number of reviews by one
numReviews++;


//Store the new total number of reviews into localStorage
localStorage.setItem("numReviews-ls", numReviews);
console.log("stored numReviews in localStorage:", localStorage.getItem("numReviews-ls"))



//-----------------FOOTER--------------------------------
// Select the id for copyright year
const year = document.querySelector("#currentyear");

// Use the date object
const today = new Date();

//Output for Copyright Year
currentyear.innerHTML = `<span id="currentyear">${today.getFullYear()}</span>`;

//Last Modified 
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;