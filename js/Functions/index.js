var readline = require('readline-sync');


function stairwaysToHeaven(width, height) {
    let stepCount = '#'.repeat(width+1);
    console.log(stepCount.padStart(height));
    
}

let stairheight = readline.question("Max width: ");
for (let i = 0; i < stairheight; i++) {
    stairwaysToHeaven(i, stairheight);
}