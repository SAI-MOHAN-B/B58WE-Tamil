var arr = [12,13,"bool","hello guvi", 45.67,true]
// An array Index always starts with 0
// It can be used to store the elements with the Multiple data types


// Accessing the array elements
//Syntax:arrayname[indexnumber]
console.log(arr[3]);

// To Print the array Elements
//using of for loop
for(var i=0;i<arr.length;i++){
console.log(arr[i]);
}
// How to add an Array elements
// Using Push
// Syntax: arrayname.push(elements)
console.log(arr.push(567));


//How to update the array elements??
// Syntax: arrayname[indexnum]=element
arr[2] = "guvi"
console.log(arr);


// Objects:
// An Objects is a key:value pair Structure
// Syntax: var objectname = {key:value}


// Ex:1 Details of the Student
var stuname = {
  name:"john doe",
  age:23,
  year:2018
}
// Accessing:
// 2 types of Accessing are there

// 1. Method (.)DOT method (commonly used)
// 2. Box Method


//1 DOT method
// Syntax: objectname.keyname
console.log(stuname.name)

// Create a new key:value pair...
// Syntax:objectname.keyname = value
stuname.gender = "male"
console.log(stuname)
// Update
// Syntax:objectname.keyname = value
stuname.name = "mary"

// delete
// Syntax: delete objectname.keyname
delete stuname.age
console.log(stuname)
