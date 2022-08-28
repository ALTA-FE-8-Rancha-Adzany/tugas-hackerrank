function camelcase(s) {
  // Write your code here
  let noOfWords = 0;

  s.split("").forEach((char) => {
    if (char === char.toUpperCase()) {
      noOfWords++;
    }
  });

  return noOfWords + 1;
}
