// alert ("Connected!");

// Create a function that searches for the index of a given item in an array. 
// If the item is present, it should return the index, otherwise, it should return -1.

let array = [1, 2, 3 , 4, 5, "New", "Array"];
let index;

let input = prompt ("Specify the index element so I can check for its value in the array");


function searchIndex (index) {
    console.log (array);
    let i = 0; 
    while (i <= array.length) {
        console.log (`Index of the ${array[i]} is ${i}`);
        i++;
    }

    if(typeof(input) === "String") {
    console.log(`Index number of requested element is ${array.indexOf(input)}`);
    }   
    else if (typeof(input) !== "String") {
        let parseInput = parseInt (input);
        console.log(`Index number of requested element is ${array.indexOf(parseInput)}`);
    }
    return index;
}

searchIndex(index);