// let arr = [0, 1, 2, 3, 4];
// // it is collection of data in sequential manner
// target = 9;
// arr[0] = "hi";

// console.log(arr);

// nums[i] + nums[j] = target
// taget-nums[i] =  nums[j]

// let res = {};
function fib(n) {
  let i = 0;
  console.log(i);
  //   if (res[n] != null) {
  //     return res[n];
  //   }

  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  let num = fib(n - 1) + fib(n - 2);

  //   res[n] = num;
  return num;
}
console.log(fib(10));
// let arr = [];
// for (let i in res) {
//   arr.push(res[i]);
// }
// console.log(arr);
