let num1 = "1";
let num2 = "1";
console.log(Number(num1) + Number(num2)); // type conversion
console.log(num1 + num2); // concatenation
console.log(num1 - num2); // type coercion

let num3 = !!""; // type conversion technique use Boolean or !!

console.log(num3);
let num5 = null;

if (!!undefined) {
  console.log("hello");
}
let arr = [1, 2, 3, 4, 5, 6, 7]; //28
for (let i = 0; i < arr.length; i++) {
  console.log("array element is", arr[i]);
}

let i = 0;
while (i < arr.length) {
  console.log("while array elemt is", arr[i]);
  i++;
}

let j = 0;
do {
  console.log("do elemt is", arr[j]);
  j++;
} while (j < arr.length);

// write a program to calulate sum of arrays
let wallet = 0;

for (let i = 0; i < arr.length; i++) {
  wallet = wallet + arr[i];
  console.log(wallet);
}
console.log(wallet);

for (let i in arr) {
  console.log("for in loop", arr[i]);
}
for (let i of arr) {
  console.log(i);
}
