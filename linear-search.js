// search linear search

let arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
let target = 1100;

for (let i in arr) {
  if (target == arr[i]) {
    console.log("yes");
    break;
  }
}
