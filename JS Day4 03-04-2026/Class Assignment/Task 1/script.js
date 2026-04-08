let arr = [2, 3, 4];

let pushArr = arr.slice();
pushArr[pushArr.length] = 5;
console.log(pushArr);

let popArr = arr.slice(0, arr.length - 1);
console.log(popArr);

let unshiftArr = [1].concat(arr.slice());
console.log(unshiftArr);

let shiftArr = arr.slice(1);
console.log(shiftArr);