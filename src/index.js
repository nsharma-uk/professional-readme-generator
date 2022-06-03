// Variable importing inquirer
const inquirer = require("inquirer");

// Variable importing array of questions from questions.js
const questions = require("./questions");

//Variable importing markdown from generate-markdown.js

const generateMarkdown = require("./generate-markdown");

//Variable importing fs modules
const fs = require("fs");

// Creating a function to initialize questions
  const init = async () => {

//prompt the questions and get answers
  const answers = await inquirer.prompt(questions);

const readme=generateMarkdown(answers);

 
fs.writeFileSync("./GENERATED-README.md", readme);
 };

  init();
