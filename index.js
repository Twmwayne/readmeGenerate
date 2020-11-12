const inquirer = require("inquirer");
const fs = require("fs");
const template = require('./template.js');

// array of questions for user
const questions = [
    {
        name: "username",
        message: "What is your GitHub username?",
        validate: verifyGitHubAccount
    },
    {
        type: "list",
        name: "repoName",
        message: "Select the project repo:",
        filter:setRepoDefaults
    },
    {
        name: "title",
        message: "Enter a project title:",
    },
    {
        name: "description",
        message: "Enter a project description:",
    },
    {
        name: "installation",
        message: "Enter installation instructions:"
    },
    {
        name: "usage",
        message: "Enter usage directions:"
    },
    {
        type: "list",
        name: "license",
        message: "Select license type:",
        choices: ["copyleft","lpgl","MIT","permissive","proprietary","public"]
    },
    {
        name: "contributors",
        message: "Enter contibutors:"
    },
    {
        name: "tests",
        message: "Enter tests:"
    },
    {
        name: "email",
        message: "Enter contact email:",
        validate: validateEmail
    }

];

// function to write README file
function generateReadMe(responses){

    fs.writeFile
    (
        "./output/README.md",
        template.getReadMe(gitHubUserData,responses),
        (err) => {
            if(err)
                console.log("An error occured while writing file");
            else
                console.log("File saved");
        }
    );
}

// function to initialize program
function init() {

    inquirer.prompt(questions).then(resp => {

        generateReadMe(resp);
    });
}

// function call to initialize program
init();
