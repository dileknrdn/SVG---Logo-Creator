const { Circle, Triangle, Square } = require('./lib/shapes.js');

const circle = new Circle("blue", "Circle", "white");
const triangle = new Triangle("green", "Triangle", "black");
const square = new Square("red", "Square", "yellow");

console.log(circle.getSVG());
console.log(triangle.getSVG());
console.log(square.getSVG());

// Run the test with the following command:
// npm test
//
// The test should pass.