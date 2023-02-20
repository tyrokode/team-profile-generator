const Manager = require("../lib/Manager");

test("Create Office number Object", () => {
    const testOfficeNumber = "800";
    const manager = new Manager('Yoda', 888, 'yoda1@test.dev', testOfficeNumber);

    expect(manager.officeNumber).toBe(testOfficeNumber);
});

test("getOfficeNumber() will return office number", () => {
    const testOfficeNumber = "800";
    const manager = new Manager('Yoda', 888, 'yoda1@test.dev', testOfficeNumber);

    expect(manager.getOfficeNumber()).toBe(testOfficeNumber);
});

test("getRole() will return github", () => {
    const role = "Manager";
    const manager = new Manager('Yoda', 888, 'yoda1@test.dev', role);

    expect(manager.getRole()).toBe(role);
});

