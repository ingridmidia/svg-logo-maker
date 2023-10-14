const inquirer = require("inquirer");
const fs = require("fs");
const SVG = require("./lib/svg");
const { Square, Triangle, Circle } = require("./lib/shapes");

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

const writeLogo = logo => {
    fs.writeFile("logo.svg", logo.render(), (err) =>
        err ? console.error(err) : console.log("Generated logo.svg")
    )
}

inquirer
    .prompt(questions)
    .then(function (data) {

        const logo = new SVG();
        logo.setText(data.logoText, data.textColor);

        if (data.shape === "Circle") {
            const logoShape = new Circle();
            logoShape.setColor(data.shapeColor);
            logo.setShape(logoShape);
        } else if (data.shape === "Square") {
            const logoShape = new Square();
            logoShape.setColor(data.shapeColor);
            logo.setShape(logoShape);
        } else if (data.shape === "Triangle") {
            const logoShape = new Triangle();
            logoShape.setColor(data.shapeColor);
            logo.setShape(logoShape);
        }

        writeLogo(logo);
    })