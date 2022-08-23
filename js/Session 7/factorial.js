const factorialVal = (n) => {
    if (n == 2){
        return 2
    }
    return n * factorialVal(n-1)
}

console.log(factorialVal(15));