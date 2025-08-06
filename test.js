// const factorial = (num) => {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact = fact * 1;
//   }

//   return fact;
// };

// console.log(factorial(3));
// let a = 10;
// let b = 30;

// [a, b] = [b, a];

// console.log(a, b);

// let capitalizeLetter = (letter) => {
//   letter = letter.split(" ").map((value) => {
//     return value.charAt(0).toUpperCase() + value.slice(1);
//   });

//   console.log(letter.join(" "));
// };
// capitalizeLetter("hello abass ");

// let dubarr = [1, 2, 3, 4, 5, 6, 7, 1, 3, 4, 3, 5, 3];

// let removeDublicates = (arr) => {
//   let result = [];
//   let seen = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (!seen[arr[i]]) {
//       seen[arr[i]] = true;
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   console.log(result, "result");
// };
// removeDublicates(dubarr);

// const factorial = (num) => {
//   let fact = 1;

//   for (let i = 1; i <= num; i++) {
//     fact = fact * i;
//   }
//   return fact;
// };

// console.log(factorial(5));

// const factorialRecursive = (num) => {
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   return num * factorialRecursive(num - 1);
// };

// console.log(factorialRecursive(5));

// const arr = [1, 2, 3, 4, 2, 5, 6, 8, , 8, 2, 3, 3, 5, 4];

// const findDublicate = (arr) => {
//   let result = [];
//   let seen = {};

//   for (let i = 0; i < arr.length; i++) {
//     let item = arr[i];
//     if (!seen[item]) {
//       seen[item] = 1;
//     } else if (seen[item] === 1) {
//       result = result.concat(item);
//       seen[item]++;
//     } else {
//       seen[item]++;
//     }
//   }
//   console.log(seen, "seeen");

//   return result.sort((a, b) => a - b);
// };

// console.log(findDublicate(arr));

// const capitalizelatters = (latter) => {
//   latter = latter
//     .split(" ")
//     .map((val) => val.charAt(0).toUpperCase() + val.slice(1));
//   return latter.join(" ");
// };

// console.log(capitalizelatters("mohammad abass"));

// const obj = {
//   a: 1,
//   b: 2,
//   sum() {
//     return this.a + this.b;
//   },
// };

// const res = obj.sum.bind(obj);
// console.log(res());

// const sum = (...args) => {
//   args[1] = 20;
//   console.log(args);
// };
// sum(1, 8);

// let str = "abass dar";
// let obj = {};
// for (let repete of str) {
//   if (obj[repete]) {
//     obj[repete] += 1;
//   } else {
//     obj[repete] = 1;
//   }
// }
// console.log(obj);

// shallow copy and deep copy

// let arr = [1, 2, 3, 2, [3, 45, 2], [12, 44, 5]];
// let copyarr = JSON.parse(JSON.stringify(arr));
// copyarr[4].push(12);
// console.log(copyarr);
// console.log(arr);
// const object = {};
// let value = "constructor";
// if (value in object) {
//   console.log("success");
// } else {
//   console.log("no success");
// }

// reverse an array without using inbuild method

// let array = [1, 2, 3, 4, 5];

// const reverseArr = (arr) => {
//   if (arr.length === 0) return [];

//   return [arr[arr.length - 1]].concat(reverseArr(arr.slice(0, -1)));
// };

// console.log(reverseArr(array));

// checck the non repeted values in string

// let str = "abassascs";

// const checkNonRepeted = (str) => {
//   let obj = {};

//   for (let char of str) {
//     obj[char] = (obj[char] || 0) + 1;
//   }

//   for (let char of str) {
//     if (obj[char] === 1) {
//       console.log(char);
//     }
//   }
// };

// checkNonRepeted(str);

// let obj = { a: "Js" };

// const { a, a: b, a: c } = obj;
// console.log(a, b, c);

// const parent = () => {
//   let lang = "js";
//   let lib = "React";
//   function child() {
//     console.log(lang);
//     console.log(lib);
//   }
//   function sibling() {
//     console.log("hello");
//   }
//   console.dir(child);
//   console.dir(sibling);
// };

// parent();

// const [a] = [1, 2, 3, 4];
// console.log(a);

// let a = NaN;
// let b = NaN;
// console.log(Object.is(a, b));
// console.log(a === b);
