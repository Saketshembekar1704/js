const user = {}
user.id = "1",
    user.name = "Saket"
user.isLoggedIn = false
// console.log(user);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "abc",
            lastname: "def"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = { ...obj1, ...obj2 }
console.log(obj3);

