function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

function doubleArray(arr) {
  return arr.map(num => num * 2);
}

module.exports = {
  sumArray,
  doubleArray,
};
