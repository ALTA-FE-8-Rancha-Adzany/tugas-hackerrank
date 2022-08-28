function bigSorting(unsorted) {
  return unsorted.sort((a, b) => {
    if (a.length === b.length) {
      return BigInt(a) - BigInt(b);
    }
    return a.length - b.length;
  });
}
