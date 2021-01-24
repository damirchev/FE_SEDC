// alert ("Connected!");
// Write a function to check if an array contains a particular number.

let array = [1, 2, 3 , 4, 5, "New", "Array"];
let index;
let input = prompt ("Enter number so I can check if that value is part of the array");
let valueTrue;
let valueFalse;

function searchNumber (index) {

    if ( typeof(input) === "String" ) {
        console.log(`Please enter a numeric value to be checked in the array!`);
    }   
    else if (typeof(input) !== "String") {
        let parseInput = parseInt (input);
        let i = 0;
        while (i <= array.length) {
            if (parseInput === array[i]) {
                valueTrue = array[i];
                
            }
            i++;
        }
        console.log(`Index number of requested element ${valueTrue} is ${array.indexOf(parseInput)}`);
    }
    return index;
}

searchNumber(index);