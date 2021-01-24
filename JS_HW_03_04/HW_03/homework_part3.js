// alert ("Connected?");

/*Write a function for an ATM:
The ATM should give cash
Should return "Not enough money" if you request more money
Should return the ammount withdrawn and money left on the account if you have enough
Note: Hardcode your account money in the program
Bonus: Make it work with prompt()!
*/

let cashVal = prompt ('How much money would you like to withdraw from your account?');
let cash = parseInt(cashVal);
let accountBalance = 500; 
let newBalance;

function ATM (cash, newBalance) {
    if (cash <= accountBalance) {
        console.log (`Requested ${cash} amount is being paid out to you. Please wait!`);
        newBalance = accountBalance - cash;
        console.log (`Your current balance is ${newBalance}`);
        return cash, newBalance;
    }
    else {
        console.log (`Requested amount: ${cash} exceeds your available balance: ${accountBalance}`);
    }
}

ATM(cash, newBalance);