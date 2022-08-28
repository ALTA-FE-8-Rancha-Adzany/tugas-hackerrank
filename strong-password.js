function minimumNumber(n, password) {
  let count = 0;
  if (!/[A-Z]+/.test(password)) {
    count++;
  }
  if (!/[a-z]+/.test(password)) {
    count++;
  }
  if (!/[!@#$%^&*()--+]+/.test(password)) {
    count++;
  }
  if (!/[0-9]+/.test(password)) {
    count++;
  }
  if (password.length < 6 && 6 - password.length > count) {
    return 6 - password.length;
  }
  return count;
}
