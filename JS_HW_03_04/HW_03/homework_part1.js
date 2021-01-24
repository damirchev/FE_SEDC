// alert ("connected!");

/*Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. 
Try to call the functions 5 times for 5 different types:
object
boolean
number
string
undefined
*/

//provided solution is with static input values
function getParam (inputVal) {
    let typeVal = typeof(inputVal); 
    if (typeVal === "object") {
        console.log (`The input value is of type Object`)
    }
    else if (typeVal === "boolean") {
        console.log (`The input value is of type Boolean`)
    }
    else if (typeVal === "number") {
        console.log (`The input value is of type Number`)
    }
    else if (typeVal === "string") {
        console.log (`The input value is of type String`)
    }   
    else if (typeVal === "undefined") {
        console.log (`The input value is of type undefined`)
    }
    else {
        console.log ("Can`t tell!")
    }
}

getParam (null);
getParam (true);
getParam (1234);
getParam ("Hello there!");
getParam();