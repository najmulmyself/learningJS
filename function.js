/* function add1(a , b) {
    var result = a + b
    console.log(a + b)
}

add1(30,3)
 */
var arr1 = [3 , 4 , 5]
var arr2 = [4 , 4 , 2]
var arr3 = [6 , 7 , 1]


function sumOfArray(arr){
    var sum = 0
    for(var i = 0; i<arr.length;i++) {
        sum += arr[i]
    }
    console.log(sum)
}

sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)


// another method (NOOB)
/* function add(name) {
    var result = name[0] + name[1] + name[2]
    console.log(result)
}

add(arr3) */