const repeatString = function(text, quantity) {
  let string = '';
  if (quantity<0) return 'ERROR';
  for (i=0; i<quantity; i++){
    string += text;
  }
  return string;
}

module.exports = repeatString;
// finished 18/11/2020
