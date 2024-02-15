console.log("For Each");

const coding = ["Js", "Java", "Ruby", "Python", "C++"];

console.log(coding);

coding.forEach(function (item, index) {
    console.log(`${item} : ${index + 1}`);
});

// OR

coding.forEach((item, index) => {
    console.log(`${index} : ${item}`);
});


function printMe(item) {
    console.log(item);
}

coding.forEach(printMe);


coding.forEach((item, index, arr) => {
    console.log(`${item} has index ${index} of array [${arr}]`);
});


const myCoding = [
    {
        id: 1,
        lang: "Js",
    },
    {
        id: 2,
        lang: "java",
    },
    {
        id: 3,
        lang: "py",
    },

];


const languages = myCoding.forEach((item, index) => {
    return item
})


// const languages = myCoding.map((item, index) => {
//     return item
// })  map fn will return the same array

console.log(languages);


myCoding.forEach((item, index) => {
    console.log(`${item.id} : ${item.lang} has index ${index}`);
})



