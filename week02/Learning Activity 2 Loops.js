const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// Write a for loop that will iterate throught the studentReport array and print to the console the current array value if it is below 30.
for (let i = 0; i <= studentReport.length, i++;) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

//Repeat the previous programming snippet by using a while loop.
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

//Repeat the previous programming snippet by using a forEach loop.
studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
});

//Repeat the previous programming snippet by using a for...in loop.
for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

//Use any type of repetition (looping) statement to dynamically produce the day names (Monday, Tuesday, Wendesday, etc.) of the next number of DAYS from today's date.
const n = 6; //number of days forward
//get output location on document to append within list
const output = document.getElementsByTagName("ul");
//Intl.DateTimeFormat Options
const options = { weekday: 'long' }; //vs. short, etc.

//BEGIN
const today = new Date();
//TODAY
let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);
document.getElementById('today').innerHTML = 'Today is ${todaystring}.';

//next n days
for (let i = 1; i <= n; i++) {
    let nextday = new Date();
    nextday.setDate(today.getDate() + i);
    let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
    item = document.createElement("li"); //list item
    item.textContent = nextdaystring;
    output[0].sppendChild(item);
}
