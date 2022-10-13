const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "test";
    const employeeInstance = new Engineer("test", 2, "test@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "test";
    const employeeInstance = new Engineer("test", 2, "test@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("test", 2, "test@gmail.com", "test");
    expect(employeeInstance.getRole()).toBe(returnValue);
});