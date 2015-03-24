//add item function
module.exports.addItem = function(newItem, array) {
    if (array.indexOf(newItem) > -1) {
        return array;
    } else {
        array.push(newItem);
        return array;
    }
};

module.exports.addItem('orange', ['banana', 'apple', 'orange']);
module.exports.addItem('orange', ['banana', 'apple', 'blueberries']);

module.exports.reverseSortedList = undefined;