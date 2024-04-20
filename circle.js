const PI = 3.14
const calculateArea = (r) => PI * r * r;
const calculateCircumference = (r) => 2 * PI * r;

// object.exports.key = value;
// module.exports.keyAsValidIdentifier = constructDefinedInTheModule;
module.exports.calculateArea = calculateArea;
module.exports.calculateCircumference = calculateCircumference;
module.exports.lifeOfPie = PI;

// -------------------OR------------------------------------

// object.exports.key = value;
// module.exports['key'] = constructDefinedInTheModule;
// module.exports['calculateArea'] = calculateArea;
// module.exports['calculateCircumference'] = calculateCircumference;
