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

//form letter function
module.exports.formLetter = function(myLetter) {
  return "Hello " + myLetter.recipient + ",\n\n" + myLetter.msg + "\n\nSincerely,\n" + myLetter.sender;
};

module.exports.formLetter({recipient: "David", msg: "What up, thug?", sender: "Arnold"});

module.exports.canIGet = undefined;