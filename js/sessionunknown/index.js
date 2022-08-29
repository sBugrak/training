const randomNumber = Math.floor(Math.random() * 101);
let heKnew = false
for (let i = 0; i < 5; i++) {
    userInput = Number(prompt("Please enter your guess: "))
    if (userInput == randomNumber) {
        heKnew = true;
        break;
    }
    else if (userInput < randomNumber) {
        console.log("Please increment your guess");
    }
    else if (userInput > randomNumber) {
        console.log("Please decrement your guess")
    }
}

if (heKnew) {
    console.log("Congrats! You knew the number!");
}
else {
    console.log(`You lose :( the number was ${randomNumber}`)
}


