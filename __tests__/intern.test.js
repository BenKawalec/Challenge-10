const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testSchool = "test";
    const employeeInstance = new Intern("test", 2, "test@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "test";
    const employeeInstance = new Intern("test", 2, "test@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("test", 2, "test@gmail.com", "test");
    expect(employeeInstance.getRole()).toBe(returnValue);
});