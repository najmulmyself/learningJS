var obj = {
    x : 25,
    y : 20,
    z : 3
}
console.log(obj)

console.log('x' in obj)

for (var x in obj){
    // console.log(x)
    console.log(x + ':' + obj[x]) // here x is a variable so that we use array notation to access object property
}

