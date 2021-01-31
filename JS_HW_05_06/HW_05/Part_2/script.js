// '#JS' 
// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

let arrLength = prompt ("Please define the array length!");
let arrElements = [];

//target the array
let UnorderedList = document.getElementById ("printArray");

//target the summary presentation paragraph
let showResult = document.getElementById ("resultSum");

//target the paragraph that contains the equation
let sumEquation = document.getElementById ("sumEquation");

let summary = 0;
let equationFormula;


function arrayNum (arrElements) {
    let arrLengthNum = parseInt (arrLength);

    for (let i = 0; i <= arrLengthNum; i++) {

        let newListElement = document.createElement ("li");

        let inputElement = prompt ("Now add the elements of the array");

        arrElements[i] = inputElement;

        console.log (inputElement);
        if ( isNaN (inputElement)) {
            alert ("Please enter numberic values!");
        }
        else {
            let value = parseInt(inputElement);
            summary += value;
        }
        

        //take the value for the list and add it to the list
        newListElement.textContent =`${inputElement}`;
        UnorderedList.appendChild(newListElement);

        // If below-presented line is not commented, items are only listed, not presented as the equation
        // equationFormula = arrElements.concat (arrElements[i]);
    }

   

    // console.log (arrElements);
    console.log (summary);
    showResult.innerText = `Summary of the input values is ${summary}`;
    sumEquation.innerText = `Equation for the summary is ${equationFormula}`
}

arrayNum (arrElements);
