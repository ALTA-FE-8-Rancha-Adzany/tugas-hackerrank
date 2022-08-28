function alternate(s) {
  // Write your code here
  let arr5 = [];
  const arrOriginal = s.split("");
  const arrSet = [...new Set(arrOriginal)];
  let maxLength = 0;
  for (let i = 0; i < arrSet.length - 1; i++) {
    let pass = false;
    let first = arrSet[i];
    for (let x = i + 1; x < arrSet.length; x++) {
      let pass = false;
      let second = arrSet[x];
      arr5 = arrOriginal.filter((e) => e === first || e === second);

      for (let j = 0; j < arr5.length - 1; j++) {
        if (arr5[j] === arr5[j + 1]) {
          pass = true;
          break;
        }
      }
      if (pass === false) {
        maxLength = Math.max(maxLength, arr5.length);
      }
    }
    // console.log(arr5);
  }
  return maxLength;
}
