
// Immediately invoked function expression (IIFE)


// When we dont want pollution from global scope we create our seperate scope and when we want the fn to immediately invoke.


// Many a times the variables declared in the global scope causes problems and to eliminate that pollution we use iife


// () the first parenthesis is where we write the function's defination.
// () the 2nd parenthesis is when we execute the function.

// named function
(function One() {
    console.log("IIFE 1");
})(); 
// The semicolor is necessary since the iife doesnt know when to stop executing context so in such situations we use ; to end the execution.


(() => {
    console.log("IIFE 2");
})();


(function myName(name) {
    console.log(`welcome, ${name}`)
})('chiekoo');

((name) => {
    console.log(`welcome, ${name}`)
})('harry');



