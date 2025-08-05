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

// let data = [1, 2, 44, 12, 54, 20];
// let position = 3;

// const number = 2;
// const mul = (num) => {
//   let result = num * num;
//   return result;
// };

// console.log(mul(number), "mul>>>>>>>>>>>>>>>>>>>");
// const arr = ["one", "two", "one", "one", "two", "three"];

// const count = arr.reduce((accumulator, value) => {
//   return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
// }, {});

// console.log(count);
// find total number of same elements in an array ********************************************************
// const arr = ["a", "a", "a", "b", "b", "b", "a", "a", "b", "c", "c"];

// const count = {};

// arr.forEach((element) => {
//   count[element] = (count[element] || 0) + 1;
//   console.log(element);
// });

// console.log(count);

// find the largest string in an array ********************************
// const list = document.getElementById("list");
// var arr = ["mohd", "Abass", "Dar", "dilawera", "sajadddddda"];
// const largest = arr.sort(function (a, b) {
//   return b.length - a.length;
// });

// let arr = [66, 44, 55, 88, 7, 9, 3, 22, 322];

// const largest = arr.sort((a, b) => {
//   return b - a;
// });
// list.innerHTML = largest;
// console.log(largest[0], "ddddd");

// let arr = [4, 7, 8, 99, 6, 7, 889, 9, 334, 43];
// const sumOfOdd = (arr = []) => {
//   const sum = arr.reduce((acc, val) => {
//     return acc + val;
//   });
//   const isSumEven = sum % 2 === 0;
//   return console.log(isSumEven);
// };
// sumOfOdd(arr);

// const numbers = [4, 7, 8, 99, 6, 7, 889, 9, 334, 43];
// const odds = numbers.filter((num) => num % 2 === 0);
// const sumodd = odds.reduce((acc, val) => {
//   return acc + val;
// }, 0);
// console.log(odds);
// console.log(sumodd);

// const evenOdd = (arr, reminder) => {
//   const isEvenOdd = arr.filter((num) => num % 2 === reminder);
//   const result = isEvenOdd.reduce((acc, val) => {
//     return acc + val;
//   }, 0);
//   return console.log(result, "result");
// };

// evenOdd(numbers, 0);

// arr = [5, 2, 7, 1, 0];

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let swapped = false;
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       // swapping the elements
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         swapped = true;
//       }
//     }

//     // if no elements are swapped
//     // that means our array is sorted
//     if (!swapped) break;
//   }

//   return console.log(arr, "arr");
// }
// bubbleSort(arr);

//  Write program to find the nth largest number in the array

// let arrs = [66, 44, 55, 88, 7, 9, 3, 22, 322];
// const filtered = arrs.sort((a, b) => b - a);
// console.log(filtered[0]);

// const arry = [-1, -2, -3, -4, 3, 2, 1];

// const positive_Negative_Num = (arr = []) => {
//   const result = arr.reduce((acc, value) => {
//     return acc + value;
//   }, 0);
//   return console.log(result);
// };
// positive_Negative_Num(arry);

//  find squareroot of a number
// const time = new Date();

// const fulltime = time.getDate();
// console.log(fulltime);

// console.log("3" + 2 + "7");
// let arr = [4, 7, 8, 99, 6, 7, 889, 9, 334, 43];
// var summaryRanges = function (nums) {
//   let result = [];
//   let newRange = true;
//   for (let i = 0; i < nums.length; i++) {
//     if (newRange) {
//       PointA = nums[i];
//       newRange = false;
//     }
//     if (nums[i + 1] != nums[i] + 1) {
//       newRange = true;
//       if (PointA != nums[i]) result.push(`${PointA}->${nums[i]}`);
//       else result.push(`${nums[i]}`);
//     }
//   }
//   return console.log(result);
// };

// summaryRanges(arr);
// const str = "abcd";
// const str2 = "efgh";
// const test = (num, num2) => {
//   const strresult = num + num2;
//   for (let i = strresult.length - 1; i >= 0; i--) {
//     var temp = strresult[i];
//     strresult[i] = strresult[j];
//     strresult[j] = temp;
//   }
//   return console.log(strresult);
// };

// test(str, str2);
// let arrs = [66, 44, 55, 88, 7, 9, 3, 22, 322];
// const largestNum = () => {
//   let largest = arrs[0];
//   for (let i = 1; i < arrs.length; i++) {
//     if (arrs[i] > largest) largest = arrs[i];
//   }
//   return console.log(largest, "largets");
//   //   const result = arrs.reduce((a, b) => {
//   //     return a > b ? a : b;
//   //   }, 0);
//   //   return console.log(result);
// };
// largestNum();

// find second largest number form the array
let arrs = [66, 44, 55, 322, 88, 7, 9, 3, 22];

const findSecondLargestNum = (arr) => {
  let secoundlargest = "";
  let firstLargestNumber = "";
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i], "values");
    if (arr[i] > firstLargestNumber) {
      firstLargestNumber = secoundlargest;
      secoundlargest = arr[i];
    } else if (arr[i] > secoundlargest && arr[i] !== firstLargestNumber) {
      secoundlargest = arr[i];
    }
  }
  console.log(secoundlargest, "secoundlargest");
  console.log(firstLargestNumber, "firstLargestNumber");
};
findSecondLargestNum(arrs);

// Function to print the second largest elements
// function print2largest(arr, arr_size) {
//   // There should be atleast two elements
//   if (arr_size < 2) {
//     document.write(" Invalid Input ");
//     return;
//   }

//   // sort the array
//   arr.sort();

//   // start from second last element
//   // as the largest element is at last
//   for (let i = arr_size - 2; i >= 0; i--) {
//     // if the element is not
//     // equal to largest element
//     if (arr[i] != arr[arr_size - 1]) {
//       document.write("The second largest element is " + arr[i]);
//       return;
//     }
//   }

//   document.write("There is no second largest element<br>");
// }
// let size = arrs.length;

// print2largest(arrs, size);

// find the sencond largest number from an array
// let arrs = [66, 44, 55, 322, 7, 9, 88, 3, 22];

// const second_largest = (arr) => {
//   let result = arr.sort((a, b) => a - b);

//   for (let i = 0; i < result.length; i++) {
//     if (result[i] == result[result.length - 2]) {
//       document.write(
//         "The second largest element is " + result[result.length - 2]
//       );
//     }
//   }
//   // console.log(result, "sort");
// };
// second_largest(arrs);

// find the ,iddle number from an array
// let arrs = [66, 44, 55, 322, 7, 9, 88, 3, 22];

// const findMiddleNum = (arr) => {
//   arr.sort((a, b) => a - b);
//   // console.log(sort, "sort");
//   // middle number from array
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i], "values");
//   }
// };

// findMiddleNum(arrs);

// setTimeout(() => (console.log(1), 1));
// setTimeout(() => console.log(2), 0);
// Promise.resolve(() => console.log(3));
// setTimeout(() => console.log(4));

// primitive data types

// 7 types of primitive data types

// 1 String, 2 Number, 3 Boolean,4 null,5 undefined, 6 symbols, Bigint

// Refeences (Non primitive types)

// Array, function, object

// deep copy

// var obj = { name: "abass", age: "25", religion: "muslim" };

// function deepCopyFn(objct) {
//   if (typeof objct !== "object" || typeof objct === null) {
//     return objct;
//   }
//   var copiedVal = Array.isArray(objct) ? [] : {};
//   var keys = Object.keys(objct);
//   for (var i = 0; i < keys.length; i++) {
//     copiedVal[keys[i]] = deepCopyFn(objct[keys[i]]);
//   }
//   return copiedVal;
// }

// var copy = deepCopyFn(obj);
// copy.name = "dar";
// console.log(copy);
// console.log(obj);

// let arrs = [66, 44, 55, 88, 7, 9, 3, 22, 322];

// const result = arrs.reduce((a, b) => {
//   return a > b ? a : b;
// }, 0);
// console.log(result, "result");

// const arr = [22, 33, 55, 22, 66, 33, 77];

// function findDuplicates(arr) {
//   const duplicates = [];
//   const seen = {};

//   for (let i = 0; i < arr.length; i++) {
//     const current = arr[i];
//     if (seen[current]) {
//       if (seen[current] === 1) {
//         duplicates.push(current);
//       }
//       seen[current]++;
//     } else {
//       seen[current] = 1;
//     }
//   }

//   return duplicates;
// }

// const duplicateValues = findDuplicates(arr);
// console.log("Duplicate values:", duplicateValues);

// Write program to generate fabonacii series

// In the first 10 overs of a cricket game, the run rate was only 3.4.
// What should be the run rate in the remaining 40 overs to reach the target of 310runs?

// In parent component there is input. In the child there is increment button on click of increment button the value in input should increase by 1 When
// the counter value reaches  5 the button in the Child component should be disabled and a RED block/div with message “Done” should be displayed  and a new button
// in Child component should appear named “Reset”
// which upon click would reset the input value to 0   the red block should changed to green and reset button get hidden and increment button enabled
