// 5 = 5*4*3*2*1 = 120
function factor(number) {
  let result = 1;
  for (let i = number; i > 0; i--) {
    result = result * i;
  }
  return result;
}
// console.log(factor(5));
// console.log(factor(6));
// console.log(factor(20));
// console.log(factor(100));

// using recusrion

function factRecursive(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factRecursive(num - 1);
}
console.log(factRecursive(100));
