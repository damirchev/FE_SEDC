// alert ("Connected");

let firstNames = ["Darko", "Petar", "Maja", "Jovan", "Aleksandar"];
let lastNames = ["Mirche", "Petkov", "Deov", "Jovanov", "Mitkov"];

let fullNames = []; 

if (firstNames.length == lastNames.length) { 
    let i = 0;
    while ( i < firstNames.length) {
        
        fullNames[fullNames.length] = i + "." + " " + firstNames[i] + " " + lastNames[i];
       
        console.log (fullNames[i]);
        i++;
        
    }
}
else {
    console.log("The arrays are different");
}

console.log (fullNames);