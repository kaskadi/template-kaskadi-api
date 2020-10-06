'use strict';

const inquirer = require('inquirer');

function filterInput (input) {
  return input.toLowerCase().trim();
}

function validateMethod(input) {
  const validMethods = ['get', 'head', 'post', 'put', 'delete', 'connect', 'options', 'trace', 'patch']
  return validMethods.includes(filterInput(input)) || 'This is not a valid http method.'
}

function validateName(input) {
  const regexp = new RegExp(/^[a-z\-]*$/, 'g')
  const filteredInput = filterInput(input)
  return regexp.test(filteredInput) || 'Please provide a valid name - should only contain "-" as special character';
}

function validatePath(input) {
  const regexp = new RegExp(/^[a-z\-\/]*$/, 'g')
  const filteredInput = filterInput(input)
  return regexp.test(filteredInput) || 'Please provide a valid path - should only contain "-" and "/" as special character';
}

const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's the name?",
    validate: validateName,
    filter: filterInput
  },
  {
    type: 'input',
    name: 'method',
    message: "What's the method?",
    validate: validateMethod,
    filter: filterInput
  },
  {
    type: 'input',
    name: 'path',
    message: "What's the path?",
    validate: validatePath,
    filter: filterInput
  },
];

module.exports = () => {
  return inquirer.prompt(questions)
}