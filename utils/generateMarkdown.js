// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None'){
    return `![Github License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return '* [license](#License)'
   
  }
  else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None') {
    return '## Liscense'
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.licenseChoice)}

## Descriptions 
${data.descriptions}

## Table of Contents
* [Description](#Descriptions)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
 ${renderLicenseLink(data.licenseChoice)}
* [Questions](#Questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.licenseChoice)}

## Contributing
${data.contributing}

## Test
${data.test}
  
## Questions
if you have any questions about the repo , contact me @ [${data.email}](mailto:${data.email})
here is a link to my repo [${data.username}](https://github.com/${data.username})

  
`;
}

module.exports = generateMarkdown;
