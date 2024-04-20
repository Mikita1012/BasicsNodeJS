const circle = require('./circle.js');


console.log(circle);
// { output of line 4
//     calculateArea: [Function: calculateArea],
//     calculateCircumference: [Function: calculateCircumference]
//   }

const area = circle.calculateArea(3);
const circumference = circle.calculateCircumference(3);

console.log(`Area = ${area}, Circumference = ${circumference}`);

const pi = circle.lifeOfPie;
console.log(`PI value is ${pi}`);
