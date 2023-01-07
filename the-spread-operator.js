/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator

let arr1 = [1,2,3];
let arr2 = arr1;
arr1.push(4);

console.log("Second array:", arr2);
console.log("First array:", arr1);

// Copying an array

let arr3 = [4, 5, 6];
let arr4 = [...arr3]; // this keeps the legit copy of it.

arr4.push(7);
console.log("Third array:", arr3);
console.log("Fourth array:", arr4); 

//on this case the number 7 will only add to the arr4 not modifying arr3
//on the contrary of previous example 

// Copying an object
let obj1 = { a: 1, b: 2, c:  3 };
let obj2 = { ...obj1, d: 4 };
let obj3 = { ...obj1, b: 5};

console.log('First Object:', obj1);
console.log('second Object:', obj2);
console.log('Third Object', obj3);


// Copying only part of an array/object

let arr5 = [...arr1, { ...ob1}, ...arr3, "x", "y", "z"];
console.log(arr5)
