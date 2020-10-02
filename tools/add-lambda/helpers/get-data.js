'use strict';

const inquirer = require('inquirer');

function filterMethod (input) {
  return input.toLowerCase().trim();
}

function validateMethod(input) {
  const validMethods = ['get', 'head', 'post', 'put', 'delete', 'connect', 'options', 'trace', 'patch']
  return validMethods.includes(filterMethod(input)) || 'This is not a valid http method.'
}

function validateInput(input) {
  return input !== '' || 'Please provide an input.';
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
    validate: validateMethod,
    filter: filterMethod
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