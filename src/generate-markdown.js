//function to generate markdown for GENERATED-README.md file
function generateMarkdown (answers) {
    return `# Project Title ![MIT](https://img.shields.io/badge/MIT-License-green)

    ## Table of Contents
    
    - [Project Title !MIT](#project-title-)
      - [Table of Contents](#table-of-contents)
      - [Description](#description)
      - [Installation](#installation)
      - [Usage](#usage)
      - [License](#license)
      - [Contributing](#contributing)
      - [Tests](#tests)
      - [Questions](#questions)
    
    ## Description
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    
    ## Installation
    
    Please follow the instructions below:
    
     
    npm install
    
    
    ## Usage
    
    Please follow the instructions below:
    
    
    npm run start
   
    
    ## License
    
    MIT License
    
    ## Contributing
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    
    ## Tests
    
    Please follow the instructions below:
    
   
    npm run test
    
    
    ## Questions
    
    Please contact me on my email: myemail@email.com
    
    Visit my GitHub profile [here](https://github.com/surajverma2587)`;
};

module.exports = generateMarkdown;