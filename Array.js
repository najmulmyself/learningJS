
var studentName = ['Rahim','Karim','Motin','Hakim']

console.log(studentName)
console.log(typeof(studentName))

//this is how to add value on array

studentName.push('Mojnu')

console.log(studentName)
console.log(studentName[3])


console.log(studentName.length)


//this item shows how to know a specific value

var aThing = studentName.indexOf('Hakim')
    console.log('This will show a Random number like ' + aThing)

// Array with logic and  Loop

for ( i = 0 ; i < studentName.length ; i++){
    console.log(studentName[i])
    if (i === 3) {
        break
    }
}