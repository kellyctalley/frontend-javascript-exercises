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

//reverse sorted list function
module.exports.reverseSortedList = function(array) {
    var sorted = array.sort();
    return sorted.reverse();
};

module.exports.reverseSortedList([5, 1, 8, 4]);
module.exports.reverseSortedList(['banana', 'apple', 'orange', 'pineapple']);