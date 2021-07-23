// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer");
console.log(generateMarkdown)
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "what's the title of the project?"

}, {
    type: "input",
    name: "username",
    message: "What's your github username?"
},
{
    type: "input",
    name: "email",
    message: "what is your email?"
},
{
    type: "list",
    name: "licenseChoice",
    message: "Select the license you want to use.",
    choices: [
        'APACHE2.0',
        'GNU',
        'MIT',
        'None'
    ]

},
{
    type: "input",
    name: "descriptions",
    message: "Please enter a description of your Project"
},
{
    type: "input",
    name: "installation",
    message: "What steps did you take for Installation?"
},
{
    type: "input",
    name: "usage",
    message: "What is the usage of this application?"
},
{
    type: "input",
    name: "contributing",
    message: "Who contributed to the project?"
},
{
    type: "input",
    name: "test",
    message: "How to run the test files ?"
},
];

// const generateReadme = (title, name)=> {
//     return
//     '

// }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, data, err => {
        if (err) throw err;

        console.log('READme.md')
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers)
        var templateData = generateMarkdown(answers);
        console.log(templateData)

        writeToFile('README.md', templateData)
    })
}

// Function call to initialize app
init();
