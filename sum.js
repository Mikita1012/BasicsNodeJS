// WARNING: Do not edit the code outside the region BEGIN and END mentioned below. If you do so, the test cases may not pass.
 
// Read the variable from STDIN
process.stdin.on('data', function(chunk) {
    let lines = chunk.toString().split('\n');
    let input = lines[0];
    let inputArr = input.split(" ").map(function(element) {
        return parseInt(element, 10);
    });
   
   
    // BEGIN: Write all your code below this line
   
    // TODO: Complete the following function definition as per the comments given below.
    /**
     * Function to calculate the sum of numbers (Keep the name of the function as 'sum')
     * @returns {Number} sum of all the arguments passed
     */
     
     function sum(...inputArr)
 {
    let total = 0;
    for(const arg of inputArr) {
        total += arg;
    }
    return total;
 }   
    // END: Write all your code above this line
    
    // Notice that ...inputArr will spread the elements in the array into individual arguments
    console.log(sum(...inputArr));
});
