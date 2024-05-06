'use strict';

// getting user value
const maxValue = Number(prompt("Enter your number: "));

// with for:
if(isNaN(maxValue)){
    console.log("Error: not a number!");
} else {
    const isPositive = maxValue > 0 ? 1 : -1;
    for(let i = 2; i < Math.abs(maxValue); i += 2){
        console.log(i*isPositive);
    }
}

// with while:
// if(isNaN(maxValue)){
//     console.log("Error: not a number!");
// } else {
//     let index = 2;
//     const isPositive = maxValue > 0 ? 1 : -1;
//     while(index < Math.abs(maxValue)){
//         console.log(index*isPositive);
//         index += 2;
//     }
// }