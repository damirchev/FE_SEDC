// alert("Connected?!");

// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years

let inputValue = prompt ('What is your age?');
let ageVal = parseInt (inputValue);

function toDogAge (age) {
    let dogAge = ageVal * 7;
    console.log (dogAge);
    let humanAge = dogAge / 7;
    console.log (humanAge);
    return dogAge, humanAge;
}

toDogAge (ageVal);