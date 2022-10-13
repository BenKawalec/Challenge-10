const Manager = require("../lib/Manager");

test("Can create an office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("test", 2, "test@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("test", 2, "test@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("test", 2, "test@gmail.com", 2);
    expect(employeeInstance.getRole()).toBe(returnValue);
});