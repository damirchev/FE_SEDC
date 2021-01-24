// alert ("Connected!");

// Create a function that takes an array and returns the first element.

let listElements = ["Hello", 2, "World", "New array", true, null];

function firstElement (element) {
    console.log (listElements);

    element = listElements.shift(0);
    console.log (element);

    return element;
}

firstElement ();
// console.log (listElements);