//reverse plus one function
module.exports.reversePlusOne = function(array) {
  array.push(1);
  array;
  array.reverse();
  return array;
};

module.exports.reversePlusOne([5, 4, 3, 2]);

//pluses everywhere function
module.exports.plusesEverywhere = function(array) {
  return array.join("+");
};

module.exports.plusesEverywhere([1, 2, 3, 4, 5]);

//quantity plus one function
module.exports.arrayQuantityPlusOne = function(array) {
  return array.length + 1;
};

module.exports.arrayQuantityPlusOne([1, 2, 3, 4, 5]);