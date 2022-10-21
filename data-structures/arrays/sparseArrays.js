function matchingStrings(stringList, queries) {
  return queries.map((query) => {
    let counter = 0;
    stringList.forEach((string) => {
      if (string === query) counter++;
    });
    return counter;
  });
}
