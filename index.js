//1. What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.

// In JavaScript, array methods can be divided into two categories: mutating and non-mutating. Mutating array methods are those that modify the original array, while non-mutating array methods return a new array without modifying the original one.

// Here are five array methods that fall under each category:

// Mutating Array Methods:
// push() 
// pop()
// splice()
// reverse()
// sort() 

// Non-Mutating Array Methods:
// slice() 
// concat()  
// filter()   
// map() 
// reduce() 


//2. Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
//i. Add ‘Kotlin’ to the end of the array
//ii. Add ‘Java’ after ‘Ruby’
//iii. Remove the first item in the array
//iv. Add ’Scala’ and ‘Swift’ to the beginning of the array
//v. Replace ‘PHP’ with ‘Go’ and ‘Rust’v

// let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// // Add 'Kotlin' to the end of the array
// languages.push('Kotlin');

// // Add 'Java' after 'Ruby'
// languages.splice(3, 0, 'Java');

// // Remove the first item in the array
// languages.shift();

// // Add 'Scala' and 'Swift' to the beginning of the array
// languages.unshift('Scala', 'Swift');

// // Replace 'PHP' with 'Go' and 'Rust'
// languages.splice(2, 1, 'Go', 'Rust');


//3. What will be the value of fruit after calling the function changeFruit?
// let fruit = ['apple', 'mango', 'banana'];
// 		function changeFruit( fruit ) {
//     			fruit[2] = "orange";
//     			return fruit;
// 		}

//New value of fruit =  ['apple', 'mango', 'orange']


//4. Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
//e.g., max([4, 5, 10, -2]) // maximum value is 10

// function max(arr) {
//     let maximumVal = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > maximumVal) {
//         maximumVal = arr[i];
//       }
//     }
//     return maximumVal;
//   }
  

//5. Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
//e.g.,
//  valTimesIndex([1,2,3]) // [0,2,6]
// 		valTimesIndex([5,10,15]) // [0,10,30]

// function valTimesIndex(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       result.push(arr[i] * i);
//     }
//     return result;
//   }
  