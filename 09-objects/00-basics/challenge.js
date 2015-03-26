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

module.exports.addProperty = undefined;

module.exports.formLetter = undefined;

module.exports.canIGet = undefined;