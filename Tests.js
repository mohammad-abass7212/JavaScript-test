// const arr = [1, 21, 5, 3, 6, 8, 9];
// const result = arr.sort();
// console.log(result);

// const string = " sajad is sajad new is sajad hello sajad again sajad";

// function WordCount(string) {
//   return string.split(" ");
// }

// const data = WordCount("sajad world sajad hello");
// console.log(data, "newarray");

// const givename = (datas) => {
//   let arr = [];
//   datas.map((item) => {
//     if (item == "sajad") {
//       arr.push(item);
//     }
//   });
//   return arr;
// };

// console.log(givename(data));

// ********************************************************

// console.log(arr);

// let some = Array;

// console.log(typeof some);

// let array = [1, 2, 4, 5];

// const newArr = new Array(12, 14, 16);
// console.log(newArr);

// let array1 = [[1,2], [3,4]]

// const inter = (arr) => {
//     arr.map(i => {
//         i.map(it => {
//             if () {

//             }
//         })
//     })
// }
// ****************************************************

// Sort an array without using sort method.

// let array = [90, 80, 30, 12, 10, 2, 8, 6];

// for (let i = 0; i < array.length; i++) {
//   for (let j = i; j < array.length; j++) {
//     if (array[i] > array[j]) {
//       temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//   }
// }
// console.log(array);

// *************************************************************************

// Hoisting

// fnctionname();
// function fnctionname() {
//   console.log(
//     "function can be call before or after the function  it will execute properly "
//   );
// }

// console.log(
//   a,
//   "it will give us undefined because the variable is created after it is executed"
// );
// var a = 10;

// *************************************************************************

// Functions in javascript

// Q.1 What is Function decalarations?

// function fun(num) {
//   return num * num;
// }     // function declration or function statement
// *************************************************************************

// Q 2 Anonymous function
//  Ans  A function is assigned to a variable and has no name to it is called anonymous function.
// This is also a function expression because it is assigned to a variable.

// const anonymous = function (num) {
//   return num + num;
// };

// console.log(anonymous(4));

// *************************************************************************

// Q 3 What are First class functions

// Answer: in a language a function can be passed to another function as an
// argument and return from another function is called first class function

// **********************************************************************************************

// function sum(a, b) {
//   return a + b;
// }

// function total(func) {
//   console.log("the total of two number is " + func(10, 5));
// }
// total(sum);
// *********************// // // /// // // // ///***************************************
// DATA STRUCTURE AND ALGORITHMS   // // // // // / // // // / // // // // / // // // // // / /
// // // // // // // // // //**************************************// // // // // / / /// // // // //
// traverse an array

// let array = [1, 2, 44, 12, 54, 20];
// let element = 10;
// let positon = 2;
// function getelement() {
//   let el = document.getElementById("element").value;
//   if (el < array.length) {
//     alert(array[el]);
//   } else {
//     alert("please enter a valid input");
//   }
// }
// ************************************************************************
// insert an element in an array
// let array = [1, 2, 44, 12, 54, 20];
// let element = 10;
// let positon = 2;
// for (let i = array.length - 1; i >= 0; i--) {
//   if (i >= positon) {
//     array[i + i] = array[i];
//     if (i == positon) {
//       array[i] = element;
//     }
//   }
// }

// console.log(array);
// ******************************************************************************
//  Delete an element from an array

let data = [1, 2, 44, 12, 54, 20];
let position = 3;
