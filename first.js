console.log('Hello World!')
var num = 20
var str = 'Something'
console.log(typeof(str))

var num2 = 15
var num3 = '20'

var test = (num)                  //if i use bracket here this shows boolean result
var test2 = (num === num3)
var test3 = (num == num3)       // and this shows wrong result
console.log(test)
console.log(test2)
console.log(test3)


var myName = 'Najmul'
var yourName = 'Something'

if (yourName = str){
    console.log('Your Data Type is "' +   typeof(yourName) + '"')
}
else if(yourName === num3){
    console.log('Your are something else')
}