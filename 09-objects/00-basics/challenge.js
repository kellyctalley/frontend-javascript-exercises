//create course function
module.exports.createCourse = function(title, duration, students) {
    var course = {
        title: title,
        duration: duration,
        students: students
    };
    return course
  };

module.exports.createCourse("Full Stack Engineering", "4 weeks", ["Rob", "Tim", "Joe"]);

//add property function
module.exports.addProperty = function(object, newProp, newValue) {
    if (object.hasOwnProperty(newProp)) {
        return object;
    } else {
    object[newProp] = newValue;
    return object;
    }
};

module.exports.addProperty({}, "firstName", "Jim");
module.exports.addProperty({firstName: "Rob"}, "firstName", "Jim");

module.exports.formLetter = undefined;

module.exports.canIGet = undefined;