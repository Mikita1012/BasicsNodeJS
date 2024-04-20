const circle = require('./circle.js');
const square = require('./square.js');
const rectangle = require('./rectangle.js');


console.log(circle);
// { output of line 4
//     calculateArea: [Function: calculateArea],
//     calculateCircumference: [Function: calculateCircumference]
//   }
const pi = circle.lifeOfPie;
console.log(`PI value is ${pi}`);


const area = circle.calculateArea(3);
const circumference = circle.calculateCircumference(3);

console.log(`CIRCLE: Area = ${area}, Circumference = ${circumference}`);



// --------------------------------------------------------------------------
const sqaureArea = square.calculateAreaOfSquare(6);
const squarePerimeter = square.calculatePerimeterOfSquare(6);

console.log(`SQUARE: Area = ${sqaureArea}, Perimeter = ${squarePerimeter}`);

// ----------------------------------------------------------------------------
const areaOfRectangle = rectangle.areaOfRectangle(4, 7);
const perimeterOfRectangle = rectangle.perimeterOfRectangle(4, 7);

console.log(`RECTANGLE: Area = ${areaOfRectangle}, Perimeter = ${perimeterOfRectangle}`);
