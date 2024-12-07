// console.log(-------------------------ans-1--------------------------)
// let arr = [2, 45, 6, 71, 9];
// arr.push(23);
// arr.pop();
// console.log(arr);

// console.log(-------------------------ans-2--------------------------)
// function modifyArr(arr, num){
//     arr.unshift(num);
//     arr.shift();
//     return arr;
// }
// let arr = [1, 4, 8, 10];
// let result1 = modifyArr(arr, 3);
// console.log(result1);

// console.log(-------------------------ans-3--------------------------)
// let arr1 = [23, 54, 65, 90, 12];
// arr1.splice(2, 1);
// console.log(arr1);

// console.log(-------------------------ans-4--------------------------)
// let a = [1, 2, 3, 4];
// let b = a.map((el) => {
//     return el * 2;
// })
// console.log(b);

// console.log(-------------------------ans-5--------------------------)
// let array = [1, 2, 3, 4, 5, 6];
// let oddArray = array.filter((el) => {
//     if(el % 2 != 0){
//         return el;
//     }
// });
// console.log(oddArray);

// console.log(-------------------------ans-6--------------------------)
// let Arr = [1, 2, 3, 4, 5];
// Arr.forEach((element) => {
//     console.log(element);
// })

// console.log(-------------------------ans-7--------------------------)
// let a1 = [10, 20, 5, 40];
// let b1 = a1.findIndex( (el) => el == 5);
// console.log(b1);

// console.log(-------------------------ans-8--------------------------)
// let a2 = [4, 10, 15, 20];
// let b2 = a2.findIndex((el) => el > 10);
// console.log(b2);

// console.log(-------------------------ans-9--------------------------)
// let fruits = ["banana", "orange", "apple"];
// let result = fruits.includes("apple");
// console.log(result);

// console.log(-------------------------ans-10--------------------------)
// let a3 = [2, 4, 6];
// let b3 = a3.every((el) => {
//     if(el % 2 == 0){
//         return true;
//     }
// });
// console.log(b3);

// let b3 = a3.some((el) => {
//     if(el % 2 != 0){
//         return true;
//     }
// });
// console.log(b3);

// console.log(-------------------------ans-11--------------------------)
// function squareEvenNumber(a4){
//     return a4.filter((el) => el % 2 == 0)
//               .map((el) => el * el);
// }

// let a4 = [1, 2, 3, 4, 5, 6];
// let b4 = squareEvenNumber(a4);
// console.log(b4);

// console.log(-------------------------ans-12--------------------------)


// console.log(-------------------------ans-13--------------------------)
// function doubleNumber(num) {
//     return num.filter((el) => el >= 5)
//               .map((el) =>  el * 2);
// }

// const num = [2, 3, 5, 7, 8];
// let result2 = doubleNumber(num);
// console.log(result2);

// console.log(-------------------------ans-14--------------------------)


// console.log(-------------------------ans-15--------------------------)
// const items = [
//     { name: 'apple', price: 4, quantity: 5 },
//     { name: 'banana', price: 6, quantity: 2 },
//     { name: 'orange', price: 5, quantity: 4 }
//     ];

// let result = items.filter(item => {
//     if(item.price > 5 || item.quantity < 3){
//         return true;
//     }
//     return false;
// });
// console.log(result);

