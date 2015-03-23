//new array function
module.exports.newArray = function(one, two, three, four) {
  var myArray = [one, two, three, four];
  return myArray;
};

module.exports.newArray(1, 2, 3, 4);
module.exports.newArray("John", "Paul", "George", "Ringo");

//first and last function
module.exports.firstAndLast = function(array) {
  var first = array[0];
  var lastElementIndex = array.length - 1;
  var last = array[lastElementIndex];
  return [first, last];
};

module.exports.firstAndLast([1, 2, 3]);
module.exports.firstAndLast(["mango", "banana", "pineapple"]);