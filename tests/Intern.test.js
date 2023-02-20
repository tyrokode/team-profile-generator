const Intern = require("../lib/Intern");

test("Create School Object", () => {
    const testSchool = "The Resistance";
    const intern = new Intern('Luke', 7, 'luke@test.dev', testSchool);

    expect(intern.school).toBe(testSchool);
});

test("getSchool() will return github", () => {
    const testSchool = "The Resistance";
    const intern = new Intern('Gideon', 8, 'moffgideon@test.dev', testSchool);

    expect(intern.getSchool()).toBe(testSchool);
});

test("getRole() will return github", () => {
    const role = "Intern";
    const intern = new Intern('Grogu', 8, 'Grogu@test.dev', role);

    expect(intern.getRole()).toBe(role);
});

