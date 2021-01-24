// alert ("Connected!");

// Create a function that takes an number and creates array with all numbers till that number.

let inputNumber = 5; 
let arraay = [];

function printArray (arraay) {
   let i = 0;
   while (i <= inputNumber) {
    arraay.push(i);
    i++;
    console.log (arraay);
   }
   return arraay;
}

printArray (arraay);
