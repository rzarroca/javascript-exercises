const leapYears = function(year) {
  if (year % 4 === 0 && year % 100 !== 0) return true;
  if (year % 400 === 0) return true;
  return false;
}

module.exports = leapYears

// finished 29/11/20