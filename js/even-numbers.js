'use strict';

// getting user value
const maxValue = Number(prompt("Enter your number: "));

// with for:
if(isNaN(maxValue)){
    console.log("Error: not a number!");
} else {
    const isPositive = maxValue > 0 ? 1 : -1;
    for(let i = 0; i < Math.abs(maxValue); i++){
        if(i % 2 === 0 && i !== 0){
            console.log(i*isPositive);
        }
    }
}

// with while:
// if(isNaN(maxValue)){
//     console.log("Error: not a number!");
// } else {
//     let index = 0;
//     const isPositive = maxValue > 0 ? 1 : -1;
//     while(index < Math.abs(maxValue)){
//         if(index % 2 === 0 && index !== 0){
//             console.log(index*isPositive);
//         }
//         index++;
//     }
// }