//Ex1

// for
arr = [3, -5, 1, 6, 8, -2];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// while 
// let i = 0;
// while(i < arr.length) {
//     console.log(arr[i]);
//     i++
// }

// do...while
// let i = 0;
// do {
//     console.log(arr[i]);
//     i++;
// }
// while (i < arr.length);

// forEach
// arr.forEach(element => {
//     console.log(element);
// });

// for...in (no order)
// for (let property in arr) {
//     console.log(arr[property]);
// }

// for of
// for (let elem of arr) {
//     console.log(elem);
// }

// map 
let testArr = arr.map(elemArr => {
    return elemArr * 1;
})

console.log(testArr);