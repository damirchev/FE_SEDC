// alert ("Connected!");

// Write a function to reverse an array.

let arr = [1, 2, 3, 4, 'Hello', 'World', 'Reverse']; 
let reverseArr = []; 

function reverseAct (reverseArr) {
    let i = 0; 
    let j = arr.length - 1;
    console.log (arr);

    while (i <= arr.length) {
        reverseArr[i] = arr[j];
        i++;
        j--;
        console.log (reverseArr);
    }
    return reverseArr;
}

reverseAct (reverseArr);

// Alternative approach would be to use built-in JS method

function reverseMethod (reverseArr) {
    arr.reverse();
    console.log (reverseArr);
    return reverseArr;
}

reverseMethod(reverseArr);

// In both instances there is one extra element - undefined, why is that the case? 
