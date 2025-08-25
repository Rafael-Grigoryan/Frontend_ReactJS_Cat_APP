function findSam(arr = [10, 2, 5, 1, 9, 12], num = 17) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        return [i, j];
      }
    }
  }
}

console.log(findSam());

function findSamSecond(arr = [10, 2, 5, 1, 9, 12], num = 11) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const res = num - arr[i];

    if (obj[res]) {
      return [obj[res], i];
    }

    obj[arr[i]] = i;
  }
}
//aam of two
console.log(findSamSecond());
