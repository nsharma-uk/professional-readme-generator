//function to generate markdown for GENERATED-README.md file
function generateMarkdown(answers) {
  return `# ${answers.title} ![alt text](${encodeURI(
    `https://img.shields.io/badge/${answers.license}-License-green`
  )})

    ## Table of Contents
    
    
      - [Table of Contents](#table-of-contents)
      - [Description](#description)
      - [Installation](#installation)
      - [Usage](#usage)
      - [License](#license)
      - [Contributing](#contributing)
      - [Tests](#tests)
      - [Questions](#questions)
    
    ## Description
    
    ${answers.description}
    
    ## Installation
    
    Please follow the instructions below:

    \`\`\`\
    
    ${answers.installation}
     
    \`\`\`\
    
    
    ## Usage
    
    Please follow the instructions below:
    
    \`\`\`\

    ${answers.usage}
   
    \`\`\`\

    ## License

    ${answers.license}
    
     
    ## Contributing
    
    ${answers.contributing}
    
    ## Tests

    Please follow the instructions below:

    \`\`\`\

    ${answers.test}
    
    \`\`\`\

    ## Author

    ${answers.fullName}
    
    ## Questions
    
    Please contact me if you have any queries on my email: ${answers.email}
    
    Visit my GitHub profile [here](https://github.com/${userName})`;
}

module.exports = generateMarkdown;

