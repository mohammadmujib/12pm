// it is acollection of data of key value pair

let obj = {
  0: "hello",
  1: 1,
  hello: "world",
};
// console.log(obj["1"]);

for (let i in obj) {
  console.log(i, obj[i]);
}

let car = {
  name: "maruti",
  model: "s-cross",
};

console.log(car["name"]);
car.model = "grand vitara";

let car_two = { ...car };

car_two["name"] = "bmw";

console.log(car);
console.log(car_two);
