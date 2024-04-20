module.exports.alpha = () => {
    // some code here
    // console.log("Inside Alpha");
 }
 
 const beta = () => {
    // some code here
 }
 
 const gamma = () => {
    // some code here
 }
 
//  module.exports.alpha = alpha;
//  module.exports.beta = beta;
//  module.exports.gamma = gamma;

//  module.exports = {
//     alpha: alpha,
//     beta: beta,
//     gamma: gamma
//  };

const foo = () => {
    console.log("alpha");
 }
 
 const bar = () => {
    console.log("beta");
 }
 
 exports = { // statement 1
    foo: foo,
    bar: bar
 };
 
 exports.foo = bar; // statement 2
 
 console.log(module.exports);
 console.log(exports);