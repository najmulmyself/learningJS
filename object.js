var obj = {
    name : 'XYZ' ,
    job : 'Student',
    salary : 'None'
}

obj.Age =20 // insert data property  & value (Dot Notation) [we cant use : to insert something in this way]

console.log(obj)

// We can Traverse all data in two way
// DOT NOTATION

console.log(obj.job)

// ARRAY NOTATION

console.log(obj['name']) //When we use array notation we must use colon to access data

// Array notation accept string thats why we can declar a variable and call them into 

var show = 'name'
// // we can't use dot notation this way. this will be undefined

console.log(obj.show)

// we must use array notation because this accept string method

console.log(obj[show])