for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and Outer loop value ${j}`);
        // console.log(`${i} * ${j} = ${i*j}`);

    }

}


const arr = ["flash", "superman", "batman"]
// console.log(arr.length);

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element);


}

// for (let index = 0; index < 10; index++) {
//     if(index == 5){
//         console.log(`5 detected`);
//         break

//     }
//     console.log(`Value of i is ${index}`);

// }

for (let index = 0; index < 10; index++) {
    if (index == 5) {
        console.log(`5 detected`);
        continue

    }
    console.log(`Value of i is ${index}`);

}