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

//check lock function
module.exports.checkLock = function (num1, num2, num3, num4) {
  var check1 = (num1 == 3) || (num1 == 5) || (num1 == 7);
  var check2 = (num2 == 2);
  var check3 = (num3 >= 5) && (num3 <= 100);
  var check4 = (num4 < 9) || (num4 > 20);
  var checkCombo = check1 && check2 && check3 && check4
  if (checkCombo == true) {
    return "correct";
  } else {
    return "incorrect";
  }
};

module.exports.checkLock(1, 2, 45, 1);
module.exports.checkLock(5, 2, 45, 1);
module.exports.checkLock(5, 1, 50, 1);

//can i get function
module.exports.canIGet = function(item, money){
  if ((item == "MacBook Air") && (money >= 999)) {
    return true; 
  } else if ((item == "MacBook Pro") && (money >= 1299)) {
    return true;
  } else if ((item == "Mac Pro") && (money >= 2499)) {
    return true;
  } else if ((item == "Apple Sticker") && (money >= 1)) {
    return true;
  } else {
    return false;
  }
};

module.exports.canIGet("MacBook Air", 1000);
module.exports.canIGet("Commodore 64", 100);