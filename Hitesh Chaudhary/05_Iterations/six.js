console.log("Map, filter, reduce");


const coding = ["Js", "Java", "Ruby", "Python", "C++"];


const values = coding.forEach((item, index) => {
    // console.log(item);
    return item;

});

// foreach does not return any value

console.log(values);

const newValues = coding.map((item, index) => {
    // console.log(item);
    return item;
});
  
console.log(newValues);  // [ 'Js', 'Java', 'Ruby', 'Python', 'C++' ]


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNums = myNums.filter((num) => num > 4);
// let newNums = myNums.filter((num) => (
//     num > 4
// ));
let newNums = myNums.filter((num) => {
    return num > 4
});
console.log(newNums);  // [ 5, 6, 7, 8, 9, 10 ]



const myNumVales = [];
console.log(myNumVales);

myNums.forEach((nums) => {
    if (nums > 4) {
        myNumVales.push(nums);
    }
});

console.log(myNumVales);


const books = [
    {
        title: "Book one",
        genre: "Fiction",
        published: 1981
    },
    {
        title: "Book two",
        genre: "Non-Fiction",
        published: 1992
    },
    {
        title: "Book Three",
        genre: "History",
        published: 1999
    },
    {
        title: "Book Four",
        genre: "Non-Fiction",
        published: 1989
    },
    {
        title: "Book Five",
        genre: "Science",
        published: 2009
    },
    {
        title: "Book Six",
        genre: "Fiction",
        published: 1987
    },
    {
        title: "Book Seven",
        genre: "History",
        published: 1986
    },
    {
        title: "Book Eight",
        genre: "Science",
        published: 2011
    },
    {
        title: "Book Nine",
        genre: "Non-Fiction",
        published: 1981
    },
    {
        title: "Book Ten",
        genre: "Science",
        published: 1999
    },
   
];

// const userBooks = books.filter((book) => book.genre == "History");
// const userBooks = books.filter((book) => book.genre.includes("Science"));

// const userBooks = books.filter((book) => {
//     return book.published >= "1995"
// });

const userBooks = books.filter((book) => {
    return book.published >= "1995" && book.genre == "History"
});

console.log(userBooks)








