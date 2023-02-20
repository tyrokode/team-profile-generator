const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const inquirer = require("inquirer");
const path =  require("path");
const fs = require('fs');


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "main.html");
const generateTemplate = require("./src/template");

const teamArray = [];

const questions = {
    Manager: [
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?",
            validate: (value) => {
                if (value) {
                    return true
                } else { 
                    return "Please input a value"    
                }
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID?",
            validate: (value) => {
                if (value) {
                    return true
                } else { 
                    return "Please input a value"    
                }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?",
            validate: (value) => {
                if (value) {
                    return true
                } else { 
                    return "Please input a value"    
                }
            },
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
            validate: (value) => {
                if (value) {
                    return true
                } else { 
                    return "Please input a value"    
                }
            },
        },
        {
            type: "list",
            name: "addNew",
            message: "Do you want to add another employee to the team?",
            choices: ["yes", "no"]
        }
    ],

    Engineer: [
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter the engineer's name" }
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's id?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter the engineer's id" }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email address?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'Please enter a valid email address' }
            },
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter engineer's GitHub" }
            },
        },
        {
            type: "list",
            name: "addNew",
            message: "Do you want to add another employee to the team?",
            choices: ["yes", "no"]
        }
    ],

    Intern: [
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter the intern's name." }
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's id?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter the intern's id." }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email address?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'Please enter a valid email address.' }
            },
        },
        {
            type: "input",
            name: "school",
            message: "What school is the intern attending?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter the name of the school." }
            },
        },
        {
            type: "list",
            name: "addNew",
            message: "Do you want to add another employee to the team?",
            choices: ["yes", "no"]
        }
    ]
};

const selectRoleType = [
    {
        type: "list",
        name: "employeeType",
        message: "Please select the role of the employee",
        choices: ["Manager", "Engineer", "Intern"],
    }
];

function addTeamMember() {
    inquirer.prompt(selectRoleType)
        .then(answer => {
            // Manager

            if (answer.employeeType === "Manager") {
                inquirer.prompt(questions.Manager)
                    .then(answer => {
                        const manager = new Manager
                            (
                                answer.name,
                                answer.id,
                                answer.email,
                                answer.officeNumber
                            );   
                        // Add info to the team array
                        teamArray.push(manager);
                        if (answer.addNew === "yes") {
                            addTeamMember();
                        } else {
                            generateHTML();
                        }
                    });
            } else if (answer.employeeType === "Engineer") {
                inquirer.prompt(questions.Engineer)
                    .then(answer => {
                        const engineer = new Engineer
                            (
                                answer.name,
                                answer.id,
                                answer.email,
                                answer.github
                            );
                        // Add info to the team Array
                        teamArray.push(engineer);
                        if (answer.addNew === "yes") {
                            addTeamMember();
                        } else {
                            generateHTML();
                        };
                    });
            } else if (answer.employeeType === "Intern") {
                inquirer.prompt(questions.Intern)
                    .then(answer => {
                        const intern = new Intern
                            (
                                answer.name,
                                answer.id,
                                answer.email,
                                answer.school
                            );
                        // Add info to the team Array
                        teamArray.push(intern);
                        if (answer.addNew === "yes") {
                            addTeamMember();
                        } else {
                            generateHTML();
                        };
                    });
            }; 
        });
};

addTeamMember();

function generateHTML() {
    fs.writeFileSync(outputPath, generateTemplate(teamArray), "utf-8");
}