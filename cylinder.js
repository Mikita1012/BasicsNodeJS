const PI = 3.14;

/**
* Function to calculate area of a cylinder
*/
const calculateArea = (r, h) => 2 * PI * r * (h + r);

/**
* Function to calculate volume of a cylinder
*/
const calculateVolume = (r, h) => PI * r * r * h;

exports.calculateArea = calculateArea; // statement 1
exports.calculateVolume = calculateVolume; // statement 2

// exports = { // statement 1
//     calculateArea: calculateArea,
//     calculateVolume: calculateVolume
//  }

//  module.exports = exports; 


 