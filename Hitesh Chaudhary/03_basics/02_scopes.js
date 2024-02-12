
 
//  {} curly braces in javascript are scope.


function one() {
    
    const username = "Chiekoo";

    function two() {
        
        const website = "github";

        console.log(username);

    }

    // console.log(webiste);

    two();

}

one();



if (true) {
    const username = "chiekoo";

    if (username === "chiekoo") {
        const website = " github";

        console.log(username + website);
    }

    // console.log(webiste);

}

// console.log(username);


// =========== interesting ==========

// console.log(addOne(5));  can be accessed by function

// function declaration
function addOne(num) {
    return num + 1;
}

addOne(5);


// console.log(addTwo(5));  // cannot accessed by fucntion

// function expresion
const addTwo = function (num) {
    return num + 2;
}

addTwo(5);

