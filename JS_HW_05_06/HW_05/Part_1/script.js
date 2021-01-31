// '#JS' 
// alert ("Connected!");

// Part 1: Change the text of all paragraphs and headers with javascript

let listDivs = document.getElementsByTagName ("div");
console.log (listDivs);

// First Div element
let firstDivEl = document.getElementById ("first");
console.log (firstDivEl);
let firstHeader = document.getElementById("myTitle").innerText = "First element from the Div with ID FIRST updated from JS"; 
let firstParagraph = document.getElementsByClassName("paragraph")[0].innerText = "First paragraph from the Div updated from JS";
console.log (firstParagraph);

// Second Div element
let secondDivElement = document.getElementsByClassName ("anotherDiv");
let secondPar = document.getElementsByClassName("second")[0].innerText = "Update to the second Div element from JS";
let TxtEl = document.getElementsByTagName ("text")[0].innerText = "Another text element updated";

// Update the last div, as there is no ID/Class attribute
for (let i = 0; i <= listDivs.length; i++) {
    if ( i == listDivs.length-1) {
        let lastDivEl = listDivs[i]; 
        console.log (lastDivEl);
        let listH1Element = lastDivEl.getElementsByTagName ("h1")[0];
        listH1Element.innerText = "Header 1 updated from JS!"
        let listH3Element = lastDivEl.getElementsByTagName ("h3")[0];
        listH3Element.innerText = "Header 3 updated from JS!";
        // console.log (listDivElements);
    }
    else {
        console.log ('continue');
    }
}


