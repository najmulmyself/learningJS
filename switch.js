var todayDate = new Date()
console.log(todayDate)
var newDate = todayDate.getDay()
// console.log(newDate)

switch(newDate){
    case 0:
        console.log('Sunday')
        break
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thrusday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Satarday')
        break
    default: console.log('This is not a Default Value')
}