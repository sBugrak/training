
// Volume of a cylinder

// const r = Number(prompt("Please enter the radius of the cylinder"));
// const h = Number(prompt("Please enter the height of the cylinder"));

// const volumeCalc = (r, h) => Math.PI * r * r * h;

// console.log(`${r}, ${h} => Volume: ${volumeCalc(r, h).toExponential()}`);
// console.log(`${r}, ${h} => Volume: ${volumeCalc(r, h).toFixed(2)}`);


// Age calculation

const givenYear = Number(prompt("Enter your birthyear: "));
const ageCalc = (date) => {
    const age = new Date().getFullYear() - date;
    return age;
}

console.log("Your age: " + ageCalc(givenYear));