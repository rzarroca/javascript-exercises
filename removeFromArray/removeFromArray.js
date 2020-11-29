const removeFromArray = function(...arguments) {
  let array = arguments[0];
  let finalArray = [];

  array.forEach((element) => {
    if (!arguments.includes(element)){
      finalArray.push(element);
    }
  });
  return finalArray;
}

module.exports = removeFromArray

//finished 22/11/20
