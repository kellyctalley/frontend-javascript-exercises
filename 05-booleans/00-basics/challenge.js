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

};

module.exports.outsideRanges = function(number) {

};

module.exports.nameAndPrice = function(name, price) {

};