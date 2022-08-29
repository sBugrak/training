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
            console.log("This is not a valid operator, please enter a valid one.")
            return null;
    }
}

let continueCalc = true;

do {

    let num1 = parseInt(prompt("Num1: "));
    let calcKey = prompt("Operator: ");
    let num2 = parseInt(prompt("Num2: "));

    let calcResult = calculator(num1, num2, calcKey)
    if (!isNaN(calcResult)) {
        console.log(`Result is ${calcResult}`);
    } else {
        console.log("One or more of your value(s) is/are not a number. Please enter integer values")
    }

    while (true) {
    let decideContinue = prompt("Do you want to continue? [Y/n] ");
    if (decideContinue === "N" || decideContinue === "n") {
        continueCalc = false;
        break;
    } else if (decideContinue === "y" || decideContinue === "Y"){
        break;
    } else if (decideContinue === "") {
        break;
    } else{
        console.log("Please enter a valid value!");
    }
}

} while (continueCalc);