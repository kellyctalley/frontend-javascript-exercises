module.exports.formLetter = function(firstName, senderName, message) {
  return "Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName;
};

module.exports.formLetter("Rob", "Joe", "Take care.")

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  var string1 = bigString.substring(startA, endA);
  var string2 = bigString.substring(startB, endB);
  return string1 + string2
};

module.exports.sliceItAndCombineIt("This is a long test of the emergency broadcast system.", 10, 20, 30, 40);

module.exports.findFirstMatch = function(text, searchString) {
  return text.indexOf(searchString);
};

module.exports.findFirstMatch("Roses are red.", "red");

module.exports.findLastMatch = function(text, searchString) {
  return text.lastIndexOf(searchString);
};

module.exports.findLastMatch("Roses are red.", "red");

module.exports.substringBetweenMatches = function(text, searchString) {
  var search1 = text.indexOf(searchString);
  var search2 = text.lastIndexOf(searchString);
  return text.substring(search1 + searchString.length, search2);
};

module.exports.substringBetweenMatches("Roses are red, apples are really red.", "red");