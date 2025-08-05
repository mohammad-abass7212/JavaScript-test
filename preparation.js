// 01  find the lasgest string from an array

// const findLargeststr = (str) => {
//   if (str.trim().length === 0) {
//     return false;
//   }

//   words = str.split(" ");
//   words = words.sort((a, b) => b.length - a.length);
//   //   console.log(words);
//   return words[0];
// };

// console.log(findLargeststr("abass mohammad javascript"));

// 02 finde the repetation of the char in word

// const countCounter = (word, char) => {
//   word = word.toLowerCase();
//   char = char.toLowerCase();
//   let totalCount = word.split("").reduce((accu, currchar) => {
//     if (currchar === char) {
//       accu++;
//     }
//     return accu;
//   }, 0);
//   return totalCount;
// };

// console.log(countCounter("abssass", "s"));

// 03 find the factorial of a number using simple function

// const findFactorial = (num) => {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact = fact * i;
//   }
//   return fact;
// };

// console.log(findFactorial(3));

// 04 find the factorial of a number using recursive function

// const findFactorialrecursive = (num) => {
//   if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     return num * findFactorialrecursive(num - 1);
//   }
// };
// console.log(findFactorialrecursive(5));

// 05  reverse the numbers
// first method
// const reverse = (num) => {
//   let rev = 0;

//   while (num > 0) {
//     let rem = num % 10;
//     rev = rev * 10 + rem;
//     num = Math.floor(num / 10);
//   }
//   return rev;
// };
// console.log(reverse(1234));
// secound method
// function reversethenum(num) {
//   return num.toString().split("").reverse().join("");
// }
// console.log(reversethenum(123456));

// 06 how to empty an  array ?

// let arr = [1,2,3,5,8,6,9 ]

// console.log(arr.length=0);

// 07 how would you check if a number is integer ?

// let a = 12.0;

// if (a % 1 === 0) {
//   console.log("is a integer");
// } else {
//   console.log("not integer !");
// }

// 08 dublicate a array

// function dublicate(arr) {
//   return arr.concat(arr);
// }

// console.log(dublicate([1, 2, 3, 5, 8, 9]));

// 09 reverse the string

// function reverseTheString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseTheString("abass"));

// 10 To check if a number is a palindrome,

// function isPalindrome(num) {
//   const str = num.toString();
//   const reversedStr = str.split('').reverse().join('');
//   return str === reversedStr;
// }

// console.log(isPalindrome(12321));  // true
// console.log(isPalindrome(123456)); // false

// 11 To check if a string is a palindrome,

// function isPalindrome(num) {
//   const reversedStr = num.split("").reverse().join("");
//   return num === reversedStr;
// }

// console.log(isPalindrome("lool")); // true
// console.log(isPalindrome("loop")); // false

// 12 write a function that returns the letter in alphabet order?

// function alphabetLetter(str) {
//   return str.split("").sort().join("");
// }
// console.log(alphabetLetter("abass"));

// 13 write a javascript function that accepts a string and converts the each first latter  of word

// function capitalizeLetter(str) {
//   let capitalLatters = str.split(" ").map((val) => {
//     return val.charAt(0).toUpperCase() + val.substring(1);
//   });

//   return capitalLatters.join(" ");
// }

// console.log(capitalizeLetter("abass dar"));

// 14 wirte a function which returns the occurrences of a letter in the string

// function occurrences(str) {
//   let occurrencesChar = {};
//   str.split("").forEach((element) => {
//     if (occurrencesChar.hasOwnProperty(element) === false) {
//       occurrencesChar[element] = 1;
//     } else {
//       occurrencesChar[element]++;
//     }
//   });
//   return occurrencesChar;
// }

// console.log(occurrences("abass"));

//15 sum the array of elements

// function sumTheArrayElements(element) {
//   let sum = 0;
//   element.forEach((num) => {
//     return (sum = sum + num);
//   });
//   return sum;
// }

// console.log(sumTheArrayElements([1, 2, 3, 5, 6, 8]));

// 16 sum of number from the array whic is having string ?

// function sumOfNumber(arr) {
//   let sum = 0;

//   arr.forEach((num) => {
//     if (typeof num === "number") {
//       return (sum = sum + num);
//     }
//   });
//   return sum;
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// let result = array[array.length - 1];
// console.log(result);

// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// let lastEment = array.slice(-1);
// console.log(lastEment[0]);

// console.log(
//   sumOfNumber(["abass", 123, 5, 3, "abc", "sakeena jan i love you "])
// );

//

//17 retreave last elements from an array

// function retreaveLastElement(arr, n) {
//   for (let i = 0; i < n; i++) {
//     return arr[i];
//   }
// }

// console.log(retreaveLastElement([1, 2, 3, 4, 5], 2));

// var name = "global name";
// const obj = {
//   name: "Alice",
//   showThis: function () {
//     console.log(this.name);
//   },
// };

// obj.showThis(); // Alice

// var showThis = obj.showThis;
// showThis();

// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);

// // output

// [1,2,3,,,,,,,,11]

// const arr = [
//   { name: "rishabh", age: 25 },
//   { name: "subham", age: 50 },
// ];
// // // const obj = {rishabh:25,subham:50}  output
// const obj = {};
// for (let index = 0; index < arr.length; index++) {
//   let element = arr[index];

//   if (element) {
//     obj[element.name] = element.age;
//   }
// }

// console.log(obj);
// swap for two strings without using the thrid variable
// let a = "abc";
// let b = "xyz";

// [a, b] = [b, a];

// a = a + b;
// b = a.substring(0, a.length - b.length);
// b = a.substring(b.length);
// console.log("a", b);
// console.log("b", b);

// let obj = {
//   name: "abass",
//   age: "28",
//   add: {
//     personal: {
//       street: "reshipora",
//       dist: "barm",
//     },
//   },
// };
// let obj2 = {};
// obj2 = obj;

// delete obj2.name;
// delete obj2.add.personal.street;

// console.log("obj", obj);
// console.log("obj2", obj2);

// swap tow numbers without using the third variable

// let a = 33;
// let b = 45;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log("a:", a);
// console.log("b:", b);

// let str = "convert+to-camel";
// // convertToCamel

// let result = str
//   .split(/[+-]/)
//   .map((val, index) =>
//     index == 0
//       ? val.toLowerCase()
//       : val.charAt(0).toUpperCase() + val.slice(1).toLowerCase()
//   )
//   .join("");

// console.log(result, "result");

// take the output from two stings Output: a1b2c3d4
// const String1 = "abass";
// const String2 = "1234";

// let result = "";
// for (let i = 0; i < String1.length; i++) {
//   result += String1[i] + String2[i];
// }

// console.log(result); // Output: a1b2c3d4

// compare primitive and not-primitive

// console.log(false == [[[[[[[0]]]]]]]);

// var length = 20;

// function count() {
//   console.log(this.length);
// }

// let data = [count, "abass", 1235];
// console.log(data[0]());

// const Tech = { name: "Abass" };
// // Object.freeze(Tech);
// Tech.name = "MOhammad Abass";

// console.log(Tech.name);
// empty an array

// const arrayList = [1, 2, 3, 4, 5, 6, 7];

// arrayList.length = 0;
// arrayList.splice(0, arrayList.length);
// console.log(arrayList);

// var bar = true;
// console.log(bar + 0);
// console.log(bar + "xyz");
// console.log(bar + true);
// console.log(bar + false);

// find the longest word from the function

// const str = "Abass Sakeena Mummy Papa javid";

// function longestWord(str) {
//   const result = str.split(" ").sort((a, b) => b.length - a.length);

//   console.log(result[0]);
// }

// longestWord(str);

// const str = "Sakeena all the family are my love";

// const converttoHAshtag = (str) => {
//   if (str.trim().length == 0 || str.length == 0) {
//     return false;
//   }
//   const convertStr = str.split(" ");
//   let result = convertStr.map(
//     (currelemn) =>
//       // currelemn.replace(currelemn[0], currelemn[0].toUpperCase())
//       currelemn.charAt(0).toUpperCase() + currelemn.slice(1)
//   );
//   console.log(`#${result.join("")}`);
//   return `#${result.join("")}`;
// };
// converttoHAshtag(str);

//  count occurance of characters in a string

// const countCharOccurance = (word, char) => {
//   if (word.trim().length == 0) {
//     return false;
//   }
//   word = word.toLowerCase();
//   char = char.toLowerCase();
//   let totalCount = word.split("").reduce((acc, currElm) => {
//     if (currElm === char) {
//       acc++;
//     }
//     return acc;
//   }, 0);

//   console.log(totalCount);
// };
// countCharOccurance("MohammadAbass", "s");

// write a program is string is a palindrom or not if yes then return true otherwise retune false

// function isPalindrome(string) {
//   string.toLowerCase().replace(/\W/g, " ");
//   let rever_str = string.split("").reverse().join("");
//   return string === rever_str ? true : false;
// }

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("A man"));

// find the factorial of a number

// function findFactorial(num) {
//   let fact = 1;

//   for (let index = 1; index <= num; index++) {
//     fact = fact * index;
//   }
//   return fact;
// }
// console.log(findFactorial(5));

// // write a function is array are equal or not

// const isArrayEqual = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   // return arr1.every((value, index) => value === arr2[index]);

//   for (let index = 0; index < arr1.length; index++) {
//     const element = arr1[index];
//     if (element === arr2[index]) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };

// console.log(isArrayEqual([1, 2, 3], [1, 2, 3]));
// console.log(isArrayEqual([1, 2, 3], [1, 2, 4]));

// const str = "india won the world cup";
// // output = "India Won The World Cup";

// const capitalizeLetter = (str) => {
//   str = str.split(" ");
//   str = str.map((val, index) => val.charAt(0).toUpperCase() + val.slice(1));
//   console.log(str.join(" "));
// };

// capitalizeLetter(str);

// const array = [1, [2], [3, [4, 5, [6, [7], [8], [[9]]]]]];

// // output = [1, 2, 3, 4, 5, , 6, 7, 8, 9];

// const nestedArr = (arr) => {
//   arr.flat(Infinity);
// };
// nestedArr(array);

// Remove the dublicate elements from anarray

// const arrs = [1, 2, 3, 5, 4, 6, 2, 3, 4, 5, 5];

// let removeDublicate = (arr) => {
//   let seen = {};
//   let dub = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!seen[arr[i]]) {
//       seen[arr[i]] = true;
//       dub.push(arr[i]);
//     }
//   }
//   return dub;
// };
// console.log(removeDublicate(arrs));

// secound method

// let removeDublicate = (arr) => {
//   let result = [...new Set(arr)];
//   return result;
// };
// console.log(removeDublicate(arrs));

// let a = 20
// function getName(){
//   console.log(a)
// }

// console.log(a); // undefined
// var a = 2;

// console.log("aaa", a);

// let a = 19;

// const array = [1, 2, 3, 4, 55, 55, 55, 3];

// const removeDublicate = (arr) => {
//   let seen = {};
//   let result = [];

//   for (let index = 0; index < arr.length; index++) {
//     if (!seen[arr[index]]) {
//       seen[arr[index]] = true;
//     } else {
//       result.push(arr[index]);
//     }
//   }
//   console.log(seen, "");
//   return result;
// };
// console.log(removeDublicate(array));

// const arr1 = [
//   { id: 1, name: "as" },
//   { id: 2, name: "ars" },
//   { id: 3, name: "as" },
// ];
// // Find the index which id is 2

// let result = arr1.findIndex((val) => val.id == 2);

// console.log(result);

// find the vowel from the string
// const vowels = ["a", "e", "i", "o", "u"];
// const findVowel = (str) => {
//   let count = 0;
//   let characters = {};
//   let splitstr = str.split("");
//   for (let char of splitstr) {
//     if (vowels.includes(char.toLowerCase())) {
//       characters[count++] = char;
//     }
//   }
//   return count;
// };

// console.log(findVowel("Abass"));

// # write to calculate the sum of squares of all the elements

// const calculateTheSum = (arr) => {
//   const result = arr.reduce((acc, currelem) => (acc += currelem * currelem), 0);
//   return result;
// };

// console.log(calculateTheSum([1, 2, 3]));

// # find the min value from the array

// const findMinvalue = (arr) => {
//   return arr.sort((a, b) => a - b)[0];
// };

// console.log(findMinvalue([20, 3, 8, 5, 2, 6, 8]));

// #  reverse the string without using inbuilt functions

// const reverseStr = (str) => {
//   for (let i = str.length - 1; i >= 0; i--) {
//     console.log(str[i]);
//   }
// };
// console.log(reverseStr("hello"));

// const revercezStr = (str) => {
//   for (let i = str.length - 1; i >= 0; i--) {
//     const element = str[i];
//     console.log(element, "element");
//   }
// };
// revercezStr("Abass");
// # find the Mean value from the array

// const findMean = (arr) => {
//   const result = arr.reduce((acc, val) => val, 0);
//   return result;
// };

// # push Zeros to end of an array
// const array = [1, 0, 3, 0, 5, 0, 7, 8, 3, 2];

// const pushZeros = (arr) => {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[count++] = arr[i];
//     }
//   }
//   while (count < arr.length) {
//     arr[count++] = 0;
//   }
//   return arr;
// };
// console.log(pushZeros(array));

//  find the average value of an array

// let array = [10, 20, 30, 11, 2, 8, 0, 55, 22];

// const findAverage = (arr) => {
//   if (arr.length === 0) {
//     return 0;
//   }
//   let sum = arr.reduce((acc, curr) => acc + curr, 0);
//   let average = sum / arr.length;
//   console.log(average);

//   return average;
// };
// findAverage(array);

// let array = [0, 10, 0, 20, 30, 11, 2, 8, 0, 55, 22];
// const pushZerosEnd = (arr) => {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let elemet = arr[i];
//     // console.log(elemet, "element");

//     if (elemet != 0) {
//       arr[count++] = elemet;
//     }
//   }
//   // while (count < arr.length) {
//   //   arr[count++] = 0;
//   // }
//   console.log(count);
//   console.log(arr);
//   return arr;
// };

// pushZerosEnd(array);

// for (let index = 0; index < 3; index++) {
//   setTimeout((val) => {
//     console.log(index, "element");
//   }, 1000);
// }

// let data = "size";
// let bird = {
//   size: "small",
// };

// console.log(bird[data]);
// console.log(bird["size"]);
// console.log(bird.size);
// let obj = { a: "hello", b: "world", a: "mine" };
// console.log(obj);
// var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
// delete trees[3];
// console.log(trees);
// console.log(false + false);
// var arr = [10, 32, 65, 2];
// for (var i = 0; i < arr.length; i++) {
//   let element = arr[i];
//   function solve(index) {
//     setTimeout(function () {
//       console.log(`The index of ${element} number is:` + index);
//     }, 3000);
//   }
//   solve(i);
// }
// const bird = {
//   size: "small",
// };

// const mouse = {
//   name: "Mickey",
//   small: true,
// };

// console.log(mouse.bird.size);
// console.log(mouse[bird.size]);

// console.log(mouse[bird["size"]]);
// const arr = [1, 2, 33, 44, 5, 6, 7];

// let position = 4;
// let elem = 30;
// for (let i = arr.length - 1; i >= 0; i--) {
//   if (i >= position) {
//     arr[i + 1] = arr[i];
//     if (i == position) {
//       arr[i] = elem;
//     }
//   }
// }

// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let position = 2;
// for (let i = arr.length - 1; i >= 0; i--) {
//   if (i == position) {
//     arr[position] = arr[null];
//   }
// }
// console.log(arr);
