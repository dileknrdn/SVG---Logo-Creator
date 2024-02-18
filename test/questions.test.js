const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("../lib/shapes.js");

const questions = require("../lib/questions.js");

test("Questions array is defined", () => {
  expect(questions).toBeDefined();
});

function createShape(shape, fill, text, textColor) {
  switch (shape) {
    case "Circle":
      return new Circle(fill, text, textColor);
    case "Square":
      return new Square(fill, text, textColor);
    case "Triangle":
      return new Triangle(fill, text, textColor);
    default:
      throw new Error("Invalid shape selected");
  }
}

function main() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const { shape, fill, text, textColor } = answers;
      const newShape = createShape(shape, fill, text, textColor);
      console.log(newShape.getSVG());
    })
    .catch((err) => {
      console.error("Error occurred:", err);
    });
}

main();
