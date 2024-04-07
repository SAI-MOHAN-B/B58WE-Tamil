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
