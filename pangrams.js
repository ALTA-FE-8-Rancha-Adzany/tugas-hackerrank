function pangrams(s) {
  let a = new Set(s.toUpperCase());
  return a.size < 26 + a.has(" ") ? "not pangram" : "pangram";
}
