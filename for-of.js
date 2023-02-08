let arr = [10, 20, 30, 4, 3, 2, 1, 5];

let wallet = 0;
for (let i in arr) {
  wallet = wallet + arr[i];
}
console.log(wallet);

// for each loop
arr.forEach((item) => {
  console.log(item);
});
