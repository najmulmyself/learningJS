function add(a,b){
    return a + b
}

// If i store a function into a variable this is called Expression

var addition = function add(a,b){
    return a + b
}

// And When an Expression Called we must invoke in the name of variable not function name
// Even We can Escape The name of the function when we use Expression . Then this will be Annonymous function

addition(30,40)