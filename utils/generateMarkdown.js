// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === `MIT`) {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === `GNU`) {
    return `![License: GNU](https://img.shields.io/badge/License-GNU-blue.svg)`;
  } else if (license === `Apache`) {
    return `![License: Apache](https://img.shields.io/badge/License-Apache-orange.svg)`;
  } else if (license === `ISC`) {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-green.svg)`;
  } else if (license === `None`) {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== `None`) {
    return `\n - [License](#license)`;
  }
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== `None`) {
    return `## License
    This project is licensed under the ${license} license.`;
  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.titleQuestion}
  ${renderLicenseBadge(data.licenseQuestion)}

  ## ${data.descriptionQuestion}

  - ${data.motivationQuestion}
  - ${data.whyQuestion}
  - ${data.problemQuestion}
  - ${data.learnQuestion}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Issues](#issues)
  - [Contributions](#contributions)
  ${renderLicenseLink(data.licenseQuestion)}
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installQuestion}

  ## Usage
  ${data.usageQuestion}

  ## Issues
  ${data.issuesQuestion}

  ## Contributions
  ${data.contributionsQuestion}

  ${renderLicenseSection(data.licenseQuestion)}

  ## Tests
  To run tests, run the following command: ${data.testsQuestion}

  ## Questions
  If you have any questions, please feel free to reach out to me at ${data.emailQuestion} or visit my GitHub profile at [${data.githubQuestion}]
`;
}

export default generateMarkdown;
