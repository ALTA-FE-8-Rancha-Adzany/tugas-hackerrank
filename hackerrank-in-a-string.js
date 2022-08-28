var comp = "hackerrank";
function hackerrankInString(s) {
  // Write your code here
  if (comp.length <= s.length) {
    let j = 0;
    for (let i = 0; i < s.length; i++) {
      if (j < comp.length && s.charAt(i) === comp.charAt(j)) j++;
    }
    return j === comp.length ? "YES" : "NO";
  } else return "NO";
}
