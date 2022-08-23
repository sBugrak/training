const fibo = (n) => {
    let num1 = 1, num2 = 1, addedVal = 0;
    let fibSequence = [];
    for (let i = 0; i < n; i++) {
        fibSequence.push(num1);
        addedVal = num1 + num2;
        num1 = num2;
        num2 = addedVal;
    }

    return fibSequence
}
let n = window.prompt("Please enter a value: ")
console.log(`Fibonacci(${n})= ${fibo(n)} `)