module.exports.equalStrings = function(stringOne, stringTwo) {
  var checkEqual = stringOne == stringTwo;
  return checkEqual;
};

module.exports.equalStrings("fun", "fun");
module.exports.equalStrings("bloc", "boring")

module.exports.notEqual = function(one, two) {
  var checkNotEqual = one !== two;
  return checkNotEqual;
};

module.exports.notEqual(1, "1");
module.exports.notEqual(1, 1);

module.exports.inBetween = function(lower, middle, upper) {
  var middleNum = (lower < middle) && (middle < upper);
  return middleNum;
};
module.exports.inBetween(1, 3, 5);
module.exports.inBetween(3, 1, 5);

module.exports.outsideRanges = function(number) {
  var checkNum1 = (number < 10) || (number > 20);
  var checkNum2 = (number <= 42) || (number > 75);
  var checkNum3 = (number <= 1) || (number >= 6);
  var numCheck = checkNum1 && checkNum2 && checkNum3;
  return numCheck;
};

module.exports.outsideRanges(42);
module.exports.outsideRanges(75);

module.exports.nameAndPrice = function(name, price) {
  var paperName = (name == "NYTimes") || (name == "LATimes");
  var paperPrice = price >= 1;
  var checkPaper = paperName && paperPrice;
  return checkPaper;
};

module.exports.nameAndPrice("NYTimes", 1);
module.exports.nameAndPrice("LATimes", 0);
module.exports.nameAndPrice("NYTimes", 0);