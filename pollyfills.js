// pollyFill of map

// Array.prototype.myMap = function (cb) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(cb(this[i], i, this));
//   }
//   return result;
// };

// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.myMap((val) => console.log(val));

// ####################################################################

//2 polyfill of reduce method

// syntax of reduce

// arr.reduce((acc,curr,i,arr)=>{},initialvalue)

// Array.prototype.myReduce = function (cb, initialvalue) {
//   let accumulator = initialvalue;
//   for (let i = 0; i < this.length; i++) {
//     accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[1];
//   }
//   return accumulator;
// };

// let arr = [1, 2, 7, 8, 9, 2];
// let sum = arr.myReduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(sum);

// polly fill of filter
//  arr.filter((val,i,arr)=>val)
// Array.prototype.myFilter = function (cb) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) result.push(this[i]);
//   }

//   return result;
// };

// let arr = [1, 2, 4, 6];
// let result = arr.myFilter((val) => {
//   return val > 2;
// });
// console.log(result);

// pollyfill for call bind and apply
let myobj = {
  name: "abass",
  age: "28",
};
function userDetails(address, firstName) {
  console.log(
    ` my name is ${firstName} ${this.name} my age is ${this.age} i am from ${address}`
  );
}

// Function.prototype.myCall = function (context = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error(this + "It`s not callable");
//   }
//   context.fn = this;
//   context.fn(...args);
// };

// userDetails.myCall(myobj, "reshipora", "mohammad");

//  pollyfill for apply

// Function.prototype.myApply = function (context = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error(this + "this can not be apply");
//   }
//   if (!Array.isArray(args)) {
//     throw new TypeError("CreateListfromArrayLike called on non-object");
//   }
//   context.fn = this;
//   context.fn(...args);
// };

// userDetails.myApply(myobj, ["reshipora", "mohammad"]);

// pollyfill for bind

// Function.prototype.myBind = function (context = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error(this + "this can not be callable");
//   }
//   context.fn = this;

//   return function (...newArr) {
//     return context.fn(...args, ...newArr);
//   };
// };

// let getuser = userDetails.myBind(myobj);

// console.log(getuser("reshipora", "mohammad"));

// repetation of word in a string
