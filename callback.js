// Callback means a function which will run in another function

// That means if i create two function then if i want i will call first function into a second one

// for example

function greet(){
    console.log('I will call in another Function')
}

function testFunc(callback){
// i can take parameter name whatever i want
    callback()
}

testFunc(greet)


// Another Example

function add(a , b){
    return a + b
}

function substract(a , b){
    return a - b
}

function action(num1 , num2, callback){
    return callback(num1 , num2)
}

console.log(action(5, 4, substract))