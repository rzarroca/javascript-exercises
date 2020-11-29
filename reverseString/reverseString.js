const reverseString = function(text) {
let reversed = [];
  for (i = 0; i < text.length; i++){
    reversed.unshift(text.charAt(i));
  }
return reversed.join('');
}

module.exports = reverseString
// finished 18/11/2020
