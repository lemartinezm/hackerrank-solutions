function dynamicArray(n, queries) {
  const arr = Array.from(Array(n), () => []);
  let lastAnswer = 0;
  let answersArray = [];
  let idx;

  queries.forEach((query) => {
    if (query[0] === 1) {
      idx = (query[1] ^ lastAnswer) % n;
      arr[idx].push(query[2]);
    } else {
      idx = (query[1] ^ lastAnswer) % n;
      lastAnswer = arr[idx][query[2] % arr[idx].length];
      answersArray.push(lastAnswer);
    }
  });

  return answersArray;
}

const result = dynamicArray(2, [
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1],
]);

console.log(result);
