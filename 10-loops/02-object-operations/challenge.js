//copy object function
module.exports.copy = function (object) {
    var secondObject = new Object ();
    for (var property in object) {
        secondObject[property] = object[property];
    }
    return secondObject
};

module.exports.extend = undefined;

module.exports.hasElems = undefined;