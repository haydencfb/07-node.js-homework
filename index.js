// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
        {
            type: `input`,
            message: `What will be the title of your project? (This is the same name as your repository!)`,
            name: `titleQuestion`
        },
        {
            type: `input`,
            message: `What is the short-hand description of the project?`,
            name: `descriptionQuestion`
        },
        {
            type: `input`,
            message: `What was your motivation?`,
            name: `motivationQuestion`
        },
        {
            type: `input`,
            message: `Why did you build this project?`,
            name: `whyQuestion`
        },
        {
            type: `input`,
            message: `What problem does it solve?`,
            name: `problemQuestion`
        },
        {
            type: `input`,
            message: `What did you learn?`,
            name: `learnQuestion`
        },
        {
            type: `input`,
            message: `How should Users install?`,
            name: `installQuestion`
        },
        {
            type: `input`,
            message: `How should Users use the generator?`,
            name: `usageQuestion`
        },
        {
            type: `input`,
            message: `How should Users report issues?`,
            name: `issuesQuestion`
        },
        {
            type: `input`,
            message: `How can developers make contributions to the project?`,
            name: `contributionsQuestion`
        },
        {
            type: `confirm`,
            message: `Add a table of contents?`,
            name: `tableOfContentsQuestion`
        },
        {
            type: `list`,
            message: `Choose a license for your project!`,
            name: `licenseQuestion`,
            choices: [`MIT`, `GNU`, `Apache`, `ISC`, `None`]
        },
        {
            type: `input`,
            message: `Who has rights to this project?`,
            name: `rightsQuestion`
        },
        {
            type: `input`,
            message: `What is the year this project was made?`,
            name: `yearQuestion`
        }
//     .then((data) => {
//         writeToFile(`README.md`, generateMarkdown(data));
// })
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
    console.log(`README.md is now properly generated!`);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile(`README.md`, generateMarkdown(data));
    });
}

// Function call to initialize app
init();
