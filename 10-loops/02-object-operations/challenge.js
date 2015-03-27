//copy object function
module.exports.copy = function (object) {
    var secondObject = new Object ();
    for (var property in object) {
        secondObject[property] = object[property];
    }
    return secondObject
};

//extend object function
module.exports.extend = function (dest, src) {
    for (var property in src) {
        dest[property] = src[property];
    }
    return dest
};

module.exports.hasElems = undefined;