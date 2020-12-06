// if a input pass through frist function then its called function composition

function print(inp) {
    console.log(inp)
}

function multiply(value) {
    return value * 4
}

function add(one , two) {
    return one + two
}

// Here i Pass two value in add function which is laid on seceond func. and this is on first 
print(multiply(add(3 , 5)))