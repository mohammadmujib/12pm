[0, 1, 1, 2, 3, 5, 8];

function fib(num) {
  let ser = [0, 1];
  for (let i = 2; i <= num; i++) {
    ser[i] = ser[i - 1] + ser[i - 2];
  }
  return ser[ser.length - 1];
}

// console.log(fib(5));
// console.log(fib(10));

function fibRecursive(num) {
  if (num <= 1) {
    return 1;
  }

  return fibRecursive(num - 1) + fibRecursive(num - 2);
}

console.log(fibRecursive(6));
console.log(arr);
