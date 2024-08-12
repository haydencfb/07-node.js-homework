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
  if (license === `MIT`) {
    return `[MIT](https://opensource.org/licenses/MIT)`;
  } else if (license === `GNU`) {
    return `[GNU](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === `Apache`) {
    return `[Apache](https://www.apache.org/licenses/LICENSE-2.0)`;
  } else if (license === `ISC`) {
    return `[ISC](https://opensource.org/licenses/ISC)`;
  } else if (license === `None`) {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === `MIT`) {
    return `MIT License`;
  } else if (license === `GNU`) {
    return `GNU License`;
  } else if (license === `Apache`) {
    return `Apache License`;
  } else if (license === `ISC`) {
    return `ISC License`;
  } else if (license === `None`) {
    return ``;
  }
}

function tableOfContents(tableOfContents) {
  if (tableOfContents === true) {
    return `## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Issues](#issues)
    - [Contributions](#contributions)
    - [License](#license)`;
  } else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.titleQuestion}

  ## ${data.descriptionQuestion}

  - ${data.motivationQuestion}
  - ${data.whyQuestion}
  - ${data.problemQuestion}
  - ${data.learnQuestion}

  ${tableOfContents(data.tableOfContentsQuestion)}
  
  ## Installation
  ${data.installQuestion}

  ## Usage
  ${data.usageQuestion}

  ## Issues
  ${data.issuesQuestion}

  ## Contributions
  ${data.contributionsQuestion}

  ## License

  ${renderLicenseBadge(data.licenseQuestion)}

  All rights reserved, Copyright © ${data.rightsQuestion} ${data.yearQuestion}.

  Licensed under the ${renderLicenseLink(data.licenseQuestion)} license.
`;
}

export default generateMarkdown;
