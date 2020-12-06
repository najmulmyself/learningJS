var arr = [1 , 3 , 5 ,7]

var newArr = arr.map(function (value){
    return value * 2
}
)
console.log(newArr)

//Let's See how it works
var newArr = []
for ( var i = 0; i < arr.length; i++){
    var temp = arr[i] * 2
    newArr.push(temp)
}
console.log(newArr)

//if i apply this in a function it would be

function myMap(arr){
    var newArr = []
    for ( var i = 0; i < arr.length; i++){
        var temp = arr[i] * 2
        newArr.push(temp)
}
return newArr
}

console.log(myMap(arr))

//But this map Function is very specific. 
//If i want another result this won't work
//for this we can call a callback function to  generate the processing option to the user

function newMap(parr , cb) {
    var newArr = []
    for(var i = 0; i < arr.length ; i ++) {
        var temp = cb(arr[i])
        newArr.push(temp)
    }
    return newArr
}

console.log(newMap(arr, function(value){
    return value * value * value
}))
console.log(newMap(arr, function(bb){
    return bb + 10
}))