// TODO: Include packages needed for this application
const genMrkDn = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of the project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is the description of the project?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Is there any installation for your project? If yes input bellow:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What is the intended use for you project?',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'What license will you choose?',
            name: 'license',
            choice: ['mit', 'apache', 'isc'],
        },
        {
            type: 'input',
            message: 'Who are the contributors?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your GitHub?',
            name: 'github',
        },
    ])
    .then(answers) => {
        const results = genMrkDn(answers)
        
    };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
