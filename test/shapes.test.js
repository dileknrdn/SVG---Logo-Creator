const { Circle, Triangle, Square } = require("../lib/shapes.js");

const circle = new Circle("red", "Circle", "white");
const triangle = new Triangle("blue", "Triangle", "white");
const square = new Square("green", "Square", "white");


test("Circle class is defined", () => {
  expect(Circle).toBeDefined();
});

test("Triangle class is defined", () => {
  expect(Triangle).toBeDefined();
});

test("Square class is defined", () => {
  expect(Square).toBeDefined();
});

console.log(circle.getSVG());
console.log(triangle.getSVG());
console.log(square.getSVG());

// Run the test with the following command:
// npm test
//
// The test should pass.
