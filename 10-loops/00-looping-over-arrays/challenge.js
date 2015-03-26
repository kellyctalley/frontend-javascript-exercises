//sum numbers function
module.exports.sumNumbers = function (array) {
    var arrayTotal = 0;
    for (var i = 0; i < array.length; i++) {
        arrayTotal += array[i];
    }
    return arrayTotal
};

//split and lower case string function
module.exports.splitAndLowerCaseString = function(inputString) {
    var str = inputString.toLowerCase();
    var newArray = str.split(",");
    return newArray;
};

module.exports.addIndex = undefined;
