//Ex1

// for
// arr = [3, -5, 1, 6, 8, -2];

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
// let testArr = arr.map(elemArr => {
//     return elemArr * 1;
// })

// console.log(testArr);


//Ex3

// const styles = ["Jazz", "Blues"];
// console.log(styles);

// const addElem = styles.push("Rock N Roll");
// console.log(styles);

// const removed = styles.splice(1, 1, "Classic");
// console.log(styles);

// styles.shift();
// console.log(styles);

// styles.unshift("Rap", "Raggy");
// console.log(styles);

//Ex4
// function sumInput() {

//     let arr = [];

//     while (true) {

//         let value = prompt("Enter a number to Sum");

//         if (value === "" || value === null || !isFinite(value)) break;

//         arr.push(+value);
//     }

//     let sum = 0;
//     for (let number of arr) {
//         sum += number;
//     }
//     return sum;
// }

// alert(sumInput());

//Ex6
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newArr = array => {
//     const newGenerated = array;
//     newGenerated.splice(4, 0, 0, 0, 0);
//     return newGenerated;
// }

// console.log(newArr(arr));


//Ex7
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newArr = array => {
//     return array.slice(2, 5)
// }
// console.log(newArr(arr));

//Ex8
// const colors = ["red", "green", "blue"];

// const checkColor = color => {
//    return colors.indexOf(color);
// }
// console.log(checkColor("green"));

//Ex9
// const arr = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];

// let numbersOnly = (val) => {
//     if (typeof(val) === 'number') {
//         return val;
//     }
// }

// let numbers = arr.filter(numbersOnly);
// console.log(numbers);

//Ex10

const arr = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];

const unsort = () => {
    return [...new Set(arr)].sort((a, b) => a - b)
}

console.log(unsort());
