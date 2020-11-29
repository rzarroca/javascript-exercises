const sumAll = function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
  if (min < 0 || max < 0) return 'ERROR';
  let smallNum = min;
  let bigNum = max;
  let sum = 0;
  if (min >= max) {
    bigNum = min;
    smallNum = max;
  }
  for (let i = smallNum; i <= bigNum; i++) {
    sum += i;
  }
  return sum;
}

module.exports = sumAll

//finished 28/11/20
