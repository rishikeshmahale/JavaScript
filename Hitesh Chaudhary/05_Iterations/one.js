console.log("loops");

// for (expression 1; expression 2; expression 3) {
//     // code block to be executed
//   }
//   Expression 1 is executed (one time) before the execution of the code block.
  
//   Expression 2 defines the condition for executing the code block.
  
//   Expression 3 is executed (every time) after the code block has been executed.


// for (let index = 0; index < 10; index++){
//     const element = array[index];
// }


// for (let i = 0; i < 10; i++){
//     const element = i;

//     if (element == 5) {
//         console.log("Reached at no. 5");
//     }
    
//     console.log(element);
// }


// for (let i = 0; i < 10; i++){

//     console.log(`Outer loop : ${i}`);

//     for (let j = 0; j < 10; j++){
//         console.log(`Outer loop ${i} : Inner loop ${j}`);

//     }

// }


let table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = table[0]; i <= table.length; i++){
//     console.log(`Table of : ${i}`);

//     for (let j = table[0]; j <= table.length; j++){
//         console.log(`${i} * ${j} = ${i * j}`);
//     }

// }


let myArr = ["Doraemon", "Shinchan", "Perman", "Goku", "Vegeta", "Hatori"];

for (let i = 0; i < myArr.length; i++){
    const childhoodFav = myArr[i];
    console.log(childhoodFav);
}



// break and continue

for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log("Detected 5");
        break;  // code wont move ahead
    }

    console.log(`Value of index is ${index}`);
}

for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log("Detected 5");
        continue;  // although the code will run but the code below wont execute. it will make the loop skip the code below and again loop cycle begins.
    }

    console.log(`Value of index is ${index}`);
}


















































