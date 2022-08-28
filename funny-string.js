function funnyString(str) {
  // Write your code here

  const s = str.split("").map((it) => it.charCodeAt(0));
  const r = s.slice().reverse();

  const arrDiff = (arr) =>
    arr.reduce((pv, cv, i) => {
      if (i === 0) {
        return pv;
      }
      pv.push(Math.abs(cv - arr[i - 1]));
      return pv;
    }, []);

  const sDiff = arrDiff(s);
  const rDiff = arrDiff(r);

  return sDiff.reduce((pv, cv, i) => pv && cv === rDiff[i], true) ? "Funny" : "Not Funny";
}
