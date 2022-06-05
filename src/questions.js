// declare  questions array

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a brief description of your project:",
  },

  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions for your project?",
  },

  {
    type: "input",
    name: "usage",
    message: "Please enter your project usage information:",
  },

  {
    type: "list",
    name: "license",
    message: "Please select the license you used for this project:",
    choices: ["Mozilla", "MIT", "Apache", "Boost"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Please enter your project contribution guidelines:",
  },

  {
    type: "input",
    name: "test",
    message: "Please enter any testing procedures for your project:",
  },

  {
    type: "input",
    name: "fullName",
    message: "What is your full name?",
  },

  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

//export questions
module.exports = {
  questions: questions,
};
