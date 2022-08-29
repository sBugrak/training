let continuePlaying = true;
while (continuePlaying) {
    

const randomNumber = Math.floor(Math.random() * 101);
let heKnew = false
for (let i = 0; i < 5; i++) {
    userInput = Number(prompt("Please enter your guess: "));
    if (userInput == randomNumber) {
        heKnew = true;
        break;
    }
    else if (userInput < randomNumber) {
        console.log(`Increase ${userInput}`);
    }
    else if (userInput > randomNumber) {
        console.log(`Decrease ${userInput}`);
    }
}

if (heKnew) {
    console.log("Congrats! You knew the number!");
}
else {
    console.log(`You lose, the number was ${randomNumber}`);
}

while (true) {
    
    let proposalToPlayer = prompt("Do you want to play again [Y/n]");
    if (proposalToPlayer === "y" || proposalToPlayer === "Y") {
        break;
    }
    else if (proposalToPlayer === "n" || proposalToPlayer === "N"){
        console.log("Have a great day!");
        continuePlaying = false;
        break;
    }
    else{
        console.log("Please enter either 'Y' or 'N'.");
    }
}
}