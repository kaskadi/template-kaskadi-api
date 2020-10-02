'use strict';

const inquirer = require('inquirer');

function validateInput(input) {
  return input !== '';
}

const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's the name?",
    validate: validateInput
  },
  {
    type: 'input',
    name: 'method',
    message: "What's the method?",
    validate: validateInput
  },
  {
    type: 'input',
    name: 'path',
    message: "What's the path?",
    validate: validateInput
  },
];

module.exports = () => {
  return inquirer.prompt(questions)
}