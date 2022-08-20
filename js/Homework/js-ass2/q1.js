let studentMarks = [];
let continueProgram = true;
let entryCounter = 0
while (continueProgram) {
    while (true) {
        let tempMark = prompt(`Please enter mark ${entryCounter+1} [Q to Quit]: `);
        if (tempMark === 'q' || tempMark === 'Q') {
            console.log("Have a great day!");
            continueProgram = false;
            break;           
        }
        tempMark = Number(tempMark);
        if (isNaN(tempMark) || tempMark < 0 || tempMark > 100){console.log(`${tempMark} is not a valid mark. Please correct it by entering an integer value from 0 to 100`);}
        else{
            entryCounter++;
            studentMarks.push(tempMark);
            break;
        }
    }
    if (studentMarks.length > 1) {
        let totalVal = 0;
        for (const i of studentMarks) {
            totalVal += i;
            
        }
            console.log(`The average of the given marks is ${totalVal / studentMarks.length}`)
        }
    }