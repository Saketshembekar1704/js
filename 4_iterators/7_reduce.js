const num = [1, 2, 3]

// const total = num.reduce(function (acc, cur) {
//     console.log(`acc value is ${acc} and current value is ${cur}`);

//     return acc + cur
// }, 0)
const total = num.reduce((acc, cur) => acc + cur, 0)
// console.log(total);

const shoppingCart = [
    {
        item: "js course",
        price: 999

    },
    {
        item: "python course",
        price: 1999

    },
    {
        item: "mobile dev course",
        price: 3999

    },
    {
        item: "data science course",
        price: 1999

    },
    {
        item: "full stack course",
        price: 2999

    },
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);

