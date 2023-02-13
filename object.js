let arr = ["a", "b"];
arr[0];
let car = {
  name: "x7",
  brand: "bmw",
  series: "7 series",
};
arr.push("c");
arr[1] = "changes";
console.log(arr);
car.name = "x5";
console.log(car["name"]);

let a = 2;
let b = 3;

// swap the number
console.log(a, b);
let temp = a;
a = b;
b = temp;

console.log(a, b);

let num1 = 2;
let num2 = num1;
num2 = 5;
console.log(num1, num2);

let arr1 = ["a", "b", "c"];
let arr2 = [...arr1];

arr2.push("add");

console.log(arr1, arr2);

let obj = {
  name: "abc",
  color: "yellow",
  car: {
    brand: "mahindra",
    price: "$20000",
  },
};

let obj2 = {
  ...obj,
  car: {
    ...obj.car,
  },
};
obj2.color = "red";
obj2.car.brand = "audi";
console.log(obj);
console.log(obj2);

let arr3 = ["ab", "cd", "ef"];
let str = arr3[2];
let str1 = arr3[1];
let [ujwal, ujwal2] = arr3; // array destrucring
console.log(str, str1);
console.log(ujwal, ujwal2);
