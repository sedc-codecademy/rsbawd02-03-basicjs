function diffFrom13(num) {
  let diff = Math.abs(num - 13);
console.log(diff);
  if (num > 13) {
    diff *= 2;
  }

  return diff;
}

console.log(diffFrom13(20));
