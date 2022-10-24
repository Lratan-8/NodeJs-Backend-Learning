// MODULES 

//Module is a library or a set of reusable function.


//Here below we just created a function. Now this function can be used anywhere inside our code so we can export it by creating it a module. 

module.exports.add = function(a,b){
    return a +b;
};

//module.exports - It is an object. In this object we are giving 'add' as a key and it's value is this function. Similarly, I can add multiple function.

module.exports.multiply = function(x, y){
    return x*y;
};