// '#JS' 

/*Excercise #1
Write a JavaScript program that will calculate area of Circle
area = π * r2*/

let pi = 3.14;
let r = 5;
let area = pi * r * r;

alert (`The area of circle that has ${r} is ${area}`);

/*Excercise #2
Write a JavaScript program that will calculate the price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%.*/

let totalPrice;
let phoneUnit = 119.95;
let taxRate = 0.05;

/*If the tax rate needs to be calculated on the 30 items, then the formula would be as the one presented below*/
totalPrice = (30*phoneUnit)+ (phoneUnit*taxRate);
console.log (`Total price of 30 phones is ${totalPrice}`);

/*If the tax rate needs to be calculated on each item separately, then the formula would be as the one presented below*/
totalPrice = (30*phoneUnit)+ 30*(phoneUnit*taxRate);
console.log (`Total price of 30 phones is ${totalPrice}`);
