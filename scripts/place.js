// Select the id for copyright year
const year = document.querySelector("#currentyear");

// Use the date object
const today = new Date();

//Output for Copyright Year
currentyear.innerHTML = `<span id="currentyear">${today.getFullYear()}</span>`;

//Last Modified 
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;



//Constants for Weather Variables besides wind chill
const temperature = 10;
const conditions = "Partly Cloudy";
const wind = 6;

//Insert Weather Variables into text
const temperaturePlaceholder = document.getElementById('temperature');
const conditionsPlaceholder = document.getElementById('conditions');
const windPlaceholder = document.getElementById('wind');

temperaturePlaceholder.innerHTML = temperaturePlaceholder.innerHTML.replace('temperature-placeholder', String(temperature));
conditionsPlaceholder.innerHTML = conditionsPlaceholder.innerHTML.replace('conditions-placeholder', conditions);
windPlaceholder.innerHTML = windPlaceholder.innerHTML.replace('wind-placeholder', String(wind));



//Function to calculate wind chill, rounded to the nearest integer
function windChillCalculation(temp, windSpeed) {
    return Math.round(13.12 + 0.6215 * temp - 11.37 * (windSpeed ** 0.16) + 0.3965 * temp * (windSpeed ** 0.16))
}

//If statement to determine wind chill (NA or value calculated using the formula)
if (temperature <= 10 && wind > 4.8) {
    windChill = String(windChillCalculation(temperature, wind));
} else {
    windChill = "NA";
}

//Insert wind chill into text
const windChillPlaceholder = document.getElementById('wind-chill');

windChillPlaceholder.innerHTML = windChillPlaceholder.innerHTML.replace('wind-chill-placeholder', windChill);