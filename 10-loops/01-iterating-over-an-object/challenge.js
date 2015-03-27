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

//object to array function
module.exports.objectToArray = function(object) {
    var myArray = [];
    for (var property in object) {
        myArray.push(property + " is " + object[property]);
    }
    return myArray;
};