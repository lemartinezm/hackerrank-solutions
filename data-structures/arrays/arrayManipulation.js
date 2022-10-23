/* For more information, search Prefix sum array */
function arrayManipulation(n, queries) {
  const arr = Array.from(Array(n), () => 0);
  let maxValue = 0;

  for (let i = 0; i < queries.length; i++) {
    const [a, b, k] = queries[i];
    arr[a - 1] += k
    arr[b] -= k
  }

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i + 1] += arr[i]
    if (arr[i + 1] > maxValue) maxValue = arr[i + 1]
  }
  return maxValue;
}

console.log(
  arrayManipulation(10, [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1],
  ])
);
