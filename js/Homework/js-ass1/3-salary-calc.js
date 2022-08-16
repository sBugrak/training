const minimumVage = 5500;
let userSalary;
while (true) {
    userSalary = parseInt(prompt("Please enter your salary: "));
    if (!isNaN(userSalary)) {
        break;
    } 
    else {
        console.log("Please enter a valid value.");
    }
}

if (userSalary <= minimumVage) {
    userSalary = (userSalary / 2) + userSalary;
} else {
    userSalary = (userSalary / 10) + userSalary;
}

console.log(`Your new salary is ${userSalary}`);