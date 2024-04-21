const circle = require('./circle.js');
const square = require('./square.js');
const rectangle = require('./rectangle.js');
const exportsKeyword = require('./exportsKeyword.js');
const cylinder = require('./cylinder.js');
const questions = require('./Questions.js');
// const chalk = require('chalk'); 


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

// -----------------------------------------------------------------------------------
exportsKeyword.foo();
exportsKeyword.bar();
exportsKeyword.sum(22, 45);
exportsKeyword.subtract(93, 12);

// ------------------------------------------------------------------------------
let radius = 7, height = 3.5;
console.log(cylinder.calculateArea(radius, height)); // statement 4
console.log(cylinder.calculateVolume(radius, height)); // statement 5

let obj1 = {
    x: 10,
    y: 20
   }
   let obj2 = obj1;
   obj1.x = 30; // manipulating the key of obj1
   console.log(obj1.x, obj2.x);

//    let obj2 = obj1;
//    obj2.x = 30; // manipulating the key of obj1
//    console.log(obj1.x, obj2.x);

// ------------------------------------------------------------------------------
questions.alpha();

// ---------------------------------------------------------------------------
console.log("using nodemon here keepind app.js as starting point. whenever you made any changes in your file and saved it, the code written inside the file was automatically executed.");
// [nodemon] starting `node app.js` == o/p for the code line above 

// ---------------------------------------------------------------------------

// console.log(chalk.blue('Hello World!'));
// const log = console.log;
// // const error = chalk.yellow.bgRed;
// log('Address not found');

// ---------------------------------------------------------------------------
//          CORE MODULES
console.log(require('module').builtinModules);

//  CORE MODULE - FS - FILE SYSTEM
const fs = require('fs');
// DONE USING ASYNC WAY 

const data = "Hello!This text here is written by app.js file using fs-module";
// const data = "Hello! Let's learn NODE.JS";

const options = {
    "encoding" : "utf8",
    flag: 'a'
}

fs.writeFile('data_async.txt', data, options, (err) => {
    if(err)
        throw err;
    console.log("File saved successfully!");
})


// DONE USING SYNCHORONUS WAY 
const message = "Hey, I\ 'm learning NodeJS";

try{
  fs.writeFileSync('data_sync.txt', data, options)  
} catch(err) {
    throw err;
}
