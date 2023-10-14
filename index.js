const inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        message: "Enter text for the logo. (Must not be more than 3 characters)",
        name: "logoText",
        validate: (logoText) => {
            if (logoText.length > 3 || logoText.length < 1) {
                return "Text for the logo must not be more than 3 characters.";
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Enter a text color",
        name: "textColor"
    },
    {
        type: "list",
        message: "Select a shape for the logo",
        choices: ["Circle", "Triangle", "Square"],
        name: "shape"
    },
    {
        type: "input",
        message: "Enter the shape color",
        name: "shapeColor"
    }];

inquirer
    .prompt(questions)
    .then(function (data) {
        console.log(data);
    })