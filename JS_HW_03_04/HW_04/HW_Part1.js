// alert ("Connected");

/*Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, 
and will add the "\n" new line after every even number otherwise it will add " " empty space. */

let num = 0;
let array = [];

while (num < 20) {
    num += 1;
    if (num % 2 !== 0) {
        
        console.log (num + " ");
    }
    else {
        console.log (num + "\n");
    }
    
}