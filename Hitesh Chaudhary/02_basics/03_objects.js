
// const tinderUser = new Object();  // singleton object

const tinderUser = {}  // object literals

tinderUser.id = Date.now();
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Chiekoo",
        }
    }
}

// console.log(regularUser?.fullname?.userfullname?.firstname);


const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = { obj1, obj2 }; // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


// const obj3 = { ...obj1 , obj2 } // { '1': 'a', '2': 'b', obj2: { '3': 'a', '4': 'b' } }

// const obj3 = { ...obj1, ...obj2 };

// const obj3 = Object.assign(obj1 , obj2) // Or
// 1st argument is target and 2nd is source and we are telling it to merge the source in target


const obj4 = { 5: "a", 6: "b" };

const obj3 = Object.assign({}, obj1, obj2, obj4);
// here we can be sure that the target will be an object and rest other values will be source

// console.log(obj3);


const users = [
    {
        id: 1,
        email : "xyz@google.com"
    },
    {
        id: 2,
        email : "abc@google.com"
    },
    {
        id: 3,
        email : "lmn@google.com"
    },
]

// console.log(users[0].email);


console.log(tinderUser);

console.log(Object.keys(tinderUser)); // returns result in the form of array.
// [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser));
// [ 1707755024317, 'Sammy', false ]

console.log(Object.entries(tinderUser));
// [
//   [ 'id', 1707755099837 ],
//   [ 'name', 'Sammy' ],
//   [ 'isLoggedIn', false ]
// ]


console.log(tinderUser.hasOwnProperty("isLoggedIn"));   // true