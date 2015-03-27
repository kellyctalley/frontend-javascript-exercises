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

//has elements function (finally!)
module.exports.hasElems = function (object, array) {
    var objectArray = Object.getOwnPropertyNames(object).sort();
    var sortArray = array.sort();
    if (sortArray.length === 0) {
        return true
    } else {
        if (objectArray.length !== sortArray.length) {
            return false;
        } else {
            for (var i = 0; i < objectArray.length; i++) {
                if (objectArray[i] !== sortArray[i]) {
                    return false;
                } else {
                    return true;
                }
            }
        }
    }
};