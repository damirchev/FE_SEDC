// alert ("Connected!");

let arr = [3, 5, 6, 8, 11,55,12,222,0];
let min = Infinity;
let max = - Infinity;
let i = 0;
let sum;

while (i < arr.length) {
    let element = arr[i]; 

    if (element > max) {
        max = element;
    }

    if (element < min) {
        min = element;
    }

    i++;
}
console.log (`The minimum number in the array ${arr} is ${min} and maximum ${max}`);
sum = min + max;
console.log (`Summary of those two numbers is ${sum}`);
