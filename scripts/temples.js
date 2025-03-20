//Code for footer:
// Select the id for copyright year
const year = document.querySelector("#currentyear");
// Use the date object
const today = new Date();
//Output for Copyright Year
currentyear.innerHTML = `<span id="currentyear">${today.getFullYear()}</span>`;
//Last Modified 
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

//Code for hamburger menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.header-menu');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});