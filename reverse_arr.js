var arr = [2,3,6,7,9]
// var arrMax = Math.max(arr.length)
// console.log(arrMax)
// console.log(arr[arrMax-1])
// KUconsole.log(test)
// for(var i = 0; i < arr.length;i++){
//     console.log(arr[i])
//     var two = arr[i]
//     test = arr[i]
//     arrMax--
//     break
// }
// console.log(test)

for( var i = 0; i < (arr.length/2);i++){
    var temp = arr[i]
    arr[i]= arr[arr.length-1-i]
    arr[arr.length-1-i]=temp
}
console.log(arr)