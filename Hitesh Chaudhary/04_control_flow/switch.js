console.log("Switches in JS");

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// key => it is the value which i have to check;
// default => it runs only when none of the cases match.
// break => if its not mentioned below each case it executes all the condition except default.

const month = 3;
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;
    case 4:
        console.log("apr");
        break;
    
    default:
        console.log("Default case match");
        break;
    
}


// In case of stings

let day = "wed";

switch (day) {
    case "mon":
        console.log(`${day}`);
        break;
    case `${day}`: // OR
        console.log(`${day}`);
        break;
    case `${day}`:
        console.log(`${day}`);
        break;
    case `${day}`:
        console.log(`${day}`);
        break;
    case `${day}`:
        console.log(`${day}`);
        break;
    case `${day}`:
        console.log(`${day}`);
        break;
    case `${day}`:
        console.log(`${day}`);
        break;
    
    default:
        console.log(`${day}`);
        break;
}





