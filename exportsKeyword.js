const foo = () => {
    console.log("alpha");
 }
 
 const bar = () => {
    console.log("beta");
 }
 
 console.log(exports);


// using module.exports 
//  module.exports = {
//     foo: foo,
//     bar: bar
//  };

//  WAY 1 - shorthand of module.export
 exports.foo = foo;
 exports.bar = bar;

//  the ‘exports’ object is manipulated by adding some properties to it. Thus, the ‘module.exports’ object will also be impacted and all the changes will be reflected in it too.
//  Finally, the status will be as follows:
//  module.exports = { alpha: [Function: alpha], beta: [Function: beta] }
//  exports = { alpha: [Function: alpha], beta: [Function: beta] } 
//  You also know at the end of a module, the ‘module.exports’ object is returned. Since the ‘module.exports’ object consists of both ‘alpha’ and ‘beta’ functions, this option is one of the correct choices.

//  WAY 2
exports = {
    foo: foo,
    bar: bar
 };
//  the ‘exports’ object is manipulated by adding some properties to it. Thus, the ‘module.exports’ object will also be impacted and all the changes will be reflected in it too.
//  Finally, the status will be as follows:
//  module.exports = { alpha: [Function: alpha], beta: [Function: beta] }
//  exports = { alpha: [Function: alpha], beta: [Function: beta] }
//  You also know at the end of a module, the ‘module.exports’ object is returned. Since the ‘module.exports’ object consists of both ‘alpha’ and ‘beta’ functions, this option is one of the correct choices.

//  WAY 3
exports.sum = (a, b) => console.log(a+b);
exports.subtract = (a, b) => console.log(a-b);
// At the end, you are assigning the ‘module.exports’ variable to everything contained inside the ‘exports’ variable. Thus, ‘module.exports’ will start pointing to ‘exports’. The status will finally become:
// module.exports = { alpha: [Function: alpha], beta: [Function: beta] }
// exports = { alpha: [Function: alpha], beta: [Function: beta] }
// You also know at the end of a module, the ‘module.exports’ object is returned. Since the ‘module.exports’ object consists of both the functions, ‘alpha’ and ‘beta’, this option is one of the correct choices.






module.exports = exports;  //to use exports keyword. Without using this an error may encounter saying - func not defined




 