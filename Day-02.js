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
// Accessing:
// 2 types of Accessing are there
// 1. Method (.)DOT method (commonly used)
// 2. Box Method
// Syntax: console.log(objectname["keyname"]);
// This method is help ful when you wanted to print the key value pair 
// using for-in loop


// for-in loop
// it is a uni-directional loop
// it will move in the forward direction only
// It is applicable to key:value pair Objects
// Syntax: for(var key in Object){}
// for(var i in stuname){
// console.log(stuname[i]);
// }
// Array of Objects
var res = [{name:"john doe",age:23},{name:"mary",age:24}]
// Syntax: arrayname[indexnumber].keyname
console.log(res[0].age);
console.log(res[1].name);
for(var i=0;i<res.length;i++){
// Store each Objects in a variable ar obj = res[i];
console.log(res[i].name,res[i].age);
}


// Copy by value
// Copy By reference


// Copy By value are Applicable to the Primitive  Data types
var a =32
var b = 33
var a = 576
console.log(a);
console.log(b);

// Copy By reference are Applicable to the Complex Data types
var arr = [12,134,14];
var arr1 = arr;
arr1[2] = 145
console.log(arr);
