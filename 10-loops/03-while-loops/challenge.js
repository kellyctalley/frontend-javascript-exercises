module.exports.stream = undefined;

//sum numbers in array with while loop
module.exports.sumNumbers = function (array) {
    var total = 0;
    var i = 0;
    while(array[i]) {
        total += array[i];
        i++;
    }
    return total;
};

