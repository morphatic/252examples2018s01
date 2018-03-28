// import the Student class to be tested
const Student = require('./student');

describe("A Student", () => {

  it("has a first name", () => {
    const bob = new Student("Bob", "Barker");
    expect(bob.first_name).toBeDefined();
    expect(bob.first_name).toBe("Bob");
  });

  it("has a last name", () => {
    const bob = new Student("Bob", "Barker");
    expect(bob.last_name).toBeDefined();
    expect(bob.last_name).toBe("Barker");
  });
  
  it("has courses", () => {
    const bob = new Student("Bob", "Barker");
    expect(bob.courses).toBeDefined();
    expect(Array.isArray(bob.courses)).toBe(true);
  });
  
  it("can be enrolled in a new course", () => {
    const bob = new Student("Bob", "Barker");
    // mock (fake) course object
    const dummy252 = {
      name: "Programming and Problem Solving",
      number: 252,
      department: "ISAT",
      instructor: {
        first_name: "Morgan",
        last_name: "Benton",
        office: "ISAT/CS 124",
        email: "bentonmc@jmu.edu"
      },
      greet: () => { console.log("Hiya!"); }
    };
    bob.enroll(dummy252);
    expect(bob.courses.length).toBe(1);
    expect(bob.courses[0].name).toBe("Programming and Problem Solving");
    expect(bob.courses[0].instructor.first_name).toBe("Morgan");
  })
});