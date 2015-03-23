//reverse plus one function
module.exports.reversePlusOne = function(array) {
  array.push(1);
  array;
  array.reverse();
  return array;
};

module.exports.reversePlusOne([5, 4, 3, 2]);

module.exports.plusesEverywhere = function(array) {
  return array.join("+");
};

module.exports.plusesEverywhere([1, 2, 3, 4, 5]);

module.exports.arrayQuantityPlusOne = undefined;