//favorite number function
module.exports.favoriteNumber = function(fav, guess) {
  if (guess > fav) {
    return "Too high";
      } else if (guess < fav) {
        return "Too low";
      } else {
        return "You got it!"
      }
};

module.exports.favoriteNumber(10, 1);
module.exports.favoriteNumber(5, 11);
module.exports.favoriteNumber(11, 11);

module.exports.checkLock = undefined;

module.exports.canIGet = undefined;