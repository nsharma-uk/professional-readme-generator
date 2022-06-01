console.log("hello from node");

// 1. import inquirer
const inquirer = require("inquirer");

// 2. declare your questions array
const questions = [
  {
    type: "input",
    name: "fullName",
    message: "Please enter is your full name:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter is your email address:",
  },

];