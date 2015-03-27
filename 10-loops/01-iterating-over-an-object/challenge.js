//get keys function
module.exports.getKeys = function(object) {
    var myArray = [];
    for (var property in object) {
        myArray.push(property);
    }
    return myArray;
};

//get values function
module.exports.getValues = function(object) {
    var myArray = [];
    for (var property in object) {
        myArray.push(object[property]);
    }
    return myArray;
};

module.exports.objectToArray = undefined;