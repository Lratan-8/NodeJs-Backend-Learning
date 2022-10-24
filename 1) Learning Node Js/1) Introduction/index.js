// console.log("Hello world");

function add(a, b){
    console.log(a +b);
};

// add();

/*process.argv                 

    process is a global variable that looks over whatever is happening in node js 
    and the process.argv property returns an array containing the command-line arguments 
    passed when the Node.js process was launched. The first element will be process.execPath. 
    See process.argv0 if access to the original value of argv[0] is needed. 
    The second element will be the path to the JavaScript file being executed. 
    The remaining elements will be any additional command-line arguments.*/


console.log(process.argv);

var args = process.argv.slice(1); 

console.log(args)

/*slice function gives us an array, so what we did is that we sliced the argument into two parts and if there is only one argument in slice method, 
then that means return an array of remaining arrays starting from index passed. and leave everything else before it*/

console.log("Adding the given numbers" + add(parseInt(args[0]), parseInt(args[1])));






//=====================================================================================================================================================

//operation on modules

const operations = require('./_2Modules');

console.log(operations.multiply(5,4));

