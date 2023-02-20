const Engineer = require("../lib/Engineer");

test("Create Engineer Object", () => {
    const testGithub = "theNewRepublic";
    const engineer = new Engineer('Gideon', 8, 'moffgideon@test.dev', testGithub);

    expect(engineer.github).toBe(testGithub);
});

test("getGithub() will return github", () => {
    const testGithub = "theNewRepublic";
    const engineer = new Engineer('Gideon', 8, 'moffgideon@test.dev', testGithub);

    expect(engineer.getGithub()).toBe(testGithub);
});

test("getRole() will return github", () => {
    const role = "Engineer";
    const engineer = new Engineer('Gideon', 8, 'moffgideon@test.dev', role);

    expect(engineer.getRole()).toBe(role);
});

