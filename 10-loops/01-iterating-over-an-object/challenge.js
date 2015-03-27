//get keys function
module.exports.getKeys = function(object) {
    var myArray = [];
    for (var property in object) {
        myArray.push(property);
    }
    return myArray;
};

module.exports.getValues = undefined;

module.exports.objectToArray = undefined;