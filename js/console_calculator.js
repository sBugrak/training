const prompt = require("prompt-sync")({ sigint: true });



function calculator(value1, value2, calcKey) {
    switch (calcKey) {
        case "+":
            let resAddition = value1 + value2;
            return resAddition;

        case "-":
            let resSubtraction = value1 - value2;
            return resSubtraction;

        case "*":
            let resMultiplication = value1 * value2;
            return resMultiplication

        case "/":
            let resDivision = value1 / value2;
            return resDivision;

        default:
            console.log("This is not a valid key, please enter a valid one.")
            return null;
    }
}

let continueCalc = true;

do {

    let num1 = parseInt(prompt("Num1: "));
    let calcKey = prompt("Key: ");
    let num2 = parseInt(prompt("Num2: "));

    let calcResult = calculator(num1, num2, calcKey)
    if (!isNaN(calcResult)) {
        console.log(`Result is ${calcResult}`);
    } else {
        console.log("One or more of your value(s) is/are not a number. Please enter integer values")
    }

    let decideContinue = prompt("Do you want to continue? [y/N] ");
    if (decideContinue === "Y" || decideContinue === "y") {
        continue;
    } else {
        continueCalc = false;
    }

} while (continueCalc);