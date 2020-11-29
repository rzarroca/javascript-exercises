const ftoc = function(farTemp) {
  let celTemp = (farTemp-32)*(5/9);
  let tempRounded = Math.round(celTemp*10)/10;
  return tempRounded;
}

const ctof = function(celTemp) {
  let farTemp = celTemp*(9/5) + 32;
  let tempRounded = Math.round(farTemp*10)/10;
  return tempRounded;
}

module.exports = {
  ftoc,
  ctof
}

// finished 29/11/20
