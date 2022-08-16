const minimumVage = 5500;
let userIncome;
let userExpenditure;

while (true) {
    userIncome = parseInt(prompt("Please enter your income: "));
        if (!isNaN(userIncome)) {
        break;
    } 
    else {
        console.log("Please enter a valid value.");
    }
}

while (true) {
    userExpenditure = parseInt(prompt("Please enter your expenditure: "));
        if (!isNaN(userExpenditure)) {
        break;
    } 
    else {
        console.log("Please enter a valid value.");
    }
}

console.log(`You ${(userIncome - userExpenditure) > minimumVage ? "can" : "can't"} take loan.`)