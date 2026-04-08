let str = "this is is a test test";

let result = str
  .split(" ")
  .filter((word, index, arr) => arr.indexOf(word) === index)
  .join(" ");

console.log(result);


let arr = [1, 2, 2, 3, 4, 4];

let result1 = [...new Set(arr)];

console.log(result1);