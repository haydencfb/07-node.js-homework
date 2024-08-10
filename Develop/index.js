// TODO: Include packages needed for this application
import inquirer from "inquirer";

// TODO: Create an array of questions for user input
const questions = [
    inquirer
    .prompt([
        {
            type: `input`,
            message: `What will be the title of your project? (This is the same name as your repository!)`,
            name: `titleQuestion`
        },
        {
            type: `input`,
            message: `What is the short-hand description of the project?`,
            name: `descriptoinQuestion`
        },
        {
            type: `list`,
            message: `What do you want to build?`,
            choices: [`What was your motivation?`, `Why did you build this project?`, `What problem does it solve?`, `What did you learn?`],
            name: `whatToBuild`
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
            type: `confirm`,
            message: `Add license to README?`,
            name: `licenseQuestion`
        }
    ])
    .then((data) => {
        // const title = data.titleQuestion;
        // const description = data.descriptionQuestion;
        // const chosenAnswer = data.whatToBuild;

        // if (title === ``) {
        //     console.log(`Please enter a valid title!`);
        //     title.preventDefault();
        // }

        // if (description === ``) {
        //     console.log(`Please enter a valid description!`);
        // }

        // if (chosenAnswer === `What was your motivation?`) {
        //     console.log(`What was your motivation?`);
        // } else if (chosenAnswer === `Why did you build this project?`) {
        //     console.log(`Why did you build this project?`);
        // } else if (chosenAnswer === `What problem does it solve?`) {
        //     console.log(`What problem does it solve?`);
        // } else if (chosenAnswer === `What did you learn?`) {
        //     console.log(`What did you learn?`);
        // } else {    
        //     console.log(`Please select a valid option!`);
        // }
})
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(`This is the response: ${data}`);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
