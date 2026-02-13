// const arr = ["abc", "def"]
// let myObj = {
//     name: "Saket",
//     age: 23
// }

// const myFun = function () {
//     console.log("Hello ");

// }

// null gives "Object" as typeof object
// object => function as typeof object


// stack(Primitive, copy is provided)  Heap(Non-primitive, reference of the object is provided)

let userA = {
    email: "abc@gmail.com"
}

let userB = userA
userB.email = "saket@gmail.com"

console.log(userA.email);
console.log(userB.email);
