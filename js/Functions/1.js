function oddEven(givenNum) {
    result = givenNum%2===0 ? "Even" : "Odd";
    return result
}

let userInput = window.prompt("Please enter a number: ")
console.log(oddEven(Number(userInput)))
