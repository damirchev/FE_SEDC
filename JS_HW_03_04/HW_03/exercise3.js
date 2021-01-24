// alert ("Connected");

let inputYear = prompt ('What is your year of birth?');
let yearOfBirth = parseInt (inputYear);

//static value for current year
function calculateAge (birthYear, currentYear) {
    let result = currentYear - yearOfBirth;
    console.log (`If the year is ${currentYear}, you are ${result} years old`)
}

calculateAge (yearOfBirth, 2021);
calculateAge(yearOfBirth, 2020);
calculateAge(yearOfBirth, 2019);

// dynamic value for current year
// make sure to define today using the Date object (The Date() constructor creates a Date object which sets the current date and time depend on the browser’s time zone.), so year value can be used with getFullYear method
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
let today = new Date ();
let currentYear = today.getFullYear ();

function calculateAge (birthYear, currentYear) {
    let result = currentYear - yearOfBirth;
    console.log (`If the year is ${currentYear}, you are ${result} years old`)
}

calculateAge (yearOfBirth, currentYear);
