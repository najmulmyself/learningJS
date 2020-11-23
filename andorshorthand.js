var name = ''

// If name variable contains nothings then it's value is false.
var fullName = name || 'Mr X'
// Name is false so that fullname go for checking next logic which returns the value "true"
console.log(fullName)

var num = true
//if num contains a false value then all the operation going false because in and operation something is zero means the result is false
num && console.log('Something is There')