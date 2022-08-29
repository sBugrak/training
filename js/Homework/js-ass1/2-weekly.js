let userContinue = true
do {
let userInput = prompt("Give me the day (Q to quit): ");

switch (userInput.toLowerCase()) {
    case "pazartesi":
    case "salı":
    case "çarşamba":
    case "perşembe":
        console.log("InClass");
        break;

    case "cuma":
        console.log("Teamwork");
        break;
    case "cumartesi":
        console.log("InClass + Workshop");
        break;
    case "pazar":
        console.log("Self-Study");
        break;
    case "q":
        console.log("Have a great day!")
        userContinue = false;
        break;

    default:
        console.log("Please give me a valid value!");
        break;
}
} while (userContinue);