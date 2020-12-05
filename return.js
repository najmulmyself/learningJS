function multiply(multiplier){
    return function (x){
        return x * multiplier
    }
}

console.log(multiply(9)(3))

// we can use this by declare two variable

var multiplyResult = multiply(4)
console.log(multiplyResult(4))