
/**
 * A student class describes all of
 * the properties and methods associated
 * with a student in an LMS
 */
function Student(fn, ln) {
  this.first_name = fn;
  this.last_name = ln;
  this.courses = [];
  this.enroll = (crs) => {
    this.courses.push(crs);
  }
}

module.exports = Student;