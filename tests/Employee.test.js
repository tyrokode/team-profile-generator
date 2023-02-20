const Employee = require('../lib/Employee');

describe('Create Employee', () => {

    it(" should create a new Employee", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    });
}

)

describe('Name', () => {
    it("should return the employee name", () => {
        const name = "Grogu";
        const employee = new Employee(name);
    
        expect(employee.name).toBe(name);
    });
})

describe('ID', () => {
    it("should return the employee Id", () => {
        const id = "88";
        const employee = new Employee("Grogu", id);
    
        expect(employee.id).toBe(id);
    });
})

describe('Email', () => {
    it("should return employee Email", () => {
        const email = "Grogu@test.dev";
        const employee = new Employee("Mando", 88, email);
    
        expect(employee.email).toBe(email);
    });
})


describe('getName', () => {

    it(" should get a name through getName()", () => {
        const testName = "Mando"
        const employee = new Employee(testName);
        expect(employee.getName()).toBe(testName);
    });
}

)

describe('getID', () => {
    it("should get an ID through getID()", () => {
        const testId = "10";
        const employee = new Employee("Luke", testId);
    
        expect(employee.getID()).toBe(testId);
    });
})

describe('getEmail', () => {
    it("should get an email through getEmail()", () => {
        const testEmail = "Mando@test.dev";
        const employee = new Employee("Luke", 88, testEmail);
    
        expect(employee.getEmail()).toBe(testEmail);
    });
})

describe('getRole', () => {
    it("should return a role ", () => {
        const testRole = "Employee";
        const employee = new Employee("Moff Gideon", 10, "gideon@test.dev");
    
        expect(employee.getRole()).toBe(testRole);
    });
})
