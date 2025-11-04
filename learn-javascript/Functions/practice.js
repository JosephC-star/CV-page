function isValidPassword(password, username) {
  if (password.length < 8) {
    return false;
  }
  if (password.indexOf("") !== -1) {
    return false;
  }
  if (password.indexOf(username) !== -1) {
    return false;
  }
  return true;
}

function isValidPassword(password, username) {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf("") !== -1;
  const tooSimilar = password.indexOf(username) !== -1;
  return true;
}

function avg(arr) {
  let total = 0;
  //loop over each num
  for (let num of arr) {
    //add together
    total += num;
  }
  //divide by number of nums
  return total / arr.length;
}
